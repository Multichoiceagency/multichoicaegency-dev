"use client"

import { useEffect } from "react"

export default function CrispChat() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$crisp = []
      window.CRISP_WEBSITE_ID = "5510ef86-5595-4a92-b899-b23c8ccbf070"

      const script = document.createElement("script")
      script.src = "https://client.crisp.chat/l.js"
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return null
}
