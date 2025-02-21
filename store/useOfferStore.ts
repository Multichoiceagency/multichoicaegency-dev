import { create } from "zustand";

interface OfferStore {
  step: number;
  // Contactgegevens
  name: string;
  email: string;
  phone: string;
  address: string;
  company: string;
  // Inhoud
  selectedDesign: string | null;
  selectedPages: string | null;
  // Projectdetails
  domain: string;
  projectType: string;
  budget: string;
  deadline: string;
  notes: string;
  additionalFeatures: string[];
  // Adviesgesprek
  wantsConsultation: boolean;
  // Setter-functies
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setAddress: (address: string) => void;
  setCompany: (company: string) => void;
  setDesign: (design: string) => void;
  setPages: (pages: string) => void;
  setDomain: (domain: string) => void;
  setProjectType: (type: string) => void;
  setBudget: (budget: string) => void;
  setDeadline: (deadline: string) => void;
  setNotes: (notes: string) => void;
  toggleFeature: (feature: string) => void;
  setWantsConsultation: (value: boolean) => void;
  // Navigatie-functies
  nextStep: () => void;
  prevStep: () => void;
  // Submit
  submitForm: () => void;
}

export const useOfferStore = create<OfferStore>((set) => ({
  // State
  step: 1,
  name: "",
  email: "",
  phone: "",
  address: "",
  company: "",
  selectedDesign: null,
  selectedPages: null,
  domain: "",
  projectType: "",
  budget: "",
  deadline: "",
  notes: "",
  additionalFeatures: [],
  wantsConsultation: false,

  // Setters
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPhone: (phone) => set({ phone }),
  setAddress: (address) => set({ address }),
  setCompany: (company) => set({ company }),
  setDesign: (design) => set({ selectedDesign: design }),
  setPages: (pages) => set({ selectedPages: pages }),
  setDomain: (domain) => set({ domain }),
  setProjectType: (type) => set({ projectType: type }),
  setBudget: (budget) => set({ budget }),
  setDeadline: (deadline) => set({ deadline }),
  setNotes: (notes) => set({ notes }),
  toggleFeature: (feature) =>
    set((state) => ({
      additionalFeatures: state.additionalFeatures.includes(feature)
        ? state.additionalFeatures.filter((f) => f !== feature)
        : [...state.additionalFeatures, feature],
    })),
  setWantsConsultation: (value) => set({ wantsConsultation: value }),

  // Navigatie
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 4) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),

  // Form submit
  submitForm: () => {
    // Simuleer eventueel een API-call
    setTimeout(() => {
      window.location.href = "/bedankt";
    }, 500);
  },
}));
