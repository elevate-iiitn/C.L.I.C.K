import { ArrowRight, Users, Award, TrendingUp, CheckCircle, Star, BarChart } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Trainers',
      description: 'Industry veterans with 15+ years of experience',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Certified Programs',
      description: 'Accredited courses with recognized certifications',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Proven Results',
      description: '95% improvement in team performance metrics',
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: 'Custom Solutions',
      description: 'Tailored programs for your unique business needs',
    },
  ];

  const services = [
    {
      title: 'Leadership Development',
      description: 'Transform managers into inspiring leaders who drive organizational success',
      image: '🎯',
    },
    {
      title: 'Soft Skills Training',
      description: 'Enhance communication, teamwork, and emotional intelligence across teams',
      image: '💡',
    },
    {
      title: 'Technical Training',
      description: 'Keep your workforce ahead with cutting-edge technical skills development',
      image: '⚙️',
    },
  ];

  const testimonials = [
    {
      quote: 'ElevateTraining transformed our leadership team. The results were visible within weeks.',
      author: 'Rajesh Kumar',
      position: 'HR Director, Tech Solutions Ltd',
      rating: 5,
    },
    {
      quote: 'Outstanding training programs that are practical, engaging, and result-oriented.',
      author: 'Priya Sharma',
      position: 'CEO, Innovation Hub',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Teams.<br />Enhancing Performance.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your workforce with world-class corporate training solutions designed for the modern enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-emerald-600 text-white rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Book a Free Demo
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-white text-blue-900 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Professionals Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600">Corporate Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose ElevateTraining</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We deliver measurable results through innovative training methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Training Programs</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions for every aspect of workforce development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-7xl">
                  {service.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Programs
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from organizations we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-600 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Team?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 50+ leading organizations that trust ElevateTraining for their workforce development needs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
