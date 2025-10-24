import Image from 'next/image';
import Container from './Container';

interface GalleryProps {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export default function Gallery({ title, images }: GalleryProps) {
  return (
    <section id="gallery" className="section-padding bg-off-white">
      <Container>
        <h2 className="heading-lg text-deep-red text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square bg-soft-gray rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              {/* TODO: Replace with actual images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-deep-red to-warm-gold">
                <span className="text-white text-4xl">🎄</span>
              </div>
              {/* Uncomment when images are available:
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
