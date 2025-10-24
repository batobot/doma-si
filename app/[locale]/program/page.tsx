import { type Locale } from '@/lib/i18n';
import Container from '@/components/Container';
import type { Metadata } from 'next';

interface ProgramPageProps {
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  title: 'Program',
  description: 'Weekly curated program from pub quizzes to live bands and DJ nights.',
};

async function getProgramContent(locale: Locale) {
  const content = await import(`@/content/program.${locale}.json`);
  return content.default;
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const locale = params.locale as Locale;
  const program = await getProgramContent(locale);

  return (
    <div className="section-padding bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg text-deep-red mb-4">{program.title}</h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">{program.subtitle}</p>
          </div>

          <div className="space-y-6">
            {program.items.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-soft-gray rounded-lg p-8 hover:shadow-lg transition-shadow border-l-4 border-warm-gold"
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h2 className="heading-sm text-deep-red">{item.title}</h2>
                      <span className="font-accent text-sm uppercase text-warm-gold font-semibold">
                        {item.day}
                      </span>
                    </div>
                    <p className="text-charcoal leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
