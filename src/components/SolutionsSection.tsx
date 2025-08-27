import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  Users,
  Bot,
  BarChart3,
  Scan,
  Globe2,
  Headphones,
} from "lucide-react";

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("telephony");

  const solutions = {
    telephony: {
      icon: Phone,
      title: "Cloud Telephony",
      description:
        "Enterprise-grade cloud-based communication infrastructure with global reach and carrier-grade reliability.",
      features: [
        "Multi-tenant SIP architecture",
        "Global number provisioning",
        "Real-time call analytics",
        "Advanced IVR systems",
        "Call recording & monitoring",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    ccaas: {
      icon: Headphones,
      title: "Omni-Channel CCaaS",
      description:
        "Complete contact center as a service platform with AI-powered routing and workforce optimization.",
      features: [
        "Intelligent call routing",
        "Multi-channel support",
        "Workforce management",
        "Performance analytics",
        "CRM integrations",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    uc: {
      icon: Users,
      title: "Unified Communication",
      description:
        "Seamless collaboration platform integrating voice, video, messaging, and file sharing.",
      features: [
        "HD voice & video calling",
        "Team collaboration tools",
        "Mobile & desktop apps",
        "Meeting scheduling",
        "File sharing & storage",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
    bots: {
      icon: Bot,
      title: "AI Voice & Chat Bots",
      description:
        "Intelligent conversational AI powered by advanced NLP and machine learning algorithms.",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Context-aware responses",
        "Seamless human handoff",
        "Continuous learning",
      ],
      gradient: "from-pink-500 to-red-500",
    },
    analytics: {
      icon: BarChart3,
      title: "Business Intelligence",
      description:
        "Real-time business intelligence and predictive analytics for data-driven decision making.",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Custom reporting",
        "Performance metrics",
        "Trend analysis",
      ],
      gradient: "from-orange-500 to-yellow-500",
    },
    // scaniq: {
    //   icon: Scan,
    //   title: 'ScanIQ',
    //   description: 'Advanced document processing and data extraction using AI-powered optical character recognition.',
    //   features: [
    //     'Intelligent OCR',
    //     'Document classification',
    //     'Data validation',
    //     'Workflow automation',
    //     'API integrations'
    //   ],
    //   gradient: 'from-green-500 to-emerald-500'
    // }
  };

  const tabKeys = Object.keys(solutions) as Array<keyof typeof solutions>;

  return (
    <section
      id="solutions"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive suite of AI-powered communication solutions designed
            to transform your customer experience.
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
                    : "bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl"
                }`}
              >
                <solution.icon className="w-5 h-5 mr-2" />
                {solution.title}
              </button>
            );
          })}
        </div>

        {/* Active Solution Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-6 md:p-12">
              <div className="flex items-center mb-6 md:mb-8">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${
                    solutions[activeTab as keyof typeof solutions].gradient
                  } rounded-2xl flex items-center justify-center mr-4 md:mr-6 shadow-xl`}
                >
                  {React.createElement(
                    solutions[activeTab as keyof typeof solutions].icon,
                    {
                      className: "w-6 h-6 md:w-8 md:h-8 text-white",
                    }
                  )}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {solutions[activeTab as keyof typeof solutions].title}
                  </h3>
                  <div
                    className={`w-16 md:w-20 h-1 bg-gradient-to-r ${
                      solutions[activeTab as keyof typeof solutions].gradient
                    } rounded-full`}
                  ></div>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                {solutions[activeTab as keyof typeof solutions].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Key Features
                </h4>
                {solutions[activeTab as keyof typeof solutions].features.map(
                  (feature, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${
                          solutions[activeTab as keyof typeof solutions]
                            .gradient
                        } rounded-full mr-4 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  )
                )}
              </div>

              <button
                className={`mt-8 px-8 py-4 bg-gradient-to-r ${
                  solutions[activeTab as keyof typeof solutions].gradient
                } text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl transform hover:scale-105`}
              >
                Learn More
              </button>
            </div>

            {/* Visual */}
            <div
              className={`relative bg-gradient-to-br ${
                solutions[activeTab as keyof typeof solutions].gradient
              } p-6 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px]`}
            >
              <div className="relative">
                {/* 3D Visualization */}
                <div className="w-56 h-56 md:w-80 md:h-80 relative">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 transform scale-90 md:scale-100 rotate-6 md:animate-float"></div>
                  <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 transform scale-90 md:scale-100 -rotate-3 md:animate-float-delayed"></div>
                  <div className="absolute inset-8 bg-white/30 rounded-xl backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    {React.createElement(
                      solutions[activeTab as keyof typeof solutions].icon,
                      {
                        className:
                          "w-20 h-20 md:w-32 md:h-32 text-white opacity-80",
                      }
                    )}
                  </div>
                </div>

                {/* Floating Elements - Hidden on mobile, animated on desktop */}
                <div className="hidden md:block">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/30 rounded-full animate-bounce"></div>
                  <div
                    className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/40 rounded-full animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/25 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 mt-16">
          <div className="text-center px-1">
            <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-xs md:text-base text-gray-600 mt-1">
              Uptime SLA
            </div>
          </div>
          <div className="text-center px-1">
            <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-xs md:text-base text-gray-600 mt-1">
              Support
            </div>
          </div>
          <div className="text-center px-1">
            <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              ISO
            </div>
            <div className="text-xs md:text-base text-gray-600 mt-1">
              Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
