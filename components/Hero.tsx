import Button from './Button';
import Container from './Container';
import { type Locale } from '@/lib/i18n';

interface HeroProps {
  locale: Locale;
  content: {
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
  };
}

export default function Hero({ locale, content }: HeroProps) {
  return (
    <section id="home" className="relative bg-grad-hero text-white section-padding min-h-[600px] flex items-center">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            {content.headline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-off-white leading-relaxed max-w-3xl mx-auto">
            {content.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`/${locale}#program`} variant="primary" className="bg-white text-deep-red hover:bg-off-white shadow-lg">
              {content.cta1}
            </Button>
            <Button href={`/${locale}#venue`} variant="secondary" className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-deep-red shadow-lg">
              {content.cta2}
            </Button>
          </div>
        </div>
      </Container>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-off-white to-transparent"></div>
    </section>
  );
}
