import React, { useState, useEffect } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mandngbk");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  // Reset form on successful submission
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "marcom@claritel.ai",
      href: "mailto:marcom@claritel.ai",
      color: "from-emerald-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value:
        "101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your customer experience? Get in touch with our
            experts to discuss your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Demo Request
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
                <ValidationError 
                  prefix="Company" 
                  field="company"
                  errors={state.errors}
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="sales-inquiry">Sales Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="request-demo">Request Demo</option>
                  <option value="other">Other</option>
                </select>
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {state.submitting ? "Sending..." : "Demo Request"}
              </button>

              {state.succeeded && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start mt-6">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-green-600">
                      Demo Request Sent Successfully!
                    </h4>
                    <p className="text-sm text-green-600">
                      Thank you for your interest. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start mt-6">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-red-600">
                      Submission Failed
                    </h4>
                    <p className="text-sm text-red-600">
                      Please check your inputs and try again.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group block bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {info.label}
                    </h4>
                    <p
                      className={`text-gray-600 ${
                        info.label === "Headquarters"
                          ? "text-base leading-snug"
                          : "text-lg"
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Our Headquarters
              </h4>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243.01225385152784!2d77.64670271924366!3d12.959302614901938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOxford%20Towers%2C%20139%2C%20HAL%20Old%20Airport%20Rd%2C%20Kodihalli%2C%20Bengaluru%2C%20Karnataka%2056008!5e0!3m2!1sen!2sin!4v1756272415122!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;