import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const transcript = formData.get('transcript') as string;
  const clientEmail = formData.get('clientEmail') as string | null;
  const file = formData.get('attachment') as File | null;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json({ error: 'Email credentials missing' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const attachments = [];

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: file.name,
      content: buffer,
    });
  }

  const mailOptions = {
    from: 'Chatbot <noreply@multichoiceagency.nl>',
    subject: 'Chat Transcriptie van Multibot',
    text: transcript,
    attachments,
  };

  // Mail naar admin
  await transporter.sendMail({
    ...mailOptions,
    to: 'info@multichoiceagency.nl',
  });

  // Mail naar klant als e-mail bekend is
  if (clientEmail) {
    await transporter.sendMail({
      ...mailOptions,
      to: clientEmail,
      from: 'Multibot <noreply@multichoiceagency.nl>',
      subject: 'Je gesprek met Multibot',
    });
  }

  return NextResponse.json({ success: true });
}