import React from "react";
import { Shield, Server, Lock, Zap, Award, CheckCircle } from "lucide-react";

const TechnologySection: React.FC = () => {
  const techFeatures = [
    {
      icon: Server,
      title: "Load Balancers",
      description: "Advanced traffic distribution for optimal performance",
      details: [
        "High availability",
        "Auto-scaling",
        "Health monitoring",
        "Global distribution",
      ],
    },
    {
      icon: Shield,
      title: "SIP Security",
      description: "Enterprise-grade security for all communications",
      details: [
        "TLS encryption",
        "SIP over TLS",
        "Fraud detection",
        "Access control",
      ],
    },
    {
      icon: Zap,
      title: "HA/DR",
      description: "High availability and disaster recovery systems",
      details: [
        "99.99% uptime",
        "Automatic failover",
        "Data replication",
        "Backup systems",
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      logo: "🏆",
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Availability Controls",
      logo: "🛡️",
    },
    {
      name: "VAPT",
      description: "Vulnerability Assessment & Penetration Testing",
      logo: "🔒",
    },
  ];

  const architectureComponents = [
    "API Gateway",
    "Microservices",
    "Container Orchestration",
    "Message Queues",
    "CDN Network",
    "Database Clusters",
    "Monitoring Systems",
    "Backup Solutions",
  ];

  return (
    <section
      id="technology"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Technology Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade infrastructure built for scale, security, and
            reliability with industry-leading compliance and performance
            standards.
          </p>
        </div>

        {/* Architecture Visualization */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              3D System Architecture
            </h3>

            {/* 3D Architecture Diagram */}
            <div className="relative h-[23rem] bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl overflow-hidden">
              {/* Layer 1 - Frontend */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg shadow-xl flex items-center justify-center text-white font-semibold opacity-90">
                User Interface Layer
              </div>

              {/* Layer 2 - API */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-72 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl flex items-center justify-center text-white font-semibold opacity-80 transform rotate-1">
                API Gateway & Load Balancers
              </div>

              {/* Layer 3 - Services */}
              <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-80 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl flex items-center justify-center text-white font-semibold opacity-70 transform -rotate-1">
                Microservices & AI Engine
              </div>

              {/* Layer 4 - Data */}
              <div className="absolute top-72 left-1/2 transform -translate-x-1/2 w-[20rem] h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-xl flex items-center justify-center text-white font-semibold opacity-90">
                Database & Storage Layer
              </div>

              {/* Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#10b981", stopOpacity: 0.6 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#06b6d4", stopOpacity: 0.6 }}
                    />
                  </linearGradient>
                </defs>
                <line
                  x1="50%"
                  y1="20%"
                  x2="50%"
                  y2="40%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="40%"
                  x2="50%"
                  y2="64%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="64%"
                  x2="50%"
                  y2="84%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>

              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Certifications */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Compliance & Certifications
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {cert.logo}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Components */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Core Architecture Components
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {architectureComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {component}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
