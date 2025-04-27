"use client"

import { useEffect } from "react"

export default function LindyChatbot() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script")
    script.src = "https://api.lindy.ai/api/lindyEmbed/lindyEmbed.js?a=1215665e-af0b-4ff6-ba9f-8aa4946a1002"
    script.async = true
    script.crossOrigin = "use-credentials"

    // Append to document
    document.body.appendChild(script)

    // Clean up on unmount
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null // This component doesn't render anything visible
}
