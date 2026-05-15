import React from 'react';

const services = [
  {
    name: 'Laserska Epilacija',
    description: 'Trajno uklanjanje dlačica pomoću najsavremenije laserske tehnologije.',
  },
  {
    name: 'Limfomodelovanje Tela',
    description: 'Tretman za poboljšanje cirkulacije i redukovanje celulita.',
  },
  {
    name: 'Presoterapija',
    description: 'Tretman za poboljšanje cirkulacije i redukovanje otečenosti.',
  },
  {
    name: 'Termo Ćebe',
    description: 'Relaksirajući tretman za opuštanje mišića i poboljšanje cirkulacije.',
  },
  {
    name: 'EMP Chair Pro',
    description: 'Napredni tretman za tonizaciju mišića i redukovanje celulita.',
  },
  {
    name: 'EMS - 4 Sonde',
    description: 'Elektrostimulacija mišića za brže rezultate u tonizaciji.',
  },
  {
    name: 'Vakum Aparat',
    description: 'Tretman za poboljšanje cirkulacije i redukovanje celulita.',
  },
  {
    name: 'Rolosfera',
    description: 'Tretman za poboljšanje cirkulacije i redukovanje celulita.',
  },
  {
    name: 'Limph & Up Lica',
    description: 'Tretman za poboljšanje cirkulacije lica i redukovanje otečenosti.',
  },
  {
    name: 'Masaža',
    description: 'Relaksirajuća masaža za opuštanje mišića i poboljšanje cirkulacije.',
  },
  {
    name: 'Tretmani Lica',
    description: 'Profesionalni tretmani lica za očuvanje mladalačkog izgleda.',
  },
  {
    name: 'Trajna Šminka',
    description: 'Trajna šminka za obrve, usne i oči.',
  },
  {
    name: 'Profesionalno Šminkanje',
    description: 'Profesionalno šminkanje za sve prilike.',
  },
  {
    name: 'Nutricionista',
    description: 'Savetovanje o ishrani i planovi za zdraviji život.',
  },
  {
    name: 'Solarijum',
    description: 'Sveža boja kože uz najsavremeniju opremu.',
  },
];

const Services = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Naše Usluge</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pružamo širok spektar kozmetičkih usluga za sve vaše potrebe. Naš tim stručnjaka je tu da vam pomogne da postignete željene rezultate.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services; 