import { Star, TrendingUp, Users, Award, Building2, Quote } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: string) => void;
}

export default function TestimonialsPage({ onNavigate }: TestimonialsPageProps) {
  const testimonials = [
    {
      quote: 'ElevateTraining completely transformed our leadership team. The facilitators brought real-world experience and practical tools that our managers could apply immediately. Within three months, we saw measurable improvements in team engagement and productivity.',
      author: 'Rajesh Kumar',
      position: 'HR Director',
      company: 'Tech Solutions Ltd',
      industry: 'Information Technology',
      rating: 5,
      image: '👨‍💼',
    },
    {
      quote: 'Outstanding training programs that are not just theoretical but incredibly practical. The soft skills training helped our customer service team achieve a 35% improvement in satisfaction scores. Highly recommend!',
      author: 'Priya Sharma',
      position: 'CEO',
      company: 'Innovation Hub',
      industry: 'Consulting',
      rating: 5,
      image: '👩‍💼',
    },
    {
      quote: 'We partnered with ElevateTraining for a custom leadership development program. Their team took time to understand our culture and challenges, delivering a program that felt tailor-made. The ROI has been exceptional.',
      author: 'Amit Patel',
      position: 'VP Operations',
      company: 'Global Logistics Corp',
      industry: 'Supply Chain',
      rating: 5,
      image: '👨‍💼',
    },
    {
      quote: 'The technical training programs are world-class. Our development team gained cutting-edge skills in cloud computing and DevOps. The trainers are experts who understand both technology and business context.',
      author: 'Sneha Iyer',
      position: 'CTO',
      company: 'Digital Ventures',
      industry: 'Technology',
      rating: 5,
      image: '👩‍💼',
    },
    {
      quote: 'ElevateTraining helped us navigate a major digital transformation. Their change management and leadership programs equipped our middle managers to lead their teams through uncertainty with confidence.',
      author: 'Vikram Singh',
      position: 'Managing Director',
      company: 'Heritage Bank',
      industry: 'Banking & Finance',
      rating: 5,
      image: '👨‍💼',
    },
    {
      quote: 'The training was engaging, interactive, and highly relevant. Our team loved the experiential learning approach. This is not your typical boring corporate training - it actually works!',
      author: 'Anita Desai',
      position: 'Head of Learning & Development',
      company: 'Pharma Plus',
      industry: 'Healthcare',
      rating: 5,
      image: '👩‍💼',
    },
  ];

  const caseStudies = [
    {
      client: 'TechNova Solutions',
      industry: 'Information Technology',
      logo: '💻',
      challenge: 'TechNova was experiencing high turnover among junior developers and struggling with team collaboration across distributed locations.',
      solution: 'We designed a comprehensive 3-month program combining technical mentorship, soft skills training, and virtual collaboration best practices.',
      results: [
        'Reduced attrition by 40% within 6 months',
        'Improved cross-team collaboration scores by 55%',
        'Increased project delivery speed by 30%',
      ],
      metrics: {
        trained: '120+ Employees',
        duration: '3 Months',
        satisfaction: '4.8/5',
      },
    },
    {
      client: 'MegaMart Retail Chain',
      industry: 'Retail & E-commerce',
      logo: '🛒',
      challenge: 'MegaMart needed to upskill 500+ store managers and sales staff to deliver consistent customer experiences across 50 locations.',
      solution: 'Implemented a blended learning program with online modules, in-person workshops, and on-floor coaching for customer service excellence.',
      results: [
        'Customer satisfaction increased from 3.2 to 4.5 stars',
        'Sales conversion rates improved by 35%',
        'Employee engagement scores rose by 45%',
      ],
      metrics: {
        trained: '500+ Staff',
        duration: '4 Months',
        satisfaction: '4.7/5',
      },
    },
    {
      client: 'Precision Manufacturing Ltd',
      industry: 'Manufacturing',
      logo: '🏭',
      challenge: 'High workplace incident rates and quality issues were impacting production efficiency and employee morale.',
      solution: 'Delivered comprehensive safety training, Six Sigma certification programs, and supervisory leadership development.',
      results: [
        'Workplace incidents reduced by 60%',
        'Quality defects decreased by 45%',
        'Production efficiency increased by 25%',
      ],
      metrics: {
        trained: '300+ Employees',
        duration: '6 Months',
        satisfaction: '4.9/5',
      },
    },
  ];

  const clientLogos = ['🏢', '🏦', '🏭', '🏥', '🎓', '🛒', '💼', '⚙️', '📱', '🚀', '💡', '🌐'];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Real results from real organizations. Discover how we've helped companies transform their workforce and achieve measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-slate-600">Professionals Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-slate-600">Corporate Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.8/5</div>
              <div className="text-slate-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the organizations we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-200"
              >
                <Quote className="h-10 w-10 text-blue-600 mb-4 opacity-50" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                <div className="flex items-center border-t border-slate-300 pt-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600 font-semibold">{testimonial.company}</div>
                    <div className="text-xs text-slate-500">{testimonial.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Detailed Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              In-depth stories of transformation, challenges overcome, and measurable results achieved
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-6xl mb-4">{study.logo}</div>
                      <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                      <p className="text-blue-200 mb-6">{study.industry}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="text-sm">{study.metrics.trained}</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        <span className="text-sm">{study.metrics.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 mr-2 fill-current" />
                        <span className="text-sm">{study.metrics.satisfaction} Rating</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        The Challenge
                      </h4>
                      <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Our Solution
                      </h4>
                      <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                        Measurable Results
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                            <p className="text-sm text-slate-700 font-medium">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              We're proud to partner with industry leaders across sectors
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors"
              >
                <span className="text-4xl">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the organizations that have transformed their workforce with ElevateTraining
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Transformation
          </button>
        </div>
      </section>
    </div>
  );
}
