"use client"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"

const socialMedia = {
  instagram: "https://www.instagram.com/multichoiceagency?igsh=MTA2NHp1djFoZWpzdA%3D%3D&utm_source=qr",
  tiktok: "http://www.tiktok.com/@multichoiceagency7",
  whatsapp: "https://wa.me/31103220410",
  facebook: "https://www.facebook.com/share/1FTW3JYC7M/?mibextid=wwXIfr",
  phone: "tel:0103220410",
}

// Voeg het chat-icoon toe aan de iconMap
const iconMap: { [key: string]: IconProp } = {
  instagram: faInstagram,
  tiktok: faTiktok,
  whatsapp: faWhatsapp,
  facebook: faFacebook,
  phone: faPhone,
}

// Voeg de namen en kleuren toe voor elk social media platform
const socialDetails: { [key: string]: { name: string; bgColor: string; textColor: string } } = {
  instagram: {
    name: "Instagram",
    bgColor: "bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500",
    textColor: "text-white",
  },
  tiktok: {
    name: "TikTok",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  whatsapp: {
    name: "WhatsApp",
    bgColor: "bg-green-500",
    textColor: "text-white",
  },
  facebook: {
    name: "Facebook",
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
  phone: {
    name: "Bel ons",
    bgColor: "bg-gray-700",
    textColor: "text-white",
  },
}

const FloatingUI = () => {
  // Social icons state
  const [areSocialIconsVisible, setAreSocialIconsVisible] = useState(false)

  useEffect(() => {
    // Functie om het Odoo livechat icoon te verbergen
    const hideOdooLivechatIcon = () => {
      // Zoek alle mogelijke Odoo livechat elementen
      const selectors = [
        ".o_livechat_button",
        "#o_livechat_button",
        ".o_thread_window",
        ".o_livechat",
        '[data-oe-name="livechat"]',
        '[data-oe-model="im_livechat"]',
        'iframe[src*="odoo.com"]',
        'iframe[src*="im_livechat"]',
        'div[data-oe-model="im_livechat.channel"]',
      ]

      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.display = "none"
            el.style.visibility = "hidden"
            el.style.opacity = "0"
            el.style.pointerEvents = "none"
            el.style.width = "0"
            el.style.height = "0"
            el.style.position = "absolute"
            el.style.zIndex = "-9999"
          }
        })
      })

      // Zoek ook in iframes
      const iframes = document.querySelectorAll("iframe")
      iframes.forEach((iframe) => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
          if (iframeDoc) {
            selectors.forEach((selector) => {
              const elements = iframeDoc.querySelectorAll(selector)
              elements.forEach((el) => {
                if (el instanceof HTMLElement) {
                  el.style.display = "none"
                }
              })
            })
          }
        } catch (e) {
          // Negeer CORS fouten
        }
      })
    }

    // Voer de functie direct uit
    hideOdooLivechatIcon()

    // Stel een interval in om het icoon regelmatig te verbergen
    const interval = setInterval(hideOdooLivechatIcon, 1000)

    // Observeer DOM veranderingen om nieuwe elementen te detecteren
    const observer = new MutationObserver(hideOdooLivechatIcon)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Cleanup
    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  const toggleSocialIcons = () => setAreSocialIconsVisible((prev) => !prev)

  return (
    <>
      {/* Floating Social Icons */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        {areSocialIconsVisible ? (
          <div className="flex flex-col">
            {Object.entries(socialMedia).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center ${socialDetails[key].bgColor} ${socialDetails[key].textColor} border border-gray-300 relative group`}
              >
                <FontAwesomeIcon icon={iconMap[key as keyof typeof iconMap]} className="text-xl" />
                {/* Tooltip met naam */}
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {socialDetails[key].name}
                </span>
              </a>
            ))}
            <button
              onClick={toggleSocialIcons}
              className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-200 text-gray-700 relative group"
              aria-label="Hide social icons"
            >
              <FontAwesomeIcon icon={faChevronLeft as IconProp} className="text-xl" />
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Verbergen
              </span>
            </button>
          </div>
        ) : (
          <button
            onClick={toggleSocialIcons}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-200 text-gray-700 relative group"
            aria-label="Show social icons"
          >
            <FontAwesomeIcon icon={faChevronRight as IconProp} className="text-xl" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Social Media
            </span>
          </button>
        )}
      </div>
    </>
  )
}

export default FloatingUI

