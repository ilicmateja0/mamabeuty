import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

// Define the service type
interface Service {
  name: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    name: 'Laserska Epilacija',
    description: 'Trajno uklanjanje dlačica najsavremenijom laserskom tehnologijom.',
    image: '/assets/usluge/laserska-epilacija.webp',
  },
  {
    name: 'Limfomodelovanje Tela',
    description: 'Profesionalni tretmani za modeliranje tela i poboljšanje limfnog sistema.',
    image: '/assets/usluge/linfomodelovanje.webp',
  },
  {
    name: 'Presoterapija',
    description: 'Tretmani za poboljšanje cirkulacije i smanjenje celulita.',
    image: '/assets/usluge/presoterapija.webp',
  },
  {
    name: 'Termo Ćebe',
    description: 'Relaksirajući tretmani toplotom za opuštanje mišića.',
    image: '/assets/usluge/termo.webp',
  },
  {
    name: 'EMP Chair Pro',
    description: 'Rešavanje problema mišića karličnog dna.',
    image: '/assets/usluge/empchairpro.webp',
  },
  {
    name: 'EMS - 4 Sonde',
    description: 'Elektrostimulacija mišića za jačanje i toniziranje.',
    image: '/assets/usluge/ems.webp',
  },
  {
    name: 'Rolosfera',
    description: 'Tretmani za modeliranje tela i poboljšanje cirkulacije.',
    image: '/assets/usluge/rolosfera.webp',
  },
  {
    name: 'Solarijum',
    description: 'Tretmani za postizanje prirodnog tena.',
    image: '/assets/usluge/solarijum.webp',
  },
  {
    name: 'Masaža',
    description: 'Profesionalne masaže za opuštanje i relaksaciju.',
    image: '/assets/usluge/masaza.webp',
  },
  {
    name: 'Frizerske Usluge',
    description: 'Frizerske usluge pružaju stilizovanje, negu i osveženje kose.',
    image: '/assets/usluge/frizerske.webp',
  },
  {
    name: 'Profesionalno Šminkanje',
    description: 'Šminkanje za sve prilike od strane profesionalnih šminkera.',
    image: '/assets/usluge/sminka.webp',
  },
  {
    name: 'Usluge noktiju',
    description: 'Profesionalne usluge za nokte obuhvataju negu, oblikovanje i dekoraciju.',
    image: '/assets/usluge/nokti.webp',
  },
  {
    name: 'Terapija za rast kose',
    description: 'Terapija za rast kose podstiče jačanje korena i obnovu kose za zdraviji i gušći izgled.',
    image: '/assets/usluge/kosarast.webp',
  },
  {
    name: 'Tretman redukcije strija',
    description: 'Tretman redukcije strija pomaže u ublažavanju vidljivosti strija i poboljšava izgled i elastičnost kože.',
    image: '/assets/usluge/strije.webp',
  },
  {
    name: 'Vakum aparat',
    description: 'Vakum aparat se koristi za poboljšanje cirkulacije, zatezanje kože i smanjenje celulita.',
    image: '/assets/usluge/limfodelovanje.webp',
  },
  {
    name: 'Vacumslim 48',
    description: 'Vacuslim 48 je prirodan i bezbedan tretman za uklanjanje masnih naslaga i celulita, sa vidljivim rezultatima.',
    image: '/assets/usluge/vacumslim.webp',
  },
  {
    name: 'Vacuum 65 body',
    description: 'Vacuum 65 body spaja staru recepturu i savremenu kozmetiku za tretmane koji smanjuju otekline i obim tela.',
    image: '/assets/usluge/vacuum.webp',
  },
  {
    name: 'Kavitacija',
    description: 'Kavitacija je bezbolan, nehirurški tretman ultrazvukom koji ciljano uništava masne ćelije i celulit.',
    image: '/assets/usluge/kavitacija.webp',
  },
  {
    name: 'Ultrazvucno topljenje masti',
    description: 'Ultrazvučno topljenje masti predstavlja bezbolnu i neinvazivnu metodu za ciljano razlaganje masnih ćelija i uklanjanje upornih masnih naslaga.',
    image: '/assets/usluge/ultrazvucno.webp',
  },
  {
    name: 'Removal za obrve',
    description: 'Removal za ne-lasersko skidanje obrva.',
    image: '/assets/usluge/removal.webp',
  },
  {
    name: 'Ice body tretman',
    description: 'Masaza metalnim oklagijama u kombinaciji sa Eberlin kremama daje vidljive rezultate vec nakon prvih tretmana.',
    image: '/assets/usluge/ice.webp',
  },
  {
    name: 'Roll premium aparat',
    description: 'Roll premium aparat koristi inovativnu tehniku kompresivnih mikrovibracija preko valjka sa silikonskim kuglicama za neinvazivno oblikovanje tela, limfnu drenažu i zatezanje kože.',
    image: '/assets/usluge/endosfera.webp',
  },
   {
    name: 'Endosfera tretman',
    description: 'Endosfera tretman je bezbolan, neinvazivan italijanski metod za oblikovanje tela i lica koji koristi kompresivnu mikrovibraciju preko silikonskih kuglica.',
    image: '/assets/usluge/endo.webp',
  },
  {
    name: 'Terapija za oziljke',
    description: 'Lečenje ožiljaka je proces koji zahteva strpljenje, jer nijedan tretman ne može potpuno izbrisati ožiljak, ali ga može učiniti skoro neprimetnim.',
    image: '/assets/usluge/oziljak.webp',
  },
];

const facialTreatments: Service[] = [
{
    name: 'Limph & Up Lica',
    description: 'Tretmani za lice za poboljšanje cirkulacije i toniziranje kože.',
    image: '/assets/usluge/limphiup.webp',
  },
  {
    name: 'Kolagenske niti',
    description: 'Kolagenske niti su neinvazivna metoda podmlađivanja lica i vrata kojom se "končići" natopljeni kolagenom i hranljivim sastojcima postavljaju u bore.',
    image: '/assets/usluge/niti.webp',
  },
  {
    name: 'Hydra lips',
    description: 'Hydra Lips je neinvazivni kozmetički tretman za dubinsku hidrataciju, regeneraciju i vizuelno povećanje volumena usana.',
    image: '/assets/usluge/lips.webp',
  },
  {
    name: 'Botox u prahu',
    description: 'Botox u prahu nije medicinski botoks koji se ubrizgava iglom, već inovativni kozmetički anti-age tretman namenjen neinvazivnom podmlađivanju kože.',
    image: '/assets/usluge/botox.webp',
  },
  {
    name: 'Radio talasni lifting',
    description: 'Radiotalasni lifting je nehirurški, bezbolan kozmetički tretman koji koristi radiofrekventnu energiju za zatezanje kože lica i tela, podstičući prirodnu proizvodnju kolagena i elastina.',
    image: '/assets/usluge/radiolifting.webp',
  },
  {
    name: 'HydraFacial H9 14u1',
    description: 'HydraFacial H9 aparat sa 14 nastavaka kombinuje hidrodermoabraziju, oxygen tretman, RF, PDT svetlo, ultrazvuk, dijamantski piling, BIO mikrotok i druge tretmane za dubinsko čišćenje, podmlađivanje, uklanjanje bora i mitisera, kao i povećanje elastičnosti i sjaja kože lica.',
    image: '/assets/usluge/14in1.webp',
  },
  {
    name: 'Egzozomi',
    description: 'Dermoaroma egzozomi predstavljaju napredne, patentirane formulacije za regeneraciju kože i kose, koje koriste organski kolostrum za podsticanje ćelijske obnove.',
    image: '/assets/usluge/egzozomi.webp',
  },

];
const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  const [salonImagesLoaded, setSalonImagesLoaded] = useState<Record<number, boolean>>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

const cenovnici = [
  {
    id: 1,
    title: "Laserska Epilacija",
    image: "/assets/usluge/laserska.webp",
  },
  {
    id: 2,
    title: "Tretmani Tela",
    image: "/assets/usluge/telo.webp",
  },
  {
    id: 3,
    title: "Tretmani Lica",
    image: "/assets/usluge/lice.webp",
  },
  {
    id: 4,
    title: "Frizerske Usluge",
    image: "/assets/usluge/frizercenovnik.webp",
  },
  {
    id: 5,
    title: "Nokti",
    image: "/assets/usluge/nokticenovnik.webp",
  },
  {
    id: 6,
    title: "Masaže",
    image: "/assets/usluge/masaze.webp",
  },
  {
    id: 7,
    title: "Ostale Usluge",
    image: "/assets/usluge/ostale.webp",
  },
];
  const totalImages = 8; // Total number of salon images

  // Preload next salon images
  useEffect(() => {
    const preloadNextImages = () => {
      const nextIndices = isMobile 
        ? [currentImageIndex + 1]
        : [currentImageIndex + 1, currentImageIndex + 2, currentImageIndex + 3, currentImageIndex + 4].map(num => 
            num > totalImages ? num - totalImages : num
          );

      nextIndices.forEach(num => {
        const img = new Image();
        img.src = `/assets/images/salon_slika_${num}.webp`;
        img.onload = () => {
          setSalonImagesLoaded(prev => ({
            ...prev,
            [num]: true
          }));
        };
      });
    };

    preloadNextImages();
  }, [currentImageIndex, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleImages = isMobile 
    ? [currentImageIndex + 1]
    : [currentImageIndex + 1, currentImageIndex + 2, currentImageIndex + 3].map(num => 
        num > totalImages ? num - totalImages : num
      );

  const nextImages = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImages = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextImages();
    }
    if (isRightSwipe) {
      prevImages();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Salon Images Gallery */}
      <div id="salon-section" className="content-container section-padding scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="section-title">Naš Salon</h2>
          <p className="section-subtitle">
            Pogledajte naš prostor i atmosferu
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Navigation Buttons - Only show on desktop */}
          {!isMobile && (
            <>
              <button
                onClick={prevImages}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 rounded-full p-3 shadow-lg hover:bg-yellow-100 transition-colors"
                aria-label="Prethodna slika"
              >
                <ChevronLeftIcon className="h-8 w-8 text-yellow-800" />
              </button>
              
              <button
                onClick={nextImages}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 rounded-full p-3 shadow-lg hover:bg-yellow-100 transition-colors"
                aria-label="Sledeća slika"
              >
                <ChevronRightIcon className="h-8 w-8 text-yellow-800" />
              </button>
            </>
          )}
          
          {/* Images Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}

            onTouchEnd={handleTouchEnd}
          >
            {visibleImages.map((num) => (
              <div 
                key={`${num}-${currentImageIndex}`} 
                className="relative h-[400px] md:h-[500px] w-full group"
              >
                <div className={`absolute inset-0 bg-yellow-100/20 transition-opacity duration-300 ${
                  salonImagesLoaded[num] ? 'opacity-0' : 'opacity-100'
                }`} />
                <picture>
                  <source 
                    srcSet={`/assets/images/salon_slika_${num}.webp`} 
                    type="image/webp" 
                  />
                  <img
                    src={`/assets/images/salon_slika_${num}.jpg`}
                    alt={`Salon ${num}`}
                    loading="lazy"
                    className={`object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 w-full h-full ${
                      salonImagesLoaded[num] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => {
                      setSalonImagesLoaded(prev => ({
                        ...prev,
                        [num]: true
                      }));
                    }}
                  />
                </picture>
                {isMobile && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
{/* Services Section */}
<div
  id="services-section"
  className="content-container section-padding scroll-mt-24 bg-white/50"
>
  <div className="text-center mb-12">
    <h2 className="section-title">Naše Usluge</h2>
    <p className="section-subtitle">
      Otkrijte našu ponudu profesionalnih tretmana lepote
    </p>
  </div>

  <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {(showAllServices ? services : services.slice(0, 4)).map((service, index) => (
      <div key={index} className="card hover-card">
        
        <div className="h-[350px] overflow-hidden bg-yellow-50">
          <picture>
            <source
              srcSet={service.image.replace(/\.(jpg|jpeg|png)$/, ".webp")}
              type="image/webp"
            />
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">
            {service.name}
          </h3>
          <p className="text-yellow-700 leading-relaxed">
            {service.description}
          </p>
        </div>

      </div>
    ))}
  </div>

  {/* Dugme */}
  <div className="flex justify-center mt-12">
      <button
        onClick={() => {
          setShowAllServices((prev) => {
            if (prev) {
              document
                .getElementById("services-section")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            return !prev;
          });
        }}
        className="px-6 py-3 md:px-8 md:py-4 bg-yellow-800 text-white rounded-full text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        {showAllServices ? "Prikaži manje" : "Pogledaj više"}
      </button>
  </div>
</div>

{/* Facial Treatments Section */}
<div
  id="facial-section"
  className="content-container section-padding scroll-mt-24 bg-white/50 mt-16"
>
  <div className="text-center mb-12">
    <h2 className="section-title">Tretmani Lica</h2>
    <p className="section-subtitle">
      Profesionalni tretmani za negu i podmlađivanje lica
    </p>
  </div>

  <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {facialTreatments.map((item, index) => (
      <div key={index} className="card hover-card">

        <div className="h-[350px] overflow-hidden bg-yellow-50">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">
            {item.name}
          </h3>
          <p className="text-yellow-700 leading-relaxed">
            {item.description}
          </p>
        </div>

      </div>
    ))}
  </div>
</div>

     {/* Price Lists Section */}
<div
  id="price-lists-section"
  className="content-container section-padding scroll-mt-24"
>
  <div className="text-center mb-12">
    <h2 className="section-title">Cenovnik</h2>
    <p className="section-subtitle">
      Pogledajte našu ponudu i cene usluga
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {cenovnici.map((item) => (
      <div
        key={item.id}
        onClick={() => setSelectedImage(item.image)}
        className="card hover-card cursor-pointer overflow-hidden"
      >
        <div className="h-[350px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-yellow-900">
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </div>

  {selectedImage && (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
      onClick={() => setSelectedImage(null)}
    >
      <img
        src={selectedImage}
        alt="Cenovnik"
        className="max-w-full max-h-[95vh] rounded-xl shadow-2xl"
      />
    </div>
  )}
</div>
</div>

  );
};

export default Home;