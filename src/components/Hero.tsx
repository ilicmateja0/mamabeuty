import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLowResLoaded, setIsLowResLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Check WebP support
  useEffect(() => {
    const webP = new Image();
    webP.onload = () => setSupportsWebP(true);
    webP.onerror = () => setSupportsWebP(false);
    webP.src =
      'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  }, []);
  
  // Preload + scroll
  useEffect(() => {
    const lowResImg = new Image();
    const lowResImage = supportsWebP
      ? '/assets/images/salon_slika_1_low.webp'
      : '/assets/images/salon_slika_1_low.webp';

    lowResImg.src = lowResImage;
    lowResImg.onload = () => setIsLowResLoaded(true);
    
    const highResImg = new Image();
    const highResImage = supportsWebP
      ? '/assets/images/salon_slika_1.webp'
      : '/assets/images/salon_slika_1.webp';

    highResImg.src = highResImage;
    highResImg.onload = () => setImageLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [supportsWebP]);

  // efekti
  const maxScroll = 500;

  const brightness = Math.max(1 - scrollY / maxScroll, 0.4);
  const blur = Math.min(scrollY / 20, 10);
  const scale = 1 + scrollY / 2000;
  const bgTranslateY = scrollY * 0.3;

  const textOpacity = Math.max(1 - scrollY / 600, 0);
  const textTranslateY = scrollY * 0.2;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${bgTranslateY}px) scale(${scale})`,
          filter: `blur(${blur}px) brightness(${brightness})`,
          transition: 'transform 0.1s linear, filter 0.1s linear'
        }}
      >
        {/* Low-res */}
        {!imageLoaded && (
          <div 
            className={`absolute inset-0 bg-yellow-100 transition-opacity duration-500 ${
              isLowResLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}
        
        {/* High-res */}
        <picture>
          <source 
            srcSet="/assets/images/salon_slika_1.webp" 
            type="image/webp" 
          />
         <img 
  src="/assets/images/salon_slika_1.webp" 
  alt="Salon background" 
  className={`h-full w-full object-cover transition-opacity duration-500 ${
    imageLoaded ? 'opacity-100' : 'opacity-0'
  }`}
  loading="eager"
  {...{ fetchpriority: "high" }} 
  decoding="async"
  onLoad={() => setImageLoaded(true)} 
/>
        </picture>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* CONTENT */}
      <div 
        className="relative z-10 flex h-full items-center"
        style={{
          transform: `translateY(${textTranslateY}px)`,
          opacity: textOpacity,
          transition: 'transform 0.1s linear, opacity 0.1s linear'
        }}
      >
        <div className="text-left max-w-4xl px-4 sm:ml-16 mx-auto sm:mx-0">
          <h1 className="mb-2 sm:mb-4 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-center sm:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 transition-all duration-300 hover:from-yellow-300 hover:via-yellow-200 hover:to-yellow-100 drop-shadow-lg">
              MAMA Beauty
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium tracking-wide text-white/90 mb-2 sm:mb-4 text-center sm:text-left">
            Otkrijte svoju prirodnu lepotu
          </p>

          <p className="hidden sm:block text-lg text-white/80 max-w-2xl mb-8">
            Dobrodošli u MAMA Beauty, vaš premium kozmetički salon gde se lepota susreće sa stručnošću. 
            Pružamo širok spektar usluga od laserske epilacije do profesionalnih tretmana lica i tela.
          </p>

          <div className="mt-6 sm:mt-10">
            <div className="hidden sm:block text-white/70 text-sm">
              Radimo od ponedeljka do subote od 09:00 do 21:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;