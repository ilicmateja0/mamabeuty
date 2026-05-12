import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/20/solid';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        
        {/* SOCIAL ICONS */}
        <div className="flex justify-center space-x-6 md:order-2 animate-fade-up">
          
<a
  href="https://instagram.com/mamabeautyub"
  target="_blank"
  rel="noopener noreferrer"
  className="text-yellow-900 hover:text-pink-500 hover:scale-125 transition-all duration-300"
>
  <span className="sr-only">Instagram</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-7 w-7"
  >
    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.9 1.35a.9.9 0 100 1.8.9.9 0 000-1.8zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.8A3.2 3.2 0 1112 15.2 3.2 3.2 0 0112 8.8z" />
  </svg>
</a>

          <a
            href="https://tiktok.com/@mamabeautyub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-900 hover:text-black hover:scale-125 transition-all duration-300"
          >
            <span className="sr-only">TikTok</span>

            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://facebook.com/mamabeautyub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-900 hover:text-blue-600 hover:scale-125 transition-all duration-300"
          >
            <span className="sr-only">Facebook</span>

            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* CONTACT INFO */}
        <div className="mt-10 md:order-1 md:mt-0 animate-slide-left">
          
          <div className="flex flex-col space-y-5">
            
            <div className="flex items-center space-x-3 hover:translate-x-2 transition duration-300">
              <MapPinIcon className="h-5 w-5 text-yellow-600" />

              <a 
                href="https://maps.app.goo.gl/uoaPCJn2N2n2SF6B9?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-yellow-700 hover:text-yellow-500"
              >
                Vuka Karadžića 11, Ub
              </a>
            </div>

            <div className="flex items-center space-x-3 hover:translate-x-2 transition duration-300">
              <PhoneIcon className="h-5 w-5 text-yellow-600" />

              <a 
                href="tel:+381641397840"
                className="text-sm text-yellow-700 hover:text-yellow-500"
              >
                +381 64 1397 840
              </a>
            </div>

            <div className="flex items-center space-x-3 hover:translate-x-2 transition duration-300">
              <EnvelopeIcon className="h-5 w-5 text-yellow-600" />

              <a 
                href="mailto:business.mamabeauty@gmail.com"
                className="text-sm text-yellow-700 hover:text-yellow-500 break-all"
              >
                business.mamabeauty@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3 hover:translate-x-2 transition duration-300">
              <ClockIcon className="h-5 w-5 text-yellow-600" />

              <span className="text-sm text-yellow-700">
                Pon-Sub: 09:00 - 21:00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-6 border-t border-yellow-100 pt-6 animate-fade-up">
        <p className="text-center text-xs sm:text-sm leading-5 text-yellow-700 px-4">
          &copy; {new Date().getFullYear()} MAMA Beauty. Sva prava zadržana.
        </p>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }

        .animate-slide-left {
          animation: slideLeft 1s ease forwards;
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
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          footer {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;