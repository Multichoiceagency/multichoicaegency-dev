import Image from 'next/image';

interface ContentSectionProps {
  title: string;
  content: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export default function ContentSection({ title, content, image, imagePosition }: ContentSectionProps) {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${
          imagePosition === 'right' ? '' : 'lg:flex-row-reverse'
        }`}>
          <div className={imagePosition === 'right' ? '' : 'lg:order-2'}>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <div className={`relative h-[400px] rounded-lg overflow-hidden ${
            imagePosition === 'right' ? 'lg:order-2' : ''
          }`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

