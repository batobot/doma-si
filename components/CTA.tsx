import Container from './Container';
import Button from './Button';
import { type Locale } from '@/lib/i18n';

interface CTAProps {
  locale: Locale;
  title: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export default function CTA({ locale, title, description, primaryCTA, secondaryCTA }: CTAProps) {
  return (
    <section className="section-padding bg-grad-hero text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">{title}</h2>
          <p className="text-xl mb-8 text-off-white leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`/${locale}#venue`} variant="primary" className="bg-white text-deep-red hover:bg-off-white">
              {primaryCTA}
            </Button>
            <Button href={`/${locale}/contact`} variant="secondary" className="border-white text-white hover:bg-white hover:text-deep-red">
              {secondaryCTA}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
