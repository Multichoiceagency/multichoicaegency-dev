import { create } from "zustand";

interface OfferData {
  step: number;
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  setStep: (step: number) => void;
  setData: (field: keyof OfferData, value: string | number) => void;
}

export const useOfferStore = create<OfferData>((set) => ({
  step: 1,
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
  setStep: (step) => set({ step }),
  setData: (field, value) => set((state) => ({ ...state, [field]: value })),
}));
