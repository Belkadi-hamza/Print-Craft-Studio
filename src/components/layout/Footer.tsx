import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Printer, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Printer className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold">PrintCraft Studio</span>
            </div>
            <p className="mb-6 text-gray-300">
              Transforming ideas into vibrant designs and quality prints since 2010. We specialize in apparel printing, logo design, and visual advertising solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <MessageCircle className="w-6 h-6" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-primary-500 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Textile Printing</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Logo Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Visual Advertising</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Vehicle Branding</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Promotional Items</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">123 Print Avenue, Design District, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-500 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@printcraftstudio.com" className="text-gray-300 hover:text-primary-500 transition-colors">
                  info@printcraftstudio.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Monday - Friday: 9am - 6pm</div>
                  <div>Saturday: 10am - 4pm</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PrintCraft Studio. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Developed by <a href="mailto:hamzabelkadi25@gmail.com" className="text-primary-500 hover:text-primary-400 transition-colors">BELKADI HAMZA</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;