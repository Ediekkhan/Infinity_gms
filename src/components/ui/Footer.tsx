import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">FitFlex</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming lives through fitness since 2010. Join our community and achieve your fitness goals with expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white transition duration-200">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/memberships" className="text-gray-400 hover:text-white transition duration-200">
                  Memberships
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Gym Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Gym Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Holidays:</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                <span>123 Fitness Street, Gym City, GC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0" />
                <span>info@fitflex.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© {currentYear} FitFlex Gym Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;