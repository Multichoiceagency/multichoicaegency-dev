"use client";
import { useOfferStore } from "@/app/store/useOfferStore";
import { useForm } from "react-hook-form";

export default function StepOne() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setData, setStep } = useOfferStore();

  const onSubmit = (data: any) => {
    setData("name", data.name);
    setData("email", data.email);
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
          {...register("email", { required: "E-mail is verplicht", pattern: /^\S+@\S+\.\S+$/ })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Volgende</button>
    </form>
  );
}
