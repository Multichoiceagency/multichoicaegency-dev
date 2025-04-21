import Link from "next/link"
import { ArrowLeft, CheckCircle, Calendar, Phone, Mail } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f5f9f5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-[#2D4625]/10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2D4625] to-[#a6e267]"></div>
          <div className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none">
            <div className="absolute inset-0 border-2 border-[#2D4625]/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-[15%] border border-[#a6e267]/40 rounded-full animate-reverse-spin-slow"></div>
            <div className="absolute inset-[35%] bg-[#2D4625]/20 rounded-full"></div>
          </div>

          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#2D4625] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-medium text-[#0f2b3d] mb-4">Bedankt voor uw aanvraag!</h1>
            <p className="text-gray-600 text-lg">
              We hebben uw offerte aanvraag ontvangen en gaan er direct mee aan de slag.
            </p>
          </div>

          <div className="bg-[#f5f9f5] rounded-xl p-6 mb-8">
            <h2 className="text-xl font-medium text-[#0f2b3d] mb-4">Wat kunt u verwachten?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#2D4625]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Mail className="h-4 w-4 text-[#2D4625]" />
                </div>
                <div>
                  <p className="text-[#0f2b3d] font-medium">Bevestigingsmail</p>
                  <p className="text-gray-600">U ontvangt binnen enkele minuten een bevestiging per e-mail.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#2D4625]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Phone className="h-4 w-4 text-[#2D4625]" />
                </div>
                <div>
                  <p className="text-[#0f2b3d] font-medium">Persoonlijk contact</p>
                  <p className="text-gray-600">
                    Een van onze adviseurs neemt binnen 24 uur telefonisch contact met u op.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-[#2D4625]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Calendar className="h-4 w-4 text-[#2D4625]" />
                </div>
                <div>
                  <p className="text-[#0f2b3d] font-medium">Offerte op maat</p>
                  <p className="text-gray-600">
                    Na het inventariseren van uw wensen ontvangt u een gedetailleerde offerte op maat.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-[#2D4625] hover:bg-[#a6e267] text-white hover:text-[#2D4625] font-medium rounded-full transition-colors duration-300 group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Terug naar de homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
