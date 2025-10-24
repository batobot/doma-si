import Container from '@/components/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Doma Si and the warmest Advent experience in Zagreb.',
};

export default function AboutPage() {
  return (
    <div className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg text-deep-red mb-8">About Doma Si</h1>
          
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              <strong>Doma Si</strong> brings a new dimension to Zagreb&apos;s award-winning Advent season—an intimate, premium Christmas experience in the heart of Upper Town.
            </p>

            <p>
              Set in the historic courtyard of the Zagreb City Museum on Opatička 20, our covered venue offers &quot;Santa&apos;s Living Room&quot;—a cozy, weather-protected space where tradition meets modern comfort.
            </p>

            <h2 className="heading-md text-winter-blue mt-12 mb-4">Our Concept</h2>
            <p>
              Unlike large-scale Christmas markets, Doma Si is designed for intimacy and curation. Every evening features carefully selected programming—from pub quizzes and live bands to DJ nights and Sunday markets. Our five gastronomy corners serve everything from traditional fritule to premium cocktails and wine.
            </p>

            <h2 className="heading-md text-winter-blue mt-12 mb-4">Croatian Heritage</h2>
            <p>
              We celebrate Croatian Christmas traditions—licitar hearts, handmade wooden toys, and authentic hospitality—while creating a contemporary, premium experience for locals, tourists, and investors alike.
            </p>

            <h2 className="heading-md text-winter-blue mt-12 mb-4">The Team</h2>
            <p>
              Doma Si is operated by <strong>Tu Si Doma j.d.o.o.</strong>, founded in October 2024 with a mission to bring authentic, curated events to Zagreb&apos;s cultural landscape.
            </p>

            <div className="bg-soft-gray rounded-lg p-8 mt-12">
              <h3 className="heading-sm text-deep-red mb-4">Company Information</h3>
              <p className="mb-2"><strong>Tu Si Doma j.d.o.o.</strong></p>
              <p className="mb-2">Ulica Milislava Demerca 10</p>
              <p className="mb-2">Zagreb, Croatia</p>
              <p className="text-sm">Founded: October 2, 2024</p>
              <p className="text-sm">Primary Activity: Organization of meetings & fairs (O82300)</p>
              <p className="text-sm">Director: Marko Pap</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
