import Container from '@/components/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Doma Si website.',
};

export default function PrivacyPage() {
  return (
    <div className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg text-deep-red mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-charcoal leading-relaxed">
            <p className="text-sm text-gray-600">Last updated: October 2024</p>

            <h2 className="heading-md text-winter-blue mt-8">Introduction</h2>
            <p>
              Tu Si Doma j.d.o.o. ("Doma Si", "we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Information We Collect</h2>
            <p>
              When you use our contact form, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Subject and message content</li>
            </ul>

            <h2 className="heading-md text-winter-blue mt-8">How We Use Your Information</h2>
            <p>
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries</li>
              <li>Process booking requests</li>
              <li>Send information about our events (only if you opt in)</li>
            </ul>

            <h2 className="heading-md text-winter-blue mt-8">Data Storage and Security</h2>
            <p>
              Your data is stored securely and is only accessible to authorized personnel. We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Cookies and Tracking</h2>
            <p>
              We do not use tracking cookies or third-party analytics by default. Essential cookies may be used for basic website functionality.
            </p>

            <h2 className="heading-md text-winter-blue mt-8">Your Rights</h2>
            <p>
              Under GDPR and Croatian data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="heading-md text-winter-blue mt-8">Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us at:
            </p>
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
