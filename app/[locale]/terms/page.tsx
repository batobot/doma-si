import Container from '@/components/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Doma Si.',
};

export default function TermsPage() {
  return (
    <div className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg text-deep-red mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-charcoal leading-relaxed">
            <p className="text-sm text-gray-600">Last updated: October 2024</p>

            <h2 className="heading-md text-winter-blue mt-8">Acceptance of Terms</h2>
            <p>
              By accessing and using the Doma Si website and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Use of Website</h2>
            <p>
              This website is provided for informational purposes about Doma Si, our Advent program, menu, and venue. You may not use this website for any unlawful purpose or in any way that could damage, disable, or impair the website.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Tu Si Doma j.d.o.o. or its content suppliers and is protected by Croatian and international copyright laws.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Event Attendance</h2>
            <p>
              Doma Si reserves the right to refuse entry or remove any person from the venue for any reason, including but not limited to disruptive behavior, intoxication, or violation of venue rules.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Pricing and Availability</h2>
            <p>
              Menu prices and program schedules are subject to change without notice. We strive to keep information accurate but cannot guarantee the availability of specific items or events.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Liability Disclaimer</h2>
            <p>
              Tu Si Doma j.d.o.o. is not liable for any indirect, incidental, or consequential damages arising from your use of this website or attendance at our events. Your participation is at your own risk.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Governing Law</h2>
            <p>
              These terms are governed by the laws of the Republic of Croatia. Any disputes shall be resolved in the courts of Zagreb, Croatia.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Contact Information</h2>
            <div className="bg-soft-gray rounded p-4 mt-4">
              <p><strong>Tu Si Doma j.d.o.o.</strong></p>
              <p>Ulica Milislava Demerca 10</p>
              <p>Zagreb, Croatia</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
