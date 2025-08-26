import React, { useState } from 'react';
import { MapPin, Building2, Server, Globe } from 'lucide-react';

const PresenceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('global');

  const globalLocations = [
    { name: 'Mumbai', country: 'India', type: 'Corporate HQ', coordinates: { x: '72%', y: '58%' } },
    { name: 'Bangalore', country: 'India', type: 'Tech Hub', coordinates: { x: '73%', y: '65%' } },
    { name: 'Gurgaon', country: 'India', type: 'Operations', coordinates: { x: '71%', y: '52%' } },
    { name: 'Hyderabad', country: 'India', type: 'Development', coordinates: { x: '74%', y: '62%' } },
    { name: 'Chennai', country: 'India', type: 'Support', coordinates: { x: '75%', y: '68%' } },
    { name: 'Noida', country: 'India', type: 'Tech Lab', coordinates: { x: '71%', y: '51%' } },
    { name: 'Pune', country: 'India', type: 'Operations', coordinates: { x: '70%', y: '60%' } },
    { name: 'Kochi', country: 'India', type: 'Development', coordinates: { x: '72%', y: '70%' } },
    { name: 'Dubai', country: 'UAE', type: 'Regional Office', coordinates: { x: '65%', y: '55%' } },
    { name: 'Manila', country: 'Philippines', type: 'APAC Office', coordinates: { x: '85%', y: '65%' } },
    { name: 'Kampala', country: 'Uganda', type: 'Africa Office', coordinates: { x: '60%', y: '70%' } },
    { name: 'Lagos', country: 'Nigeria', type: 'West Africa', coordinates: { x: '52%', y: '68%' } }
  ];

  const dataPartners = [
    { name: 'Airtel Nextra', logo: '🏢', location: 'Multiple Cities' },
    { name: 'Yotta Infrastructure', logo: '🌐', location: 'Mumbai, Pune' },
    { name: 'CtrlS Datacenters', logo: '💾', location: 'Hyderabad, Chennai' },
    { name: 'Sify Technologies', logo: '🔧', location: 'Bangalore, Chennai' }
  ];

  const offices = [
    {
      type: 'Headquarters',
      location: 'Bangalore, India',
      address: 'Electronic City, Bangalore 560100',
      icon: Building2,
      color: 'emerald'
    },
    {
      type: 'Corporate Office',
      location: 'Mumbai, India',
      address: 'Bandra Kurla Complex, Mumbai 400051',
      icon: Building2,
      color: 'cyan'
    },
    {
      type: 'Technology Lab',
      location: 'Noida, India',
      address: 'Sector 62, Noida 201309',
      icon: Server,
      color: 'purple'
    }
  ];

  return (
    <section id="presence" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Strategic locations worldwide, ensuring reliable service delivery and local expertise across continents.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-2 shadow-xl">
            {[
              { id: 'global', label: 'Global Footprint', icon: Globe },
              { id: 'data', label: 'Data Centers', icon: Server },
              { id: 'offices', label: 'Key Offices', icon: Building2 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'global' && (
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl">
            {/* World Map */}
            <div className="relative h-96 bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <path
                    d="M200 200 Q300 150 400 200 T600 180 L700 220 Q800 180 900 200"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-gray-400"
                  />
                </svg>
              </div>

              {/* Location Pins */}
              {globalLocations.map((location, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: location.coordinates.x, top: location.coordinates.y }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute top-0 left-0 w-4 h-4 bg-emerald-500 rounded-full opacity-30 animate-ping"></div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
                      <div className="font-semibold">{location.name}</div>
                      <div className="text-xs opacity-75">{location.type}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {globalLocations.map((location, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <MapPin className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800 dark:text-white">{location.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{location.type}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Centers */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Primary Data Centers</h3>
              <div className="space-y-4">
                {['Mumbai', 'Bangalore', 'Gurgaon', 'Hyderabad', 'Chennai'].map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl"
                  >
                    <Server className="w-6 h-6 text-emerald-500 mr-4" />
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">{city} Data Center</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Tier-3 Certified, 99.9% Uptime</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Infrastructure Partners</h3>
              <div className="space-y-4">
                {dataPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl"
                  >
                    <div className="text-3xl mr-4">{partner.logo}</div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">{partner.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{partner.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'offices' && (
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 bg-${office.color}-600 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <office.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{office.type}</h3>
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">{office.location}</div>
                <div className="text-gray-600 dark:text-gray-300">{office.address}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PresenceSection;
