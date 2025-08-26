import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Users, 
  Bot, 
  BarChart3, 
  Scan, 
  Globe2, 
  Headphones 
} from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('telephony');

  const solutions = {
    telephony: {
      icon: Phone,
      title: 'Cloud Telephony',
      description: 'Enterprise-grade cloud-based communication infrastructure with global reach and carrier-grade reliability.',
      features: [
        'Multi-tenant SIP architecture',
        'Global number provisioning',
        'Real-time call analytics',
        'Advanced IVR systems',
        'Call recording & monitoring'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    ccaas: {
      icon: Headphones,
      title: 'Omni-Channel CCaaS',
      description: 'Complete contact center as a service platform with AI-powered routing and workforce optimization.',
      features: [
        'Intelligent call routing',
        'Multi-channel support',
        'Workforce management',
        'Performance analytics',
        'CRM integrations'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    uc: {
      icon: Users,
      title: 'Unified Communication',
      description: 'Seamless collaboration platform integrating voice, video, messaging, and file sharing.',
      features: [
        'HD voice & video calling',
        'Team collaboration tools',
        'Mobile & desktop apps',
        'Meeting scheduling',
        'File sharing & storage'
      ],
      gradient: 'from-purple-500 to-indigo-500'
    },
    bots: {
      icon: Bot,
      title: 'AI Voice & Chat Bots',
      description: 'Intelligent conversational AI powered by advanced NLP and machine learning algorithms.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context-aware responses',
        'Seamless human handoff',
        'Continuous learning'
      ],
      gradient: 'from-pink-500 to-red-500'
    },
    analytics: {
      icon: BarChart3,
      title: 'Pulse Analytics',
      description: 'Real-time business intelligence and predictive analytics for data-driven decision making.',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reporting',
        'Performance metrics',
        'Trend analysis'
      ],
      gradient: 'from-orange-500 to-yellow-500'
    },
    scaniq: {
      icon: Scan,
      title: 'ScanIQ',
      description: 'Advanced document processing and data extraction using AI-powered optical character recognition.',
      features: [
        'Intelligent OCR',
        'Document classification',
        'Data validation',
        'Workflow automation',
        'API integrations'
      ],
      gradient: 'from-green-500 to-emerald-500'
    }
  };

  const tabKeys = Object.keys(solutions) as Array<keyof typeof solutions>;

  return (
    <section id="solutions" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive suite of AI-powered communication solutions designed to transform your customer experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabKeys.map((key) => {
            const solution = solutions[key];
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-2xl transition-all duration-300 font-medium ${
                  activeTab === key
                    ? `bg-gradient-to-r ${solution.gradient} text-white shadow-2xl transform scale-105`
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-lg hover:shadow-xl'
                }`}
              >
                <solution.icon className="w-5 h-5 mr-2" />
                {solution.title}
              </button>
            );
          })}
        </div>

        {/* Active Solution Content */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-12">
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${solutions[activeTab as keyof typeof solutions].gradient} rounded-2xl flex items-center justify-center mr-6 shadow-xl`}>
                  {React.createElement(solutions[activeTab as keyof typeof solutions].icon, { 
                    className: "w-8 h-8 text-white" 
                  })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {solutions[activeTab as keyof typeof solutions].title}
                  </h3>
                  <div className={`w-20 h-1 bg-gradient-to-r ${solutions[activeTab as keyof typeof solutions].gradient} rounded-full`}></div>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {solutions[activeTab as keyof typeof solutions].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Features</h4>
                {solutions[activeTab as keyof typeof solutions].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 bg-gradient-to-r ${solutions[activeTab as keyof typeof solutions].gradient} rounded-full mr-4 flex-shrink-0`}></div>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`mt-8 px-8 py-4 bg-gradient-to-r ${solutions[activeTab as keyof typeof solutions].gradient} text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl transform hover:scale-105`}>
                Learn More
              </button>
            </div>

            {/* Visual */}
            <div className={`relative bg-gradient-to-br ${solutions[activeTab as keyof typeof solutions].gradient} p-12 flex items-center justify-center`}>
              <div className="relative">
                {/* 3D Visualization */}
                <div className="w-80 h-80 relative">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transform rotate-6 animate-float"></div>
                  <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 transform -rotate-3 animate-float-delayed"></div>
                  <div className="absolute inset-8 bg-white/30 rounded-xl backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    {React.createElement(solutions[activeTab as keyof typeof solutions].icon, { 
                      className: "w-32 h-32 text-white opacity-80" 
                    })}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/30 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/25 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              50ms
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Latency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              ISO
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;