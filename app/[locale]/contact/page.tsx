'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="section-padding bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg text-deep-red mb-4">Contact Us</h1>
            <p className="text-lg text-charcoal">
              Get in touch for inquiries, group bookings, or private events.
            </p>
          </div>

          <div className="bg-soft-gray rounded-lg p-8 mb-12">
            <h2 className="heading-sm text-winter-blue mb-4">Location</h2>
            <p className="text-charcoal mb-2">
              <strong>Doma Si - Zagreb Advent</strong>
            </p>
            <p className="text-charcoal mb-2">Zagreb City Museum Courtyard</p>
            <p className="text-charcoal mb-4">Opatička 20, 10000 Zagreb, Croatia</p>
            <p className="text-sm text-charcoal">
              <strong>Company:</strong> Tu Si Doma j.d.o.o.<br />
              Ulica Milislava Demerca 10, Zagreb
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-accent font-semibold text-charcoal mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-deep-red"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-accent font-semibold text-charcoal mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-deep-red"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-accent font-semibold text-charcoal mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-deep-red"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-accent font-semibold text-charcoal mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-soft-gray focus:outline-none focus:ring-2 focus:ring-deep-red resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="bg-pine-green text-white px-4 py-3 rounded-md">
                Thank you! We&apos;ll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-deep-red text-white px-4 py-3 rounded-md">
                Something went wrong. Please try again.
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              onClick={undefined}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>

            <p className="text-sm text-charcoal text-center">
              No tracking cookies. We&apos;ll reply as soon as we can.
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
}
