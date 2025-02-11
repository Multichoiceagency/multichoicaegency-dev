"use client";
import { useOfferStore } from "@/app/store/useOfferStore";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";

export default function OfferteAanvragen() {
  const { step } = useOfferStore();

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow-lg">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
    </div>
  );
}
