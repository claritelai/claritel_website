import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Building2, Server, Globe, Zap } from 'lucide-react';

const Enhanced3DPresenceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('global');
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const globalLocations = [
    { name: 'Mumbai', country: 'India', type: 'Corporate HQ', coordinates: { x: '72%', y: '58%' }, color: 'bg-blue-500' },
    { name: 'Bangalore', country: 'India', type: 'Tech Hub', coordinates: { x: '73%', y: '65%' }, color: 'bg-emerald-500' },
    { name: 'Gurgaon', country: 'India', type: 'Operations', coordinates: { x: '71%', y: '52%' }, color: 'bg-purple-500' },
    { name: 'Hyderabad', country: 'India', type: 'Development', coordinates: { x: '74%', y: '62%' }, color: 'bg-orange-500' },
    { name: 'Chennai', country: 'India', type: 'Support', coordinates: { x: '75%', y: '68%' }, color: 'bg-pink-500' },
    { name: 'Noida', country: 'India', type: 'Tech Lab', coordinates: { x: '71%', y: '51%' }, color: 'bg-cyan-500' },
    { name: 'Pune', country: 'India', type: 'Operations', coordinates: { x: '70%', y: '60%' }, color: 'bg-teal-500' },
    { name: 'Kochi', country: 'India', type: 'Development', coordinates: { x: '72%', y: '70%' }, color: 'bg-indigo-500' },
    { name: 'Dubai', country: 'UAE', type: 'Regional Office', coordinates: { x: '65%', y: '55%' }, color: 'bg-yellow-500' },
    { name: 'Manila', country: 'Philippines', type: 'APAC Office', coordinates: { x: '85%', y: '65%' }, color: 'bg-green-500' },
    { name: 'Kampala', country: 'Uganda', type: 'Africa Office', coordinates: { x: '60%', y: '70%' }, color: 'bg-red-500' },
    { name: 'Lagos', country: 'Nigeria', type: 'West Africa', coordinates: { x: '52%', y: '68%' }, color: 'bg-violet-500' }
  ];

  useEffect(() => {
    if (mapRef.current) {
      const createDataParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60';
        particle.style.cssText += `
          animation: data-flow 4s linear infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
        `;
        mapRef.current?.appendChild(particle);
        setTimeout(() => {
          if (particle.parentNode) particle.parentNode.removeChild(particle);
        }, 4000);
      };
      const interval = setInterval(createDataParticle, 500);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="presence" className="py-24 bg-blue-50 relative overflow-hidden neuron-network">
      {/* Background without gradients */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-glow">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic locations worldwide, ensuring reliable service delivery and local expertise across continents.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-3xl p-2 shadow-2xl">
            {[
              { id: 'global', label: 'Global Footprint', icon: Globe },
              { id: 'data', label: 'Data Centers', icon: Server },
              { id: 'offices', label: 'Key Offices', icon: Building2 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-8 py-4 rounded-2xl transition-all duration-500 card-3d ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-2xl transform scale-105'
                    : 'text-gray-600 hover:bg-blue-100'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-3" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Global Map */}
        {activeTab === 'global' && (
          <div className="glass rounded-3xl p-8 shadow-2xl card-3d">
            <div ref={mapRef} className="relative h-96 bg-blue-100 rounded-3xl overflow-hidden border border-blue-200">
              {/* Simplified continents */}
              <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full opacity-30 text-blue-400">
                <path d="M200 150 Q350 120 500 160 Q650 140 800 180 L850 250 Q750 280 650 260 Q500 290 350 270 Q200 280 150 220 Z" fill="currentColor" />
                <path d="M100 300 Q200 280 300 320 Q400 310 450 350 L420 400 Q350 420 250 400 Q150 410 100 350 Z" fill="currentColor" />
                <path d="M550 300 Q650 280 750 320 Q850 310 900 350 L870 420 Q750 440 650 420 Q550 430 520 370 Z" fill="currentColor" />
              </svg>

              {/* Pins */}
              {globalLocations.map((location, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                  style={{ left: location.coordinates.x, top: location.coordinates.y }}
                  onMouseEnter={() => setHoveredLocation(location.name)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <div className={`w-6 h-6 ${location.color} rounded-full shadow-2xl group-hover:scale-150 transition-all duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Centers */}
        {activeTab === 'data' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 shadow-2xl card-3d">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-glow">Primary Data Centers</h3>
              <div className="space-y-4">
                {['Mumbai', 'Bangalore', 'Gurgaon', 'Hyderabad', 'Chennai'].map((city, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-100 rounded-xl card-3d">
                    <Server className="w-6 h-6 text-blue-500 mr-4 animate-pulse" />
                    <div>
                      <div className="font-semibold text-gray-800">{city} Data Center</div>
                      <div className="text-sm text-gray-500">Tier-3 Certified, 99.9% Uptime</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 shadow-2xl card-3d">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-glow">Infrastructure Partners</h3>
              <div className="space-y-4">
                {[
                  { name: 'Airtel Nextra', logo: '🏢', location: 'Multiple Cities' },
                  { name: 'Yotta Infrastructure', logo: '🌐', location: 'Mumbai, Pune' },
                  { name: 'CtrlS Datacenters', logo: '💾', location: 'Hyderabad, Chennai' },
                  { name: 'Sify Technologies', logo: '🔧', location: 'Bangalore, Chennai' }
                ].map((partner, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-100 rounded-xl card-3d">
                    <div className="text-4xl mr-4">{partner.logo}</div>
                    <div>
                      <div className="font-semibold text-gray-800">{partner.name}</div>
                      <div className="text-sm text-gray-500">{partner.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Offices */}
        {activeTab === 'offices' && (
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: 'Headquarters', location: 'Bangalore, India', address: 'Electronic City, Bangalore 560100', icon: Building2, color: 'bg-blue-500' },
              { type: 'Corporate Office', location: 'Mumbai, India', address: 'Bandra Kurla Complex, Mumbai 400051', icon: Building2, color: 'bg-blue-500' },
              { type: 'Technology Lab', location: 'Noida, India', address: 'Sector 62, Noida 201309', icon: Server, color: 'bg-blue-500' }
            ].map((office, index) => (
              <div key={index} className="glass rounded-3xl p-8 shadow-2xl card-3d">
                <div className={`w-20 h-20 ${office.color} rounded-3xl flex items-center justify-center mb-6`}>
                  <office.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{office.type}</h3>
                <div className="text-blue-600 font-semibold mb-2">{office.location}</div>
                <div className="text-gray-600">{office.address}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Enhanced3DPresenceSection;
