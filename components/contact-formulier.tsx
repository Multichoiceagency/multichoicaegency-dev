'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitToZapier } from '@/app/actions/contact'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      companyname: formData.get('companyname') as string,
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      description: formData.get('description') as string,
    }

    try {
      await submitToZapier(data)
      setSubmitted(true)
      event.currentTarget.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="p-6 bg-primary/10 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Bedankt voor je bericht!</h3>
        <p className="text-gray-600 dark:text-gray-300">
          We nemen zo spoedig mogelijk contact met je op.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            name="companyname"
            placeholder="Bedrijf"
            required
            className="bg-[#2A2744] border-0 h-14 text-white placeholder:text-gray-400 focus-visible:ring-primary/50"
          />
          <Input
            type="text"
            name="name"
            placeholder="Naam"
            required
            className="bg-[#2A2744] border-0 h-14 text-white placeholder:text-gray-400 focus-visible:ring-primary/50"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Telefoon"
            required
            className="bg-[#2A2744] border-0 h-14 text-white placeholder:text-gray-400 focus-visible:ring-primary/50"
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mailadres"
            required
            className="bg-[#2A2744] border-0 h-14 text-white placeholder:text-gray-400 focus-visible:ring-primary/50"
          />
        </div>
        <Textarea
          name="description"
          placeholder="Waar zou je het met ons over willen hebben?"
          required
          className="bg-[#2A2744] border-0 min-h-[160px] text-white placeholder:text-gray-400 focus-visible:ring-primary/50"
        />
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="h-14 px-8 bg-primary hover:bg-primary/90 text-white w-full md:w-auto"
        >
          {isSubmitting ? 'Verzenden...' : 'Verzenden'}
        </Button>
      </div>
    </form>
  )
}

