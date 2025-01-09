import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react'

interface AuthorBioProps {
  name: string
  role: string
  image: string
  bio: string
}

export default function AuthorBio({ name, role, image, bio }: AuthorBioProps) {
  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-5 xs:px-10 bg-orange-50 rounded-2xl">
      <div className="md:flex">
        <div className="flex-shrink-0">
          <Image 
            className="block w-18 h-18" 
            src={image || '/placeholder.svg?height=72&width=72'} 
            alt={name} 
            width={72} 
            height={72} 
          />
        </div>
        <div className="mt-6 md:mt-0 md:ml-8">
          <span className="block text-lg font-medium">{name}</span>
          <span className="block mb-4 text-gray-700">{role}</span>
          <p className="text-lg mb-4">{bio}</p>
          <div className='text-sm font-bold'>Volg ons op social media
            </div>
          <Link legacyBehavior href="https://www.linkedin.com/company/multichoiceagency" passHref>
          <a target="_blank" rel="noopener noreferrer" className="inline-block text-gray-700 hover:text-lime-600">
            <Linkedin />
            </a>
            </Link>
            <Link legacyBehavior href="#" passHref>
          <a target="_blank" rel="noopener noreferrer" className="inline-block text-gray-700 hover:text-lime-600">
            <IconBrandFacebook />
            </a>
            </Link>
            <Link legacyBehavior href="#" passHref>
          <a target="_blank" rel="noopener noreferrer" className="inline-block text-gray-700 hover:text-lime-600">
            <IconBrandInstagram />
            </a>
            </Link>
            <Link legacyBehavior href="#" passHref>
          <a target="_blank" rel="noopener noreferrer" className="inline-block text-gray-700 hover:text-lime-600">
            <IconBrandTiktok />
            </a>
            </Link>
        </div>
      </div>
    </div>
  )
}

