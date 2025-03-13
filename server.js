const { createServer: createHttpServer } = require('http')
const { createServer: createHttpsServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
// Correct hostname format - just the domain without protocol or trailing slash
const hostname = dev ? 'localhost' : 'multichoiceagency.nl'
const port = process.env.PORT || (dev ? 3000 : 443)
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  let server

  if (dev) {
    // Use HTTP for development
    server = createHttpServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    })
  } else {
    // Use HTTPS for production with SSL certificates
    const httpsOptions = {
      key: fs.readFileSync(path.join(process.cwd(), 'certificates/privkey.pem')),
      cert: fs.readFileSync(path.join(process.cwd(), 'certificates/fullchain.pem'))
    }

    server = createHttpsServer(httpsOptions, async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    })

    // Optional: Redirect HTTP to HTTPS
    createHttpServer((req, res) => {
      res.writeHead(301, { 
        Location: `https://${hostname}${req.url}` 
      })
      res.end()
    }).listen(80)
  }

  server.once('error', (err) => {
    console.error(err)
    process.exit(1)
  })

  server.listen(port, () => {
    console.log(`> Ready on ${dev ? 'http' : 'https'}://${hostname}:${port}`)
  })
})