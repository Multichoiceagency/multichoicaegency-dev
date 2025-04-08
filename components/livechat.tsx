"use client"

import { useEffect } from "react"

const LiveChat = () => {
  useEffect(() => {
    // Get Tawk.to credentials from environment variables
    const tawkToId = process.env.NEXT_PUBLIC_TAWK_TO_ID
    const tawkToKey = process.env.NEXT_PUBLIC_TAWK_TO_KEY

    // Check if the environment variables are available
    if (!tawkToId || !tawkToKey) {
      console.error("Tawk.to credentials are not set in environment variables")
      return
    }

    // Initialize Tawk_API properly to avoid TypeScript errors
    if (!window.Tawk_API) {
      window.Tawk_API = {}
    }
    window.Tawk_LoadStart = new Date()

    // Create a local reference to ensure TypeScript knows it's defined
    const tawkApi = window.Tawk_API

    // Set up Tawk_API configuration BEFORE loading the script
    tawkApi.onBeforeLoad = () => {
      // Ensure customStyle is initialized
      tawkApi.customStyle = tawkApi.customStyle || {}

      // Configure the widget to be larger
      tawkApi.customStyle = {
        visibility: {
          desktop: {
            position: "br", // bottom right
            xOffset: 20,
            yOffset: 20,
          },
          mobile: {
            position: "br",
            xOffset: 10,
            yOffset: 10,
          },
        },
        popup: {
          width: 450, // Wider popup
          height: 600, // Taller popup
        },
      }
    }

    // Set up event handlers for when the chat loads
    tawkApi.onLoad = () => {
      console.log("Tawk chat loaded")

      // Try to maximize the chat widget
      if (tawkApi.maximize) {
        // Set a timeout to allow the widget to fully initialize
        setTimeout(() => {
          try {
            // Maximize the widget to apply our styles
            tawkApi.maximize?.()
            // Then minimize it again
            setTimeout(() => tawkApi.minimize?.(), 100)
          } catch (e) {
            console.error("Error toggling chat widget:", e)
          }
        }, 1000)
      }
    }

    // Create and append the Tawk.to script
    const script = document.createElement("script")
    script.async = true
    script.src = `https://embed.tawk.to/${tawkToId}/${tawkToKey}`
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    // Add the script to the document
    document.head.appendChild(script)

    // Add custom CSS to try to override Tawk.to styles
    const style = document.createElement("style")
    style.innerHTML = `
      /* Target the Tawk.to container */
      .tawk-min-container {
        width: 350px !important;
        height: auto !important;
      }
      
      /* Target the Tawk.to popup */
      .tawk-popup-container, 
      #tawk-bubble-container,
      .tawk-popup {
        width: 450px !important;
        height: 600px !important;
        max-width: 90vw !important;
      }
      
      /* Target the chat bubble */
      .tawk-button, 
      .tawk-min-container .tawk-button,
      .tawk-custom-color {
        transform: scale(1.5) !important;
        transform-origin: bottom right !important;
      }
      
      /* Add tooltip */
      .tawk-button::before,
      .tawk-min-container::before {
        content: "Live Chat nu met een medewerker";
        position: absolute;
        top: -30px;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        z-index: 10000;
      }
      
      .tawk-button:hover::before,
      .tawk-min-container:hover::before {
        opacity: 1;
        visibility: visible;
      }
    `
    document.head.appendChild(style)

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }

      // Clean up the global Tawk_API if needed
      if (window.Tawk_API?.endChat) {
        window.Tawk_API.endChat()
      }
    }
  }, [])

  return null
}

export default LiveChat
