import React, { useEffect, useRef } from 'react';
import { ChevronRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: #10b981; /* solid green */
        border-radius: 50%;
        pointer-events: none;
        animation: float ${Math.random() * 6 + 4}s infinite ease-in-out;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.8 + 0.2};
      `;

      particlesRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 10000);
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 opacity-20 dark:opacity-40"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-cyan-900/50 text-emerald-700 dark:text-cyan-300 text-sm font-medium backdrop-blur-sm border border-emerald-200 dark:border-cyan-700/50">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Enterprise Solutions
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-emerald-600 dark:text-cyan-400">
              Deep Tech.
            </span>
            <span className="block text-gray-800 dark:text-white mt-2">
              Modular Architecture.
            </span>
            <span className="block text-emerald-600 dark:text-cyan-400 mt-2">
              Carrier-Grade AI Voice.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Claritel.ai empowers enterprises with AI-driven, scalable, and adaptive CX solutions
            that transform the contact center ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="group relative px-8 py-4 bg-emerald-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center">
                Explore Solutions
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl font-semibold text-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-cyan-400">
                500M+
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
                API Calls/Month
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-cyan-400">
                99.9%
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
                Uptime SLA
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-cyan-400">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
                Enterprise Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-cyan-400">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Solid Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400 dark:bg-cyan-400 rounded-2xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-cyan-400 dark:bg-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-emerald-300 dark:bg-cyan-300 rounded-lg opacity-30 animate-float-slow"></div>
    </section>
  );
};

export default HeroSection;
