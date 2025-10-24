'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import LocaleSwitcher from './LocaleSwitcher';
import { type Locale } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
  content: {
    nav: {
      home: string;
      program: string;
      menu: string;
      venue: string;
      heritage: string;
      gallery: string;
      contact: string;
    };
    cta: string;
  };
}

export default function Header({ locale, content }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-deep-red rounded flex items-center justify-center">
              <span className="text-white font-serif text-2xl">D</span>
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-deep-red leading-tight">
                Doma Si
              </div>
              <div className="text-xs text-charcoal font-accent">Zagreb Advent</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            <Link href={`/${locale}#home`} className="text-sm font-accent hover:text-deep-red transition-colors">
              {content.nav.home}
            </Link>
            <Link href={`/${locale}#program`} className="text-sm font-accent hover:text-deep-red transition-colors">
              {content.nav.program}
            </Link>
            <Link href={`/${locale}/menu`} className="text-sm font-accent hover:text-deep-red transition-colors">
              {content.nav.menu}
            </Link>
            <Link href={`/${locale}#venue`} className="text-sm font-accent hover:text-deep-red transition-colors">
              {content.nav.venue}
            </Link>
            <Link href={`/${locale}#heritage`} className="text-sm font-accent hover:text-deep-red transition-colors">
              {content.nav.heritage}
            </Link>
            <Link href={`/${locale}#gallery`} className="text-sm font-accent hover:text-deep-red transition-colors">
              {content.nav.gallery}
            </Link>
            <Link href={`/${locale}/contact`} className="text-sm font-accent hover:text-deep-red transition-colors">
              {content.nav.contact}
            </Link>
          </nav>

          {/* CTA & Locale Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <LocaleSwitcher currentLocale={locale} />
            <Link href={`/${locale}#venue`} className="btn-primary text-sm">
              {content.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-soft-gray" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              <Link href={`/${locale}#home`} className="text-sm font-accent hover:text-deep-red transition-colors" onClick={() => setIsOpen(false)}>
                {content.nav.home}
              </Link>
              <Link href={`/${locale}#program`} className="text-sm font-accent hover:text-deep-red transition-colors" onClick={() => setIsOpen(false)}>
                {content.nav.program}
              </Link>
              <Link href={`/${locale}/menu`} className="text-sm font-accent hover:text-deep-red transition-colors" onClick={() => setIsOpen(false)}>
                {content.nav.menu}
              </Link>
              <Link href={`/${locale}#venue`} className="text-sm font-accent hover:text-deep-red transition-colors" onClick={() => setIsOpen(false)}>
                {content.nav.venue}
              </Link>
              <Link href={`/${locale}#heritage`} className="text-sm font-accent hover:text-deep-red transition-colors" onClick={() => setIsOpen(false)}>
                {content.nav.heritage}
              </Link>
              <Link href={`/${locale}#gallery`} className="text-sm font-accent hover:text-deep-red transition-colors" onClick={() => setIsOpen(false)}>
                {content.nav.gallery}
              </Link>
              <Link href={`/${locale}/contact`} className="text-sm font-accent hover:text-deep-red transition-colors" onClick={() => setIsOpen(false)}>
                {content.nav.contact}
              </Link>
              <div className="pt-4 border-t border-soft-gray">
                <LocaleSwitcher currentLocale={locale} />
              </div>
              <Link href={`/${locale}#venue`} className="btn-primary text-sm" onClick={() => setIsOpen(false)}>
                {content.cta}
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
