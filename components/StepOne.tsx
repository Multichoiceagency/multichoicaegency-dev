"use client";
import { useOfferStore } from "@/app/store/useOfferStore";
import { useForm, SubmitHandler } from "react-hook-form";

// Definieer het type van je formulierdata
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function StepOne() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>(); // Gebruik het type hier
  const { setData, setStep } = useOfferStore();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setData("name", data.name);
    setData("email", data.email);
    setData("message", data.message);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-gray-700">Naam</label>
        <input
          {...register("name", { required: "Naam is verplicht" })}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700">E-mail</label>
        <input
          {...register("email", {
            required: "E-mail is verplicht",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Ongeldig e-mailadres" }
          })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-gray-700">Bericht</label>
        <textarea
          {...register("message", { required: "Bericht is verplicht" })}
          className="w-full border p-2 rounded"
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Volgende
      </button>
    </form>
  );
}
