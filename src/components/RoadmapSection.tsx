import React from 'react';
import { Calendar, TrendingUp, Zap, Brain } from 'lucide-react';

const RoadmapSection: React.FC = () => {
  const roadmapItems = [
    {
      year: '2026',
      quarter: 'Q1',
      icon: TrendingUp,
      title: 'Advanced Analytics Suite',
      features: [
        'Real-time Sentiment Analysis',
        'AI-powered Agent Assist',
        'Automated Quality Assurance',
        'Predictive Customer Insights'
      ],
      status: 'Development',
      color: 'from-emerald-500 to-cyan-500',
      bgColor: 'from-emerald-50 to-cyan-50'
    },
    {
      year: '2026',
      quarter: 'Q2',
      icon: Brain,
      title: 'Full Agentic AI Platform',
      features: [
        'Autonomous AI Agents',
        'Multi-channel Automation',
        'Dynamic Workflow Orchestration',
        'Self-Learning Systems'
      ],
      status: 'Planned',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Innovation Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey towards the future of AI-powered customer experience and contact center automation.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500 rounded-full opacity-30"></div>

          {/* Roadmap Items */}
          <div className="space-y-20">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-${index % 2 === 0 ? 'start' : 'end'}`}>
                <div className={`w-full max-w-lg ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`bg-gradient-to-br ${item.bgColor} rounded-3xl p-8 shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2`}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mr-4 shadow-xl`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-800">{item.year}</div>
                          <div className="text-sm text-gray-500">{item.quarter}</div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-medium`}>
                        {item.status}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>

                    {/* Features */}
                    <div className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span>Progress</span>
                        <span>{item.quarter === 'Q1' ? '75%' : '15%'}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: item.quarter === 'Q1' ? '75%' : '15%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node - Hidden on mobile, visible on md and up */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full border-4 border-white dark:border-gray-900 shadow-xl z-10`}>
                    <div className="w-full h-full rounded-full opacity-50 animate-ping"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-cyan-500 dark:to-purple-500 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-emerald-500/25 dark:hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
            <Calendar className="w-5 h-5 mr-2" />
            Stay Updated on Our Progress
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;