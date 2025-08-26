import React from 'react';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import darkLogo from "../assests/darklogo.png";

const Footer: React.FC = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'News & Events', 'Leadership', 'Investors'],
    Solutions: ['Cloud Telephony', 'CCaaS', 'Unified Communications', 'AI Bots', 'Analytics'],
    Industries: ['Banking', 'Healthcare', 'E-commerce', 'Education', 'Real Estate'],
    Resources: ['Documentation', 'API Reference', 'Case Studies', 'Whitepapers', 'Blog'],
    Support: ['Help Center', 'Contact Support', 'System Status', 'Security', 'Privacy']
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-white border-t border-blue-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              
                <img
              src={darkLogo}
              alt="Claritel.ai"
              className="text-xl"
            />
              <p className="text-gray-600 mt-4 leading-relaxed">
                Transforming customer experience with AI-powered, carrier-grade communication solutions 
                that scale with your business.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <a href="mailto:marcom@claritel.ai" className="hover:text-blue-600 transition-colors">
                  marcom@claritel.ai
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <a href="tel:+917276011304" className="hover:text-blue-600 transition-colors">
                  +91-7276011304
                </a>
              </div>
              <div className="flex items-start text-gray-600">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                <span>Electronic City, Bangalore 560100, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 bg-blue-100 rounded-xl text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              <p>&copy; 2025 Claritel.ai. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;