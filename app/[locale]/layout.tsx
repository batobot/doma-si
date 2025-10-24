import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocale, isValidLocale, type Locale } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

async function getPageContent(locale: Locale) {
  const content = await import(`@/content/pages.${locale}.json`);
  return content.default;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = getLocale(params.locale);

  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const pageContent = await getPageContent(locale);

  return (
    <>
      <Header locale={locale} content={{ nav: pageContent.nav, cta: pageContent.nav.cta }} />
      <main id="main">{children}</main>
      <Footer locale={locale} content={pageContent.footer} />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'hr' }];
}
