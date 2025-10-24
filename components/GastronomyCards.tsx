import Link from 'next/link';
import Container from './Container';
import Button from './Button';
import { type Locale } from '@/lib/i18n';

interface GastronomyItem {
  name: string;
  description: string;
  icon: string;
}

interface GastronomyCardsProps {
  locale: Locale;
  title: string;
  subtitle: string;
  items: GastronomyItem[];
  ctaText: string;
}

export default function GastronomyCards({ locale, title, subtitle, items, ctaText }: GastronomyCardsProps) {
  return (
    <section className="section-padding bg-pine-green text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">{title}</h2>
          <p className="text-lg text-off-white max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="heading-sm mb-3 text-warm-gold">{item.name}</h3>
              <p className="text-sm text-off-white leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href={`/${locale}/menu`} variant="secondary" className="border-white text-white hover:bg-white hover:text-pine-green">
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
