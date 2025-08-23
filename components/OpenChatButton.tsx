// components/OpenChatButton.tsx
"use client"

declare global {
  interface Window {
    $crisp?: any[]
  }
}

export default function OpenChatButton() {
  return (
    <button
      onClick={() => window.$crisp?.push(["do", "chat:open"])}
      className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
    >
      Chat met ons
    </button>
  )
}
