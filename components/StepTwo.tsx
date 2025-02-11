"use client";
import { useOfferStore } from "@/app/store/useOfferStore";

export default function StepTwo() {
  const { setData, setStep, service } = useOfferStore();

  return (
    <div className="space-y-4">
      <label className="block text-gray-700">Kies een dienst</label>
      <select 
        onChange={(e) => setData("service", e.target.value)} 
        value={service}
        className="w-full border p-2 rounded"
      >
        <option value="">Selecteer...</option>
        <option value="Webdesign">Webdesign</option>
        <option value="SEO">SEO</option>
        <option value="Marketing">Marketing</option>
      </select>
      <div className="flex justify-between">
        <button onClick={() => setStep(1)} className="bg-gray-500 text-white px-4 py-2 rounded">Terug</button>
        <button onClick={() => setStep(3)} className="bg-blue-500 text-white px-4 py-2 rounded">Volgende</button>
      </div>
    </div>
  );
}
