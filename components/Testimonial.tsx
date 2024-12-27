import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export default function Testimonial({ quote, author, role, image }: TestimonialProps) {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#F9F5F3]">
      <div className="max-w-4xl mx-auto">
        <blockquote className="relative">
          <div className="relative z-10">
            <p className="text-xl lg:text-2xl italic mb-4">{quote}</p>
            <footer className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={image}
                  alt={author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <cite className="font-semibold not-italic">{author}</cite>
                <p className="text-gray-600">{role}</p>
              </div>
            </footer>
          </div>
        </blockquote>
      </div>
    </section>
  );
}

