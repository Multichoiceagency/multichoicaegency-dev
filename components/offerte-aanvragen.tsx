"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    phone: "",
    service: "Website bouwen",
    message: "",
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacy: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value.toString());
    });
    formDataToSend.append('form_id', '123'); // Replace with your actual Metform form ID

    try {
      const response = await fetch('https://cloud.multichoiceagency.nl/wp-json/metform/v1/entries/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.status === 'success') {
        setSubmitStatus('success');
        setFormData({
          firstname: "",
          lastname: "",
          company: "",
          email: "",
          phone: "",
          service: "Website bouwen",
          message: "",
          privacy: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white dark:bg-[#111111] py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="/team-photo.jpg"
              alt="Our team"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 dark:bg-[#232323] p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Contact met één van onze website adviseurs
            </h2>
            
            <p className="text-gray-600 dark:text-neutral-300 mb-8">
              Je kunt ons ook mailen op{" "}
              <a href="mailto:mark@webstudio.nl" className="text-[#E86C3A] hover:underline">
                mark@webstudio.nl
              </a>{" "}
              of bel met{" "}
              <a href="tel:0887777800" className="text-[#E86C3A] hover:underline">
                088 7777 800
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname" className="text-gray-700 dark:text-white">
                    Voornaam
                  </Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    placeholder="Voornaam"
                    className="bg-white dark:bg-[#333333] border-gray-200 dark:border-0 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname" className="text-gray-700 dark:text-white">
                    Achternaam
                  </Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    placeholder="Achternaam"
                    className="bg-white dark:bg-[#333333] border-gray-200 dark:border-0 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700 dark:text-white">
                  Bedrijfsnaam
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Bedrijfsnaam"
                  className="bg-white dark:bg-[#333333] border-gray-200 dark:border-0 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-white">
                  E-mail <span className="text-[#E86C3A]">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  className="bg-white dark:bg-[#333333] border-gray-200 dark:border-0 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 dark:text-white">
                  Telefoonnummer
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefoonnummer"
                  className="bg-white dark:bg-[#333333] border-gray-200 dark:border-0 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500"
                />
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <Label htmlFor="service" className="text-gray-700 dark:text-white">
                  Waarover gaat jouw vraag
                </Label>
                <Select
                  id="service"
                  name="service"
                  value={formData.service}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                  className="w-full bg-white dark:bg-[#333333] border-gray-200 dark:border-0 text-gray-900 dark:text-white"
                >
                  <option value="Website bouwen">Website bouwen</option>
                  <option value="Hosting">Hosting</option>
                  <option value="Content creatie">Content creatie</option>
                  <option value="Onderhoud">Onderhoud</option>
                  <option value="Online marketing">Online marketing</option>
                  <option value="Overige">Overige</option>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 dark:text-white">
                  Jouw bericht
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Formuleer hier de vraag en voeg indien nodig een toelichting toe"
                  className="bg-white dark:bg-[#333333] border-gray-200 dark:border-0 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 min-h-[120px]"
                />
              </div>

              {/* Privacy Policy */}
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={handleCheckboxChange}
                  className="border-[#E86C3A] text-[#E86C3A] data-[state=checked]:bg-[#E86C3A] data-[state=checked]:text-white" 
                />
                <Label htmlFor="privacy" className="text-gray-600 dark:text-neutral-300">
                  Ga akkoord met onze{" "}
                  <a href="/privacy" className="text-[#E86C3A] hover:underline">
                    privacy policy
                  </a>
                  .
                </Label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting || !formData.privacy}
                className="w-full bg-[#E86C3A] hover:bg-[#E86C3A]/90 text-white disabled:opacity-50"
              >
                {isSubmitting ? 'Verzenden...' : 'Contact opnemen'}
              </Button>

              {/* Submission Status */}
              {submitStatus === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center">Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center">Er is een fout opgetreden. Probeer het later opnieuw of neem telefonisch contact op.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

{/*
Metform is indeed a more user-friendly and feature-rich form builder plugin for WordPress. Let's update our approach to use Metform instead of Contact Form 7.

Absolutely, we can use Metform for a more user-friendly experience. Here's how we can set this up:

1. First, install and activate the Metform plugin on your WordPress site.
2. In your WordPress admin panel, go to Metform > Forms and create a new form.
3. Use the drag-and-drop builder to create a form that matches our requirements. Add the following fields:

1. First Name (Text)
2. Last Name (Text)
3. Company Name (Text)
4. Email (Email)
5. Phone (Tel)
6. Service (Select)
7. Message (Textarea)
8. Privacy Policy (Checkbox)



4. In the form settings, enable AJAX submission and set up your email notifications.
5. After saving the form, note down the form ID (you'll see it in the shortcode, e.g., `[metform form_id="123"]`)


Now, let's update our React component to integrate with Metform:

```typescriptreact project="ContactFormMetform"
...
```

Key changes and considerations:

1. The form submission now uses Metform's REST API endpoint: `/wp-json/metform/v1/entries/submit`.
2. We're appending a `form_id` to the FormData. Make sure to replace '123' with your actual Metform form ID.
3. The component maintains its existing styling and animations for consistency.
4. Error handling and success messages are still in place, now adapted for Metform's response format.
5. The form fields are set up to match the Metform form structure we created in WordPress.


To complete the setup:

1. Replace `'https://your-wordpress-site.com/wp-json/metform/v1/entries/submit'` with your actual WordPress site URL.
2. Ensure CORS is properly set up on your WordPress site to allow requests from your React app's domain. You can use a plugin like "WP CORS" to manage this.
3. In your Metform settings, make sure you've enabled REST API submissions.


Benefits of using Metform:

- User-friendly drag-and-drop form builder in WordPress
- Built-in entry management system
- Customizable email notifications
- Integration with popular email marketing services
- Advanced form features like conditional logic (if needed in the future)


To view and manage submissions:

- Go to Metform > Entries in your WordPress admin panel
- You'll see a list of all form submissions, which you can view, export, or delete


This solution provides a good balance between ease of use on the WordPress side and flexibility in your React application. The form remains fully styled and animated according to your design, while leveraging Metform's powerful backend features.

Is there anything else you'd like me to explain or modify in this Metform integration?*/}