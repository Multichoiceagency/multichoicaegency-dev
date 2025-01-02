import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import nodemailer from 'nodemailer'

const WP_API_ENDPOINT = 'https://cloud.multichoiceagency.nl/wp-json/wp/v2/contact_submissions'

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body;

    try {
      // Submit to WordPress
      const wpResponse = await axios.post(
        WP_API_ENDPOINT,
        {
          title: subject,
          status: 'publish',
          acf: {
            name,
            email,
            phone,
            message,
            submission_date: new Date().toISOString(),
          },
        },
        {
          auth: {
            username: process.env.WORDPRESS_USERNAME as string,
            password: process.env.WORDPRESS_APP_PASSWORD as string,
          },
        }
      );

      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Subject: ${subject}
          Message: ${message}
        `,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: 'Contact form submitted successfully', id: wpResponse.data.id });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      res.status(500).json({ message: 'Failed to submit contact form' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

