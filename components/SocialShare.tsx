import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'

export default function SocialShare() {
  return (
    <div className="flex flex-row md:flex-col items-center justify-end gap-4">
      <span className="block lg:mb-2 text-sm font-medium text-gray-700 md:text-white md:opacity-80">Deel deze bericht</span>
      <a href="#" className="inline-block text-gray-700 md:text-gray-200 hover:text-lime-500">
        <IconBrandTwitter />
      </a>
      <a href="https://www.linkedin.com/company/multichoiceagency" className="inline-block text-gray-700 md:text-gray-200 hover:text-lime-500">
        <IconBrandLinkedin />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61553986303783" className="inline-block text-gray-700 md:text-gray-200 hover:text-lime-500">
        <IconBrandFacebook />
      </a>
      <a href="#" className="inline-block text-gray-700 md:text-gray-200 hover:text-lime-500">
        <IconBrandInstagram />
      </a>
    </div>
  )
}

