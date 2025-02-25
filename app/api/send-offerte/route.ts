import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, service, budget } = await req.json();

    if (!name || !email || !service || !budget) {
      return NextResponse.json({ error: "Alle velden zijn verplicht!" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@multichoiceagency.nl", // Pas dit aan naar je eigen e-mailadres
      subject: "Nieuwe Offerte Aanvraag",
      text: `Naam: ${name}\nE-mail: ${email}\nDienst: ${service}\nBudget: ${budget}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail verzonden:", info.response);

    return NextResponse.json({ success: "Offerte aanvraag verzonden!" }, { status: 200 });
  } catch (error) {
    console.error("Fout bij e-mailverzending:", error);
    return NextResponse.json({ error: "Interne serverfout" }, { status: 500 });
  }
}
