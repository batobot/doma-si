import { type Locale } from '@/lib/i18n';
import Hero from '@/components/Hero';
import DifferenceCards from '@/components/DifferenceCards';
import ProgramGrid from '@/components/ProgramGrid';
import GastronomyCards from '@/components/GastronomyCards';
import VenueMap from '@/components/VenueMap';
import Heritage from '@/components/Heritage';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

async function getContent(locale: Locale) {
  const pages = await import(`@/content/pages.${locale}.json`);
  const program = await import(`@/content/program.${locale}.json`);
  return {
    pages: pages.default,
    program: program.default,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const { pages, program } = await getContent(locale);

  // Gallery placeholder images
  const galleryImages = Array.from({ length: 8 }, (_, i) => ({
    src: `/img/gallery/placeholder-${i + 1}.jpg`,
    alt: `Doma Si atmosphere ${i + 1}`,
  }));

  return (
    <>
      <Hero locale={locale} content={pages.hero} />
      <DifferenceCards title={pages.difference.title} items={pages.difference.items} />
      <ProgramGrid
        title={program.title}
        subtitle={program.subtitle}
        items={program.items}
      />
      <GastronomyCards
        locale={locale}
        title={pages.gastronomy.title}
        subtitle={pages.gastronomy.subtitle}
        items={pages.gastronomy.items}
        ctaText={pages.gastronomy.ctaText}
      />
      <VenueMap
        title={pages.venue.title}
        location={pages.venue.location}
        address={pages.venue.address}
        description={pages.venue.description}
      />
      <Heritage
        title={pages.heritage.title}
        content={pages.heritage.content}
        traditions={pages.heritage.traditions}
      />
      <Gallery title={pages.gallery.title} images={galleryImages} />
      <CTA
        locale={locale}
        title={pages.cta.title}
        description={pages.cta.description}
        primaryCTA={pages.cta.primaryCTA}
        secondaryCTA={pages.cta.secondaryCTA}
      />
    </>
  );
}
