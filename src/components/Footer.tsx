import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Study Destinations', path: '/destinations' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    'University Selection',
    'Application Support',
    'Visa Assistance',
    'Pre-Departure Guidance',
    'Scholarship Advice',
    'Career Counselling',
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="EduQuest Consultancy"
                className="h-[51px] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for UK university admissions. We help students from South Asia, Africa and Europe achieve their dreams of studying in the UK with personalised, free guidance and support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-blue-400 font-semibold uppercase mb-1">🇬🇧 London Office</p>
                  <span className="text-gray-400">
                    53 Harts Lane<br />
                    Barking, London<br />
                    IG11 8NA
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-blue-400 font-semibold uppercase mb-1">🇧🇩 Bangladesh Office</p>
                  <span className="text-gray-400">
                    20/6, West Panthapath<br />
                    Level-5, Dhaka-1205<br />
                    Bangladesh
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <div>
                  <a href="tel:+447301793020" className="text-gray-400 hover:text-white transition-colors block">
                    +44 7301 793020 (UK)
                  </a>
                  <a href="tel:+8801335845976" className="text-gray-400 hover:text-white transition-colors block">
                    +880 1335845976 (BD)
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@eduquestconsultancy.co.uk" className="text-gray-400 hover:text-white transition-colors">
                  info@eduquestconsultancy.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} EduQuest Consultancy. All rights reserved. EDUQUEST CONSULTANTS LTD is a UK company with Registration No: 16151445
              </p>
              <span className="hidden md:inline text-gray-700">|</span>
              <a 
                href="https://www.esyai.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                Made by EsyAI
              </a>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
