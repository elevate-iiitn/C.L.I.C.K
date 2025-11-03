import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    employees: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        employees: '',
        interest: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Us',
      detail: 'contact@C.L.I.C.K.com',
      subdDetail: 'We respond within 24 hours',
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Call Us',
      detail: '+91 98765 43210',
      subdDetail: 'Mon-Fri, 9 AM - 6 PM IST',
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Visit Us',
      detail: '123 Business Park, Bangalore',
      subdDetail: 'Karnataka, India 560001',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Business Hours',
      detail: 'Monday - Friday',
      subdDetail: '9:00 AM - 6:00 PM IST',
    },
  ];

  const benefits = [
    'Free training needs assessment',
    'Customized program recommendations',
    'Flexible scheduling options',
    'Transparent pricing with no hidden costs',
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to transform your workforce? Let's discuss how we can help you achieve your training objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  {info.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-700 font-semibold mb-1">{info.detail}</p>
                <p className="text-sm text-slate-500">{info.subdDetail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Request a Free Consultation</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Fill out the form and our team will reach out within 24 hours to discuss your training needs
                and provide a customized solution.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What You'll Get:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-600 mr-3 text-xl">✓</span>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Schedule a Demo
                </h3>
                <p className="text-slate-700 mb-4">
                  Prefer to speak with someone right away? Book a 30-minute demo call with our training experts.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Demo Call
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 shadow-xl border border-slate-200">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h3>
                  <p className="text-lg text-slate-700">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-semibold text-slate-900 mb-2">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="">Select Industry</option>
                        <option value="it">Information Technology</option>
                        <option value="bfsi">Banking & Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="employees" className="block text-sm font-semibold text-slate-900 mb-2">
                        Number of Employees *
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        required
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="">Select Range</option>
                        <option value="1-50">1-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="501-1000">501-1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-semibold text-slate-900 mb-2">
                        Training Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="">Select Program</option>
                        <option value="leadership">Leadership Development</option>
                        <option value="softskills">Soft Skills Training</option>
                        <option value="technical">Technical Training</option>
                        <option value="compliance">Compliance & Safety</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                      placeholder="Tell us more about your training needs, timeline, or any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Inquiry
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Other Ways to Connect</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200 text-center hover:shadow-xl transition-all">
              <MessageSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Chat</h3>
              <p className="text-slate-600 mb-4">
                Chat with our team in real-time for quick questions
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200 text-center hover:shadow-xl transition-all">
              <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp</h3>
              <p className="text-slate-600 mb-4">
                Message us directly on WhatsApp for instant support
              </p>
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Open WhatsApp
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-slate-200 text-center hover:shadow-xl transition-all">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Schedule Meeting</h3>
              <p className="text-slate-600 mb-4">
                Book a time slot that works for your schedule
              </p>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              We'd love to meet you in person. Our office is conveniently located in the heart of Bangalore's business district.
            </p>
            <div className="bg-slate-800 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center text-4xl mb-6">
                🗺️
              </div>
              <p className="text-lg font-semibold mb-2">C.L.I.C.K Headquarters</p>
              <p className="text-slate-300">123 Business Park, MG Road</p>
              <p className="text-slate-300">Bangalore, Karnataka 560001, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
