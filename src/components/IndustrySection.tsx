import React from 'react';
import { 
  Banknote, 
  CreditCard, 
  Shield, 
  Heart, 
  GraduationCap, 
  Plane, 
  Home, 
  Truck, 
  Car 
} from 'lucide-react';

const IndustrySection: React.FC = () => {
  const industries = [
    {
      icon: Banknote,
      name: 'Banking',
      description: 'Secure, compliant communication solutions for financial institutions.',
      color: 'bg-blue-600'
    },
    {
      icon: CreditCard,
      name: 'Fintech',
      description: 'Scalable payment and transaction communication platforms.',
      color: 'bg-emerald-600'
    },
    {
      icon: Shield,
      name: 'Insurance',
      description: 'Claims processing and customer service automation.',
      color: 'bg-purple-600'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'HIPAA-compliant patient communication and telemedicine.',
      color: 'bg-red-600'
    },
    {
      icon: GraduationCap,
      name: 'EdTech',
      description: 'Educational communication and student support systems.',
      color: 'bg-indigo-600'
    },
    {
      icon: Plane,
      name: 'Travel',
      description: 'Booking, support, and customer experience optimization.',
      color: 'bg-cyan-600'
    },
    {
      icon: Home,
      name: 'Real Estate',
      description: 'Lead management and property inquiry handling.',
      color: 'bg-orange-600'
    },
    {
      icon: Truck,
      name: 'Logistics',
      description: 'Supply chain communication and tracking systems.',
      color: 'bg-green-600'
    },
    {
      icon: Car,
      name: 'Automobile',
      description: 'Dealer networks and customer service automation.',
      color: 'bg-gray-600'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tailored AI-powered communication solutions designed for the unique needs 
            and compliance requirements of every industry vertical.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              {/* Icon */}
              <div className={`relative w-16 h-16 ${industry.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {industry.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gray-800 rounded-2xl text-emerald-400 font-semibold border border-gray-700">
            <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
            Custom solutions available for specialized industry requirements
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
