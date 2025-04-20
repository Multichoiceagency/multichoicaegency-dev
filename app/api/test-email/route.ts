import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP host
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verify the connection configuration
    await transporter.verify()
    console.log("SMTP connection verified successfully")

    // Send a test email
    const info = await transporter.sendMail({
      from: `"Test Email" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: "Test Email from Multichoiceagency Website",
      html: `
        <h1>Test Email</h1>
        <p>This is a test email to verify that your email configuration is working correctly.</p>
        <p>If you're seeing this, your email setup is working!</p>
        <hr>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      messageId: info.messageId,
      emailUser: process.env.EMAIL_USER?.substring(0, 3) + "..." + process.env.EMAIL_USER?.split("@")[1],
      notificationEmail: (process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER)?.substring(0, 3) + "...",
    })
  } catch (error) {
    console.error("Error sending test email:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        troubleshooting: [
          "Check that EMAIL_USER and EMAIL_PASSWORD environment variables are set correctly",
          "If using Gmail, make sure you've enabled 'Less secure app access' or created an App Password",
          "Verify that your email provider allows SMTP access",
          "Check if your email provider requires different SMTP settings",
        ],
      },
      { status: 500 },
    )
  }
}
