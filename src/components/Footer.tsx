import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Beaker } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="src/img/logo.png" alt=""className="h-auto w-[8em]"/>
            </Link>
            <p className="text-sm">
             Capacitar a la próxima generación de innovadores mediante tecnología punta y aprendizaje práctico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/labs" className="hover:text-[#00B4D8] transition-colors">Nuestros laboratorios</Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-[#00B4D8] transition-colors">Programar una visita</Link>
              </li>
              {/*<li>
                <Link to="/testimonials" className="hover:text-[#00B4D8] transition-colors">Testimonials</Link>
              </li>*/}
              <li>
                <Link to="/news" className="hover:text-[#00B4D8] transition-colors">Últimas noticias</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#00B4D8]" />
                <span>Carretera Central km. 1.21
                Tingo María - Huánuco, Perú</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#00B4D8]" />
                <a href="mailto:fiis@unas.edu.pe" className="hover:text-[#00B4D8] transition-colors">
                  fiis@unas.edu.pe
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#00B4D8]" />
                <a href="" className="hover:text-[#00B4D8] transition-colors">
                  062-561009
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#00B4D8] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Faculty Laboratories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;