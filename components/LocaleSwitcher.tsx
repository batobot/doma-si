'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';

interface LocaleSwitcherProps {
  currentLocale: Locale;
}

export default function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-3 py-1 text-sm font-accent uppercase transition-colors ${
            currentLocale === locale
              ? 'text-deep-red font-semibold border-b-2 border-deep-red'
              : 'text-charcoal hover:text-deep-red'
          }`}
          aria-label={`Switch to ${locale === 'en' ? 'English' : 'Croatian'}`}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
