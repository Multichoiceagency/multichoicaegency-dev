import { ServicePageTemplate } from '@/components/service-page-template'
import { ContactFormulier } from '@/components/contact-formulier'

export default function DigitalPlatformsPage() {
  return (
    <ServicePageTemplate
      title="Digital Platforms"
      subtitle="Onze diensten"
      description="We zorgen voor de bouw van technologische teams, architectuur en platforms. Van eenvoudig tot complex, om diensten te digitaliseren en klantloyaliteit te bevorderen."
    >
      <div className="prose prose-lg dark:prose-invert">
        <h2>Technologische excellentie voor digitale groei</h2>
        <p>
          In het huidige digitale landschap is een sterke technologische basis essentieel voor succes. 
          Onze expertise in het bouwen van digitale platforms stelt organisaties in staat om hun diensten 
          te moderniseren en klantrelaties te versterken.
        </p>
        
        <h3>Onze aanpak</h3>
        <ul>
          <li>Technische architectuur op maat</li>
          <li>Schaalbare oplossingen</li>
          <li>Gebruiksvriendelijke interfaces</li>
          <li>Veilige en betrouwbare systemen</li>
        </ul>
      </div>
      
      <div className="mt-24">
        <ContactFormulier />
      </div>
    </ServicePageTemplate>
  )
}