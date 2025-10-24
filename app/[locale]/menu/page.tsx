import { type Locale } from '@/lib/i18n';
import Container from '@/components/Container';
import type { Metadata } from 'next';

interface MenuPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Premium gastronomy across five curated corners at Doma Si.',
};

async function getMenuContent(locale: Locale) {
  const content = await import(`@/content/menu.${locale}.json`);
  return content.default;
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { locale } = await params;
  const menu = await getMenuContent(locale as Locale);

  return (
    <div className="section-padding bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-lg text-deep-red mb-4">{menu.title}</h1>
            <p className="text-xl text-charcoal">{menu.subtitle}</p>
          </div>

          <div className="space-y-16">
            {menu.categories.map((category: any, catIndex: number) => (
              <div key={catIndex} className="border-t border-soft-gray pt-12 first:border-t-0 first:pt-0">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{category.icon}</span>
                  <div>
                    <h2 className="heading-md text-deep-red">{category.name}</h2>
                    <p className="text-charcoal">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item: any, itemIndex: number) => (
                    <div key={itemIndex} className="bg-soft-gray rounded-lg p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="heading-sm text-winter-blue">{item.name}</h3>
                        <span className="font-accent font-semibold text-warm-gold ml-4 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-charcoal mb-3 leading-relaxed">{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-2 py-1 bg-white text-pine-green rounded font-accent"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
