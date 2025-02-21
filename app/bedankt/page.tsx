"use client";
import ConfettiEffect from "@/components/ConfettiEffect";
import Link from "next/link";

export default function Bedankt() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-center">
      {/* Confetti-effect moet altijd op de voorgrond staan */}
      <ConfettiEffect />

      <h1 className="text-4xl font-bold mb-4">Bedankt voor je aanvraag! 🎉</h1>
      <p className="text-lg mb-6">We nemen binnen 15 minuten contact met u op.</p>
      
      <Link href="/">
        <button className="bg-orange-500 text-white px-6 py-3 rounded shadow-lg hover:bg-orange-600 transition">
          Terug naar home
        </button>
      </Link>
    </div>
  );
}
