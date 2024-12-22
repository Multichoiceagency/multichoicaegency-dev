import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Projectgalerij</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

