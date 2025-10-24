import Container from './Container';

interface HeritageProps {
  title: string;
  content: string[];
  traditions: {
    icon: string;
    name: string;
  }[];
}

export default function Heritage({ title, content, traditions }: HeritageProps) {
  return (
    <section id="heritage" className="section-padding bg-winter-blue text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-12 text-warm-gold">{title}</h2>
          
          <div className="space-y-6 mb-12">
            {content.map((paragraph, index) => (
              <p key={index} className="text-lg text-off-white leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {traditions.map((tradition, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{tradition.icon}</div>
                <p className="font-accent text-sm text-warm-gold">{tradition.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
