"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import { getAssetUrl } from "@/lib/email-utils"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Naam is verplicht" }),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Selecteer een dienst" }),
  email: z.string().email({ message: "Voer een geldig e-mailadres in" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Beschrijf uw project (minimaal 10 tekens)" }),
})

type FormData = z.infer<typeof formSchema>

export async function submitQuoteRequest(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP host
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
      },
    })

    // Format the message body with all form data
    const messageBody = `
      <h1>Nieuwe offerte aanvraag</h1>
      <p>Er is een nieuwe offerte aanvraag ontvangen via het contactformulier op de website.</p>
      
      <h2>Gegevens aanvrager:</h2>
      <ul>
        <li><strong>Naam:</strong> ${validatedData.name}</li>
        <li><strong>Bedrijf:</strong> ${validatedData.company || "Niet opgegeven"}</li>
        <li><strong>E-mail:</strong> ${validatedData.email}</li>
        <li><strong>Telefoon:</strong> ${validatedData.phone || "Niet opgegeven"}</li>
        <li><strong>Dienst:</strong> ${validatedData.service}</li>
      </ul>
      
      <h2>Bericht:</h2>
      <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      
      <hr>
      <p>Deze e-mail is automatisch verzonden vanaf het contactformulier op multichoiceagency.nl</p>
    `

    // Set up email data
    const mailOptions = {
      from: `"Multichoiceagency Website" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER, // Where to send notifications
      replyTo: validatedData.email, // Set reply-to as the customer's email
      subject: `Nieuwe offerte aanvraag: ${validatedData.service} - ${validatedData.name}`,
      html: messageBody,
    }

    // Send the email
    console.log("Sending email notification...")
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.messageId)

    // Get the logo URL
    const logoUrl = getAssetUrl("/logos/logo-wit.png")

    // Create a beautiful confirmation email for the customer
    const confirmationBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bedankt voor uw offerte aanvraag</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            background-color: #f5f9f5;
          }
          
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          
          .email-header {
            background-color: #2D4625;
            color: white;
            padding: 30px;
            text-align: center;
          }
          
          .logo {
            margin-bottom: 20px;
            width: 180px;
          }
          
          .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          
          .email-body {
            padding: 30px;
            background-color: #ffffff;
          }
          
          .greeting {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #2D4625;
          }
          
          .message {
            margin-bottom: 25px;
            color: #555555;
          }
          
          .details-box {
            background-color: #f5f9f5;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
            border-left: 4px solid #a6e267;
          }
          
          .details-box h2 {
            margin-top: 0;
            margin-bottom: 15px;
            font-size: 18px;
            color: #2D4625;
          }
          
          .details-table {
            width: 100%;
            border-collapse: collapse;
          }
          
          .details-table td {
            padding: 8px 0;
            vertical-align: top;
          }
          
          .details-table td:first-child {
            font-weight: 600;
            width: 120px;
            color: #2D4625;
          }
          
          .cta-button {
            display: inline-block;
            background-color: #2D4625;
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 30px;
            font-weight: 600;
            margin-top: 5px;
            margin-bottom: 25px;
            text-align: center;
          }
          
          .portfolio-section {
            background-color: #f5f9f5;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
            text-align: center;
          }
          
          .portfolio-section h2 {
            margin-top: 0;
            color: #2D4625;
            font-size: 18px;
          }
          
          .portfolio-section p {
            margin-bottom: 20px;
            color: #555555;
          }
          
          .contact-info {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eeeeee;
          }
          
          .contact-info p {
            margin: 5px 0;
            font-size: 14px;
            color: #666666;
          }
          
          .email-footer {
            background-color: #f5f9f5;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #888888;
          }
          
          .social-links {
            margin-bottom: 15px;
          }
          
          .social-link {
            display: inline-block;
            margin: 0 8px;
            color: #2D4625;
            text-decoration: none;
          }
          
          @media only screen and (max-width: 600px) {
            .email-container {
              width: 100%;
              border-radius: 0;
            }
            
            .email-header, .email-body, .email-footer {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <img src="${logoUrl}" alt="Multichoiceagency Logo" class="logo">
            <h1>Bedankt voor uw offerte aanvraag</h1>
          </div>
          
          <div class="email-body">
            <p class="greeting">Beste ${validatedData.name},</p>
            
            <p class="message">Hartelijk dank voor uw offerte aanvraag bij Multichoiceagency. We hebben uw aanvraag ontvangen en zullen zo spoedig mogelijk contact met u opnemen om uw project te bespreken.</p>
            
            <div class="details-box">
              <h2>Uw aanvraaggegevens:</h2>
              <table class="details-table">
                <tr>
                  <td>Naam:</td>
                  <td>${validatedData.name}</td>
                </tr>
                ${
                  validatedData.company
                    ? `
                <tr>
                  <td>Bedrijf:</td>
                  <td>${validatedData.company}</td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td>Dienst:</td>
                  <td>${validatedData.service}</td>
                </tr>
                <tr>
                  <td>Bericht:</td>
                  <td>${validatedData.message.replace(/\n/g, "<br>")}</td>
                </tr>
              </table>
            </div>
            
            <div class="portfolio-section">
              <h2>Bekijk ons portfolio</h2>
              <p>Benieuwd naar onze eerdere projecten? Bekijk ons portfolio om te zien wat wij voor andere klanten hebben gerealiseerd.</p>
              <a href="https://multichoiceagency.nl/cases" class="cta-button">Bekijk ons portfolio</a>
            </div>
            
            <p class="message">Heeft u in de tussentijd vragen? Neem dan gerust contact met ons op. We staan voor u klaar om al uw vragen te beantwoorden.</p>
            
            <div class="contact-info">
              <p><strong>Multichoiceagency</strong></p>
              <p>Email: <a href="mailto:info@multichoiceagency.nl">info@multichoiceagency.nl</a></p>
              <p>Telefoon: <a href="tel:0103220410">0103220410</a></p>
              <p>Website: <a href="https://multichoiceagency.nl">multichoiceagency.nl</a></p>
            </div>
          </div>
          
          <div class="email-footer">
            <div class="social-links">
              <a href="https://facebook.com/multichoiceagency" class="social-link">Facebook</a>
              <a href="https://linkedin.com/company/multichoiceagency" class="social-link">LinkedIn</a>
              <a href="https://instagram.com/multichoiceagency" class="social-link">Instagram</a>
            </div>
            <p>© ${new Date().getFullYear()} Multichoiceagency. Alle rechten voorbehouden.</p>
            <p>Dit is een automatisch gegenereerde e-mail. U hoeft hier niet op te reageren.</p>
          </div>
        </div>
      </body>
      </html>
    `

    const confirmationOptions = {
      from: `"Multichoiceagency" <${process.env.EMAIL_USER}>`,
      to: validatedData.email,
      subject: "Bedankt voor uw offerte aanvraag - Multichoiceagency",
      html: confirmationBody,
    }

    // Send confirmation email
    await transporter.sendMail(confirmationOptions)
    console.log("Confirmation email sent to customer")

    return { success: true, message: "Uw aanvraag is succesvol verzonden" }
  } catch (error) {
    console.error("Form submission error:", error)
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        error: "Validatiefout",
        validationErrors: error.errors,
      }
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "Er is een fout opgetreden",
    }
  }
}
