import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, service, budget, message } = await req.json();

    // Controleer of alle velden aanwezig zijn
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht!" },
        { status: 400 }
      );
    }

    // Maak een transporter aan met SMTP‑instellingen uit .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT ?? "465", 10),
      secure: process.env.SMTP_SECURE === "true", // 'true' als je bijvoorbeeld port 465 gebruikt
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-mail voor de admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: "info@multichoiceagency.nl", // pas eventueel aan naar je admin e-mailadres
      subject: "Nieuwe Offerte Aanvraag",
      text: `Er is een nieuwe offerte aanvraag ontvangen:\n\n
             Naam: ${name}\n
             E-mail: ${email}\n
             Dienst: ${service}\n
             Budget: ${budget}\n
             Bericht: ${message}`,
    };

    // Bevestigingsmail voor de gebruiker
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Bevestiging Offerte Aanvraag",
      text: `Beste ${name},\n\n
             Bedankt voor uw offerte aanvraag. We hebben de volgende gegevens ontvangen:\n
             Naam: ${name}\n
             E-mail: ${email}\n
             Dienst: ${service}\n
             Budget: ${budget}\n
             Bericht: ${message}\n\n
             We nemen zo spoedig mogelijk contact met u op.\n\n
             Met vriendelijke groet,\n
             Team Multichoice Agency`,
    };

    // Verstuur de e-mails
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log("Admin e-mail verzonden:", adminInfo.response);

    const userInfo = await transporter.sendMail(userMailOptions);
    console.log("Bevestigingsmail aan gebruiker verzonden:", userInfo.response);

    return NextResponse.json(
      { success: "Offerte aanvraag verzonden!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fout bij e-mailverzending:", error);
    return NextResponse.json(
      { error: "Interne serverfout" },
      { status: 500 }
    );
  }
}
