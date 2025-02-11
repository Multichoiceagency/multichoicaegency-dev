import { create } from 'zustand';

interface OfferData {
  step: number;
  name: string;
  email: string;
  service: string;
  budget: string;
  setStep: (step: number) => void;
  setData: (field: string, value: string) => void;
}

export const useOfferStore = create<OfferData>((set) => ({
  step: 1,
  name: '',
  email: '',
  service: '',
  budget: '',
  setStep: (step) => set({ step }),
  setData: (field, value) => set((state) => ({ ...state, [field]: value })),
}));
