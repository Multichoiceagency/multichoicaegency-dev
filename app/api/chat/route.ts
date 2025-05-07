// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OpenAI API key is missing' }, { status: 500 });
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Je bent een professionele AI assistent gespecialiseerd in sales en klantenservice. Stel diepgaande vragen, geef advies, en kies de beste dienst uit deze lijst: 

- Web Development: websites, webshops, portalen, maatwerk-websites, shopify-webshop, woocommerce-webshop, wordpress-website
- Online Marketing: seo, google-ads, social-media, content-marketing, bedrijfsvideo, productvideo
- Software & Integratie: software-ontwikkeling, app-ontwikkeling, digitale-transformatie, systeem-integratie, data-integratie
- Overige Diensten: business-intelligence, veiligheid-compliance, ai-automatisering

Vraag altijd om naam, e-mail en telefoonnummer. Vraag ook of de klant een voorbeeldtemplate of logo wil uploaden.`
        },
        ...messages,
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();

  if (!data.choices || !data.choices[0]) {
    return NextResponse.json({ error: 'No response from OpenAI' }, { status: 500 });
  }

  return NextResponse.json({ reply: data.choices[0].message });
}