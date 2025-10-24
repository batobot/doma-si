import Container from './Container';

interface VenueMapProps {
  title: string;
  location: string;
  address: string;
  description: string;
}

export default function VenueMap({ title, location, address, description }: VenueMapProps) {
  return (
    <section id="venue" className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-deep-red mb-4">{title}</h2>
            <h3 className="heading-sm text-winter-blue mb-4">{location}</h3>
            <p className="text-charcoal mb-6 leading-relaxed">{description}</p>
            <div className="bg-soft-gray rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="font-accent font-semibold text-deep-red mb-2">Address</p>
                  <p className="text-charcoal">{address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-soft-gray rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-charcoal font-accent">
                {/* TODO: Integrate Google Maps or Mapbox */}
                Map placeholder
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
