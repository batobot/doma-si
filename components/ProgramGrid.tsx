import Container from './Container';

interface ProgramItem {
  day: string;
  title: string;
  description: string;
  icon: string;
}

interface ProgramGridProps {
  title: string;
  subtitle: string;
  items: ProgramItem[];
}

export default function ProgramGrid({ title, subtitle, items }: ProgramGridProps) {
  return (
    <section id="program" className="section-padding bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="heading-lg text-deep-red mb-4">{title}</h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-soft-gray rounded-lg p-6 hover:shadow-lg transition-shadow border border-transparent hover:border-warm-gold"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-accent text-sm uppercase text-warm-gold mb-2 font-semibold">
                {item.day}
              </h3>
              <h4 className="heading-sm text-deep-red mb-3">{item.title}</h4>
              <p className="text-sm text-charcoal leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
