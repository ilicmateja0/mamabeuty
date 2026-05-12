import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/20/solid';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Add activation token if this is the first submission
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/business.mamabeauty@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        // If we get a 403, it means we need to activate the email
        if (response.status === 403) {
          // Submit to the regular endpoint to trigger activation email
          await fetch('https://formsubmit.co/business.mamabeauty@gmail.com', {
            method: 'POST',
            body: formData
          });
          setSubmitStatus('success');
          form.reset();
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="section-title">Kontaktirajte Nas</h2>
          <p className="section-subtitle">
            Imate pitanja? Slobodno nas kontaktirajte putem bilo koje od navedenih opcija.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
          <div className="card hover-card p-8">
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-4">
                <MapPinIcon className="h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="text-base font-semibold text-yellow-900">Adresa</h3>
                  <p className="mt-1 text-yellow-700">
                    <a
                      href="https://maps.app.goo.gl/uoaPCJn2N2n2SF6B9?g_st=com.google.maps.preview.copy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-600"
                    >
                      Vuka Karadžića 11, Ub
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <PhoneIcon className="h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="text-base font-semibold text-yellow-900">Telefon</h3>
                  <p className="mt-1 text-yellow-700">
                    <a href="tel:+381641397840" className="hover:text-yellow-600">
                      +381 64 1397 840
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <EnvelopeIcon className="h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="text-base font-semibold text-yellow-900">Email</h3>
                  <p className="mt-1 text-yellow-700">
                    <a href="mailto:business.mamabeauty@gmail.com" className="hover:text-yellow-600">
                      business.mamabeauty@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <ClockIcon className="h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="text-base font-semibold text-yellow-900">Radno Vreme</h3>
                  <p className="mt-1 text-yellow-700">
                    Pon-Sub: 09:00 - 21:00<br />
                    Nedelja: Neradna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card hover-card p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
              <input type="hidden" name="_subject" value="Nova poruka sa Beauty Salon sajta" />
              <input type="hidden" name="_template" value="table" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-yellow-900 mb-2">
                  Ime
                </label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-3.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    placeholder="Vaše ime"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-yellow-900 mb-2">
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-3.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    placeholder="vas.email@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-yellow-900 mb-2">
                  Poruka
                </label>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="block w-full rounded-md border-0 py-3.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    placeholder="Vaša poruka..."
                  />
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Slanje...' : 'Pošalji Poruku'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">Poruka je uspešno poslata!</p>
                      <p className="mt-1 text-sm text-green-700">Hvala vam na kontaktiranju. Odgovorićemo vam uskoro.</p>
                    </div>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">Greška pri slanju poruke</p>
                      <p className="mt-1 text-sm text-red-700">Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;