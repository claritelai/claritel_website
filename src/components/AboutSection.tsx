import React from 'react';
import { Brain, Cpu, Shield, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Deep Tech',
      description: 'Advanced AI algorithms powered by machine learning and neural networks for intelligent customer experiences.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'AI+ML+LLM',
      description: 'Cutting-edge Large Language Models integrated with ML pipelines for conversational AI excellence.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Hybrid Deployment',
      description: 'Flexible cloud-native and on-premise deployment options with enterprise-grade security.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Carrier-Grade Performance',
      description: 'Ultra-reliable, scalable infrastructure designed for mission-critical enterprise communications.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Transforming Customer Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're pioneers in Deep Tech AI, building the next generation of intelligent contact center solutions 
            that adapt, learn, and evolve with your business needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-blue-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              {/* 3D Icon Container */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full text-blue-700 font-semibold backdrop-blur-sm border border-blue-200">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            Trusted by Fortune 500 companies across 10+ industries
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;