import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, phone, website } = await req.json()

    // ✅ Website automatisch aanvullen
    let fixedWebsite = website?.trim() || ""
    if (!/^https?:\/\//i.test(fixedWebsite)) {
      fixedWebsite = "https://" + fixedWebsite
    }

    // Nodemailer Gmail transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // ✅ Mail naar klant
    await transporter.sendMail({
      from: `"Multichoice Agency" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Bedankt voor uw gratis website audit aanvraag",
      html: `
        <h2>Beste ${name},</h2>
        <p>Bedankt voor uw aanvraag voor een gratis website audit. 
        Wij nemen spoedig contact met u op om de details door te nemen.</p>
        <p>Daarnaast ontvangt u <strong>10% korting</strong> op uw eerste project bij ons.</p>
        <br/>
        <p>Met vriendelijke groet,</p>
        <p><strong>Multichoice Agency</strong></p>
      `,
    })

    // ✅ Mail naar admin
    await transporter.sendMail({
      from: `"Website Audit" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: "Nieuwe website audit aanvraag",
      html: `
        <h3>Nieuwe aanvraag ontvangen</h3>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Website:</strong> <a href="${fixedWebsite}" target="_blank">${fixedWebsite}</a></p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Nodemailer error:", error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
