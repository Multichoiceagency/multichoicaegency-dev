"use client";
import { useOfferStore } from "@/app/store/useOfferStore";

export default function StepThree() {
  const { setData, setStep, budget } = useOfferStore();

  return (
    <div className="space-y-4">
      <label className="block text-gray-700">Budget</label>
      <input
        type="text"
        onChange={(e) => setData("budget", e.target.value)}
        value={budget}
        className="w-full border p-2 rounded"
      />
      <div className="flex justify-between">
        <button onClick={() => setStep(2)} className="bg-gray-500 text-white px-4 py-2 rounded">Terug</button>
        <button onClick={() => setStep(4)} className="bg-blue-500 text-white px-4 py-2 rounded">Volgende</button>
      </div>
    </div>
  );
}
