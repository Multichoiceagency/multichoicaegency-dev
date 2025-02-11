"use client";
import { useOfferStore } from "@/app/store/useOfferStore";

export default function StepFour() {
  const { name, email, service, budget, setStep } = useOfferStore();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Overzicht</h2>
      <p><strong>Naam:</strong> {name}</p>
      <p><strong>E-mail:</strong> {email}</p>
      <p><strong>Dienst:</strong> {service}</p>
      <p><strong>Budget:</strong> {budget}</p>
      <div className="flex justify-between">
        <button onClick={() => setStep(3)} className="bg-gray-500 text-white px-4 py-2 rounded">Terug</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Verzenden</button>
      </div>
    </div>
  );
}
