'use server'

interface ContactFormData {
  companyname: string
  name: string
  phone: string
  email: string
  description: string
}

export async function submitToZapier(data: ContactFormData) {
  const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL

  if (!ZAPIER_WEBHOOK_URL) {
    throw new Error('Missing Zapier webhook URL')
  }

  const response = await fetch(ZAPIER_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to submit form')
  }

  return response.json()
}

