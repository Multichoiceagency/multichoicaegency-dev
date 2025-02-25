"use client";
import { useOfferStore } from "@/app/store/useOfferStore";
import { useState } from "react";

export default function StepThree() {
  const { setData, setStep, budget } = useOfferStore();
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!budget.trim()) {
      setError("Budget is verplicht.");
      return;
    }
    setError(""); // Reset foutmelding
    setStep(4);
  };

  return (
    <div className="space-y-4">
      <label className="block text-gray-700">Budget</label>
      <input
        type="text"
        onChange={(e) => setData("budget", e.target.value)}
        value={budget}
        placeholder="Bijv. €1000 - €5000"
        className="w-full border p-2 rounded"
      />
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex justify-between">
        <button
          onClick={() => setStep(2)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Terug
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Volgende
        </button>
      </div>
    </div>
  );
}
