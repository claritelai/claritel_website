import React, { useEffect, useRef } from 'react';
import { ChevronRight, Play, Sparkles } from 'lucide-react';

const EnhancedHeroSection: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simple solid color particle system
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      const size = Math.random() * 6 + 2;

      particle.className = 'particle absolute rounded-full';
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: #3b82f6; /* solid blue */
        pointer-events: none;
        animation: float ${Math.random() * 8 + 6}s infinite ease-in-out;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.7 + 0.3};
      `;

      particlesRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 15000);
    };

    // Neural network canvas animation (kept with solid color lines/nodes)
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const nodes: Array<{ x: number, y: number, vx: number, vy: number }> = [];
        const nodeCount = 50;

        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
          });
        }

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          nodes.forEach((node, i) => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
            if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

            nodes.forEach((otherNode, j) => {
              if (i !== j) {
                const dx = node.x - otherNode.x;
                const dy = node.y - otherNode.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                  ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - distance / 500})`; // solid blue
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(node.x, node.y);
                  ctx.lineTo(otherNode.x, otherNode.y);
                  ctx.stroke();
                }
              }
            });

            ctx.fillStyle = `rgba(59, 130, 246, 0.8)`; // solid blue
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
            ctx.fill();
          });

          requestAnimationFrame(animate);
        };

        animate();
      }
    }

    const interval = setInterval(createParticle, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />

      {/* Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 opacity-40"></div>

      {/* Floating Solid Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400 rounded-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-blue-200 rounded-2xl opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-20 w-12 h-12 bg-blue-400 rounded-xl opacity-25 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-28">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Enterprise Solutions
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
            <span className="block text-blue-600">Deep Tech.</span>
            <span className="block text-gray-800 mt-2">Modular Architecture.</span>
            <span className="block text-blue-600 mt-2">Carrier-Grade AI Voice.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Claritel.ai empowers enterprises with AI-driven, scalable, and adaptive CX solutions
            that transform the contact center ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="group relative px-10 py-5 bg-blue-600 text-white rounded-3xl font-semibold text-lg transition-transform hover:scale-105">
              <span className="flex items-center">
                Explore Solutions
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
            </button>

            <button className="group px-10 py-5 bg-white text-blue-800 rounded-3xl font-semibold text-lg border border-blue-200 transition-transform hover:scale-105">
              <span className="flex items-center">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
            {[
              { value: '500M+', label: 'API Calls/Month' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solid Holographic Display */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-32 h-32 opacity-30">
        <div className="w-full h-full border-2 border-blue-400 rounded-2xl flex items-center justify-center">
          <div className="text-4xl">🤖</div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;
