import React from 'react';
import { Brain, MessageCircle, Phone, BarChart } from 'lucide-react';

const AIInnovationSection: React.FC = () => {
  const innovations = [
    {
      icon: Brain,
      title: 'Agentic AI',
      description: 'Autonomous AI agents that can perform complex tasks, make decisions, and handle multi-step workflows without human intervention.',
      features: ['Autonomous decision making', 'Multi-step task execution', 'Context retention', 'Learning from interactions'],
      color: 'from-purple-500 to-indigo-500',
      visual: '🤖'
    },
    {
      icon: MessageCircle,
      title: 'Conversational AI',
      description: 'Advanced natural language processing for human-like conversations across voice and text channels.',
      features: ['Natural language understanding', 'Context awareness', 'Emotion detection', 'Multi-language support'],
      color: 'from-emerald-500 to-cyan-500',
      visual: '💬'
    },
    {
      icon: Phone,
      title: 'Smart Telephony',
      description: 'AI-enhanced cloud telephony with intelligent routing, call analytics, and predictive capabilities.',
      features: ['Intelligent call routing', 'Predictive dialing', 'Real-time analytics', 'Voice recognition'],
      color: 'from-blue-500 to-cyan-500',
      visual: '📞'
    },
    {
      icon: BarChart,
      title: 'Contact Center Suite',
      description: 'Comprehensive AI-powered contact center platform with advanced analytics and automation capabilities.',
      features: ['Workforce optimization', 'Performance analytics', 'Quality monitoring', 'Customer insights'],
      color: 'from-orange-500 to-red-500',
      visual: '📊'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            AI Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of customer experience with cutting-edge artificial intelligence 
            and machine learning technologies.
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${innovation.color} rounded-xl flex items-center justify-center mr-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <innovation.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {innovation.title}
                    </h3>
                  </div>
                </div>
                <div className="text-4xl opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                  {innovation.visual}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                {innovation.description}
              </p>

              {/* Features */}
              <div className="space-y-3 relative z-10">
                {innovation.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${innovation.color} rounded-full mr-3 flex-shrink-0`}></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Demo Button */}
              <button className={`mt-6 px-6 py-3 bg-gradient-to-r ${innovation.color} text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg opacity-0 group-hover:opacity-100 relative z-10`}>
                Try Demo
              </button>

              {/* Floating Elements */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${innovation.color} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse`}></div>
              <div className={`absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r ${innovation.color} rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
            </div>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Powered by Advanced AI Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Neural Networks', 'Deep Learning', 'NLP/NLU', 'Machine Learning'].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="font-semibold text-gray-800">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationSection;