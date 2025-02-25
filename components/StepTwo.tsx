"use client";
import { useOfferStore } from "@/app/store/useOfferStore";

export default function StepTwo() {
  const { setData, setStep, service } = useOfferStore();

  const handleNext = () => {
    if (!service) {
      alert("Selecteer een dienst voordat je doorgaat.");
      return;
    }
    setStep(3);
  };

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

      {service === "" && (
        <p className="text-red-500">Je moet een dienst selecteren.</p>
      )}

      <div className="flex justify-between">
        <button
          onClick={() => setStep(1)}
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
