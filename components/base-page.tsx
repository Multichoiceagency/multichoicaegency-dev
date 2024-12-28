import { motion } from 'framer-motion'
import { Metadata } from 'next'
import Head from 'next/head'

interface BasePageProps {
  children: React.ReactNode
  title: string
  description: string
}

export function BasePage({ children, title, description }: BasePageProps) {
  return (
    <>
      <Head>
        <title>{title} | Multichoice Agency</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  )
}

