import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Beaker, Home, Users, Calendar, Phone, Newspaper } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Home, text: 'INICIO' },
    { to: '/labs', icon: Beaker, text: 'LABORATORIOS' },
    //{ to: '/testimonials', icon: Users, text: 'Testimonials' },
    { to: '/visit', icon: Calendar, text: 'VISITA' },
    //{ to: '/contact', icon: Phone, text: 'CONTACTO' },
    { to: '/news', icon: Newspaper, text: 'NOTICIAS' },
  ];

  return (
    <nav className="bg-[#00B4D8] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="src/img/logo2.png" alt=""className="h-auto w-[3em]"/>
            <span className="font-bold text-xl">FIIS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ to, icon: Icon, text }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center space-x-1 hover:text-gray-200 transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span>{text}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#0096B4] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ to, icon: Icon, text }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-[#0096B4]"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-4 w-4" />
                <span>{text}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;