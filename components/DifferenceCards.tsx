import Container from './Container';

interface DifferenceItem {
  icon: string;
  title: string;
  description: string;
}

interface DifferenceCardsProps {
  title: string;
  items: DifferenceItem[];
}

export default function DifferenceCards({ title, items }: DifferenceCardsProps) {
  return (
    <section className="section-padding bg-off-white">
      <Container>
        <h2 className="heading-lg text-deep-red text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="heading-sm text-winter-blue mb-3">{item.title}</h3>
              <p className="text-charcoal leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
