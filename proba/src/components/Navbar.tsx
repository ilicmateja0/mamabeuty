import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../assets/images/logo.png';

const navigation = [
  { name: 'Početna', href: '/' },
  { name: 'Naš Salon', href: '/#salon-section' },
  { name: 'Naše Usluge', href: '/#services-section' },
  { name: 'Cenovnik', href: '/#price-lists-section' },
  { name: 'O Nama', href: '/about' },
  { name: 'Oprema', href: '/equipment' },
  { name: 'Galerija', href: '/gallery' },
  { name: 'Kontakt', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isHomePage = location.pathname === '/';

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    if (href.includes('#')) {
      const [path, hash] = href.split('#');

      navigate(path || '/');

      setTimeout(() => {
        const element = document.getElementById(hash);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 150);
    } else {
      navigate(href);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isHomePage && !isScrolled
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-4">
          {/* LOGO */}
<Link
  to="/"
  onClick={() => {
    setMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }}
>
  <img
    src={logo}
    alt="Logo"
    className="h-12 w-auto object-contain"
  />
</Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden transition-colors duration-300 ${
              isHomePage && !isScrolled
                ? 'text-white'
                : 'text-yellow-900'
            }`}
          >
            <Bars3Icon className="h-9 w-9" />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[999] bg-[#fdfaf1] transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-yellow-100">
          <img
            src={logo}
            alt="Logo"
            className="h-11 w-auto"
          />

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-yellow-900"
          >
            <XMarkIcon className="h-9 w-9" />
          </button>
        </div>

        <div className="flex flex-col px-8 pt-14 space-y-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className="text-3xl font-semibold text-yellow-900 transition-transform duration-300 hover:translate-x-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;