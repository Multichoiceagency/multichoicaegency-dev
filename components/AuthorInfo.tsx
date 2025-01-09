import Image from 'next/image'

interface AuthorInfoProps {
  name: string
  image: string
  logo: string
}

export default function AuthorInfo({ name, image, logo }: AuthorInfoProps) {
  return (
    <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
      <span className="block text-sm font-medium text-white opacity-80">Klant</span>
      <Image 
        className="block bg-white p-5 rounded-md hover:scale-95" 
        src={logo || '/placeholder.svg?height=50&width=50'} 
        alt="Company Logo" 
        width={150} 
        height={50} 
      />
      <div>
        <span className="block font-medium text-white">{name}</span>
      </div>
    </div>
  )
}

