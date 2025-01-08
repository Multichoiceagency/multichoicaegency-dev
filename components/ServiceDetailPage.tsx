import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Linkedin, Facebook, LinkIcon } from 'lucide-react'

interface Author {
  name: string
  role: string
  image: string
  bio: string
}

interface Testimonial {
  quote: string
  author: {
    name: string
    role: string
    image: string
  }
}

interface RelatedPost {
  title: string
  excerpt: string
  image: string
  author: {
    name: string
    image: string
  }
  readTime: string
}

interface ServiceDetailPageProps {
  category: string
  title: string
  readTime: string
  date: string
  author: Author
  heroImage: string
  content: React.ReactNode
  testimonial: Testimonial
  relatedPosts: RelatedPost[]
}

export function ServiceDetailPage({
  category,
  title,
  readTime,
  date,
  author,
  heroImage,
  content,
  testimonial,
  relatedPosts
}: ServiceDetailPageProps) {
  return (
    <section className="pb-12 md:pb-24">
      <div className="relative pt-10 pb-80">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroImage}
          alt={title}
          layout="fill"
        />
        <div className="container mx-auto px-4 relative">
          <Link href="/blog" className="inline-block mb-14 text-lg font-medium text-white hover:text-lime-600">
            Back to blog
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-2 mb-4 text-sm leading-5 font-medium bg-white rounded-full">
              {category}
            </span>
            <h2 className="font-heading text-4xl xs:text-5xl md:text-6xl tracking-xs text-white mb-6">
              {title}
            </h2>
            <div className="flex items-center justify-center">
              <span className="text-sm font-medium text-white">{readTime}</span>
              <span className="mx-3">
                <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2" r="2" fill="#929C9A"></circle>
                </svg>
              </span>
              <span className="text-sm font-medium text-white">{date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto -mt-64 px-4 relative">
        <div className="flex flex-wrap -mx-4 mb-18">
          <div className="w-full md:w-1/6 px-4 mb-6 md:mb-0">
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
              <span className="block text-sm font-medium text-white opacity-80">Author</span>
              <Image
                className="block w-18 h-18 rounded-full"
                src={author.image}
                alt={author.name}
                width={72}
                height={72}
              />
              <div>
                <span className="block font-medium text-white">{author.name}</span>
                <span className="text-sm text-white opacity-80">{author.role}</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/6 px-4 mb-6 md:mb-0">
            <Image
              className="block w-full max-w-3xl mx-auto"
              src={heroImage}
              alt={title}
              width={800}
              height={600}
            />
          </div>
          <div className="w-full md:w-auto px-4">
            <div className="flex flex-row md:flex-col items-center justify-end gap-4">
              <span className="block lg:mb-2 text-sm font-medium text-gray-700 md:text-white md:opacity-80">Share</span>
              <SocialShareButtons />
            </div>
          </div>
        </div>
        <div className="max-w-lg lg:max-w-2xl mx-auto">
          {content}
          <NewsletterSignup />
          <Testimonial testimonial={testimonial} />
          <AuthorBio author={author} />
        </div>
        <RelatedPosts posts={relatedPosts} />
      </div>
    </section>
  )
}

function SocialShareButtons() {
  return (
    <>
      <a href="#" className="inline-block text-gray-700 md:text-gray-200 hover:text-lime-500">
        <Twitter size={20} />
      </a>
      <a href="#" className="inline-block text-gray-700 md:text-gray-200 hover:text-lime-500">
        <Linkedin size={20} />
      </a>
      <a href="#" className="inline-block text-gray-700 md:text-gray-200 hover:text-lime-500">
        <Facebook size={20} />
      </a>
      <a href="#" className="inline-block text-gray-700 md:text-gray-200 hover:text-lime-500">
        <LinkIcon size={20} />
      </a>
    </>
  )
}

function NewsletterSignup() {
  return (
    <div className="mb-16 py-10 px-5 xs:px-10 bg-teal-900 rounded-2xl">
      <h4 className="text-3xl font-medium text-white mb-10">Your Source for Green Energy Updates</h4>
      <div className="flex flex-col sm:flex-row">
        <input
          type="email"
          className="h-14 w-full px-4 py-3 placeholder-gray-700 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
          placeholder="Your e-mail..."
        />
        <button className="flex-shrink-0 h-14 inline-flex mt-3 sm:mt-0 sm:ml-2 py-2 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-lime-500 hover:border-black bg-lime-500 hover:bg-black rounded-full transition duration-200">
          Get in touch
        </button>
      </div>
    </div>
  )
}

function Testimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div>
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.80102 0C8.08512 0 9.03652 1.19287 8.75093 2.44482L6.96252 10.2845C6.68458 11.5029 7.61049 12.6638 8.86018 12.6638C9.93515 12.6638 10.8066 13.5353 10.8066 14.6102V22C10.8066 23.1046 9.91115 24 8.80658 24H2C0.895431 24 0 23.1046 0 22V15.5601C0 15.4 0.0192064 15.2406 0.0572071 15.0851L3.37204 1.52507C3.5909 0.629802 4.3932 0 5.31484 0H6.80102ZM21.9944 0C23.2785 0 24.2299 1.19287 23.9443 2.44482L22.1559 10.2845C21.878 11.5029 22.8039 12.6638 24.0536 12.6638C25.1286 12.6638 26 13.5353 26 14.6102V22C26 23.1046 25.1046 24 24 24H17.1934C16.0888 24 15.1934 23.1046 15.1934 22V15.5601C15.1934 15.4 15.2126 15.2406 15.2506 15.0851L18.5655 1.52507C18.7843 0.629802 19.5866 0 20.5083 0H21.9944Z" fill="#BEF264"></path>
      </svg>
      <p className="text-2xl font-medium text-teal-800 mt-8 mb-8">{testimonial.quote}</p>
      <div className="flex mb-16 items-center">
        <Image
          src={testimonial.author.image}
          alt={testimonial.author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-6">
          <span className="block text-xl font-medium">{testimonial.author.name}</span>
          <span className="text-sm text-gray-700">{testimonial.author.role}</span>
        </div>
      </div>
    </div>
  )
}

function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="flex flex-wrap -mx-4 mb-24">
      <div className="hidden lg:block lg:w-1/6 lg:px-4"></div>
      <div className="w-full md:w-5/6 lg:w-4/6 px-4 mb-6 md:mb-0">
        <div className="w-full max-w-3xl mx-auto py-8 px-5 xs:px-10 bg-orange-50 rounded-2xl">
          <div className="md:flex">
            <div className="flex-shrink-0">
              <Image
                className="block w-18 h-18 rounded-full"
                src={author.image}
                alt={author.name}
                width={72}
                height={72}
              />
            </div>
            <div className="mt-6 md:mt-0 md:ml-8">
              <span className="block text-lg font-medium">{author.name}</span>
              <span className="block mb-4 text-gray-700">{author.role}</span>
              <p className="text-lg mb-4">{author.bio}</p>
              <a href="#" className="inline-block text-gray-700 hover:text-lime-600">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  return (
    <div className="border-t pt-16">
      <div className="max-w-lg lg:max-w-none mx-auto">
        <div className="flex flex-wrap -mx-4">
          {posts.map((post, index) => (
            <div key={index} className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <Link href="#" className="block">
                <Image
                  className="block w-full mb-8"
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                />
                <div>
                  <h4 className="text-3xl font-medium mb-4">{post.title}</h4>
                  <p className="text-lg text-gray-700 mb-6">{post.excerpt}</p>
                  <div className="flex items-center">
                    <Image
                      className="block w-10 h-10 rounded-full"
                      src={post.author.image}
                      alt={post.author.name}
                      width={40}
                      height={40}
                    />
                    <div className="flex items-center ml-4">
                      <span className="text-sm font-medium">{post.author.name}</span>
                      <span className="mx-4">
                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                        </svg>
                      </span>
                      <span className="text-sm font-medium">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
