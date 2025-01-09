import { Button } from "@/components/ui/button"

export default function NewsletterSignup() {
  return (
    <div className="mb-16 py-10 px-5 xs:px-10 bg-teal-900 rounded-2xl">
      <h4 className="text-3xl font-medium text-white mb-10">Your Source for Green Energy Updates</h4>
      <div className="flex flex-col sm:flex-row">
        <input
          type="email"
          className="h-14 w-full px-4 py-3 placeholder-gray-700 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
          placeholder="Your e-mail..."
        />
        <Button className="flex-shrink-0 h-14 inline-flex mt-3 sm:mt-0 sm:ml-2 py-2 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-lime-500 hover:border-black bg-lime-500 hover:bg-black rounded-full transition duration-200">
          Get in touch
        </Button>
      </div>
    </div>
  )
}

