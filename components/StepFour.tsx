"use client";
import { useOfferStore } from "@/app/store/useOfferStore";
import { useState } from "react";

export default function StepFour() {
  const { name, email, service, budget, setStep } = useOfferStore();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/send-offerte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, budget }),
      });

      const data = await res.json();
      setResponse(data.success || data.error);
    } catch (error) {
      setResponse("Er is iets misgegaan met het verzenden van de e-mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Overzicht</h2>
      <p><strong>Naam:</strong> {name}</p>
      <p><strong>E-mail:</strong> {email}</p>
      <p><strong>Dienst:</strong> {service}</p>
      <p><strong>Budget:</strong> {budget}</p>

      <div className="flex justify-between">
        <button
          onClick={() => setStep(3)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Terug
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Verzenden..." : "Verzenden"}
        </button>
      </div>

      {response && <p className="text-center text-red-500">{response}</p>}
    </div>
  );
}
