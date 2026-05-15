import React from 'react';

const teamMembers = [
  'Jovana Tadić - kozmetičarka i tretmani tela',
  'Marijana Marković - tretmani tela',
  'Natalija Marković - lični asistent i frizer',
  'Sara Milčević - fizioterapeut',
  'Sara Vuković - šminker škola Dušan Lazić',
  'Andrijana Milčević - nail artist',
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Naslov */}
        <div className="mx-auto max-w-2xl text-center lg:text-left animate-fade-up">
          <h2 className="section-title text-3xl sm:text-4xl">
            O Nama
          </h2>

          <p className="section-subtitle text-sm sm:text-base leading-7">
            MAMA Beauty je moderan kozmetički salon koji pruža širok spektar
            usluga za sve vaše potrebe. Naš tim stručnjaka je tu da vam
            pomogne da postignete željene rezultate.
          </p>
        </div>

        {/* Misija i Oprema */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-14 sm:mt-16">
          
          {/* Misija */}
          <div className="card hover-card p-6 sm:p-8 animate-slide-left hover:-translate-y-2 transition duration-500">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-900 mb-4">
              Naša Misija
            </h3>

            <p className="text-sm sm:text-base leading-7 text-yellow-700">
              Naša misija je pružiti vam najbolje usluge u oblasti
              kozmetike i lepote. Želimo da budete zadovoljni rezultatima i
              da se osećate dobro u svojoj koži.
            </p>
          </div>

          {/* Oprema */}
          <div className="card hover-card p-6 sm:p-8 animate-slide-right hover:-translate-y-2 transition duration-500">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-900 mb-4">
              Naša Oprema
            </h3>

            <p className="text-sm sm:text-base leading-7 text-yellow-700">
              Koristimo najsavremeniju opremu i proizvode najboljih
              proizvođača kako bismo vam pružili najbolje rezultate.
            </p>
          </div>
        </div>

        {/* NAS TIM */}
        <div className="mt-24 sm:mt-28">
          
          <div className="text-center mb-12 sm:mb-14 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-900 mb-4">
              Naš Tim
            </h2>

            <p className="text-yellow-700 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Upoznajte stručni tim MAMA Beauty salona koji svakodnevno brine
              o vašoj lepoti i zadovoljstvu.
            </p>
          </div>

          {/* Vlasnica */}
          <div className="max-w-5xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden mb-12 sm:mb-16 hover:shadow-2xl transition duration-500 animate-zoom-in">
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              <div className="overflow-hidden">
                <img
                  src="/assets/images/marijana.jpeg"
                  alt="Vlasnica salona"
                  className="w-full h-[350px] sm:h-[500px] object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-6 sm:p-10 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 mb-3">
                  Marijana Matić
                </h3>

                <p className="text-yellow-700 text-base sm:text-lg mb-4">
                  Vlasnica i osnivač salona
                </p>

                <p className="text-yellow-700 leading-7 text-sm sm:text-base">
                  Sertifikovani kozmetolog, laser, tretmani kose i tela.
                </p>
              </div>
            </div>
          </div>

          {/* Tim */}
          <div className="max-w-6xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden hover:shadow-2xl transition duration-500 animate-fade-up">
            
            <div className="overflow-hidden">
              <img
                src="/assets/images/tim.jfif"
                alt="Tim salona"
                className="w-full h-[260px] sm:h-[400px] md:h-[500px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6 sm:p-10 text-center">
              
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 mb-8">
                Naš Stručni Tim
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-yellow-50 rounded-2xl py-4 px-4 sm:px-6 text-yellow-800 font-medium text-sm sm:text-base hover:bg-yellow-100 hover:scale-105 transition duration-300 animate-fade-up shadow-sm"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {member}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }

        .animate-slide-left {
          animation: slideLeft 1s ease forwards;
        }

        .animate-slide-right {
          animation: slideRight 1s ease forwards;
        }

        .animate-zoom-in {
          animation: zoomIn 1s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          .section-title {
            font-size: 2rem;
            line-height: 2.4rem;
          }

          .section-subtitle {
            font-size: 0.95rem;
            line-height: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;