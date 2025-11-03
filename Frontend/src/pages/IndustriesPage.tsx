import { Code, Building2, Heart, Factory, GraduationCap, ShoppingCart, Landmark, Plane } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: string) => void;
}

export default function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const industries = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      name: 'Information Technology',
      description: 'Empowering tech teams with leadership, agile methodologies, and emerging technology skills',
      challenges: [
        'Rapid technology changes',
        'Remote team management',
        'Technical to leadership transitions',
      ],
      solutions: [
        'Technical leadership programs',
        'Agile & DevOps training',
        'Digital transformation workshops',
      ],
      caseStudy: 'Helped a leading software company improve team velocity by 40% through Agile training',
    },
    {
      icon: <Building2 className="h-12 w-12 text-emerald-600" />,
      name: 'BFSI (Banking & Finance)',
      description: 'Building compliance-ready, customer-focused teams in the financial sector',
      challenges: [
        'Regulatory compliance',
        'Digital banking transformation',
        'Customer service excellence',
      ],
      solutions: [
        'Compliance & ethics training',
        'Customer relationship management',
        'Financial technology upskilling',
      ],
      caseStudy: 'Trained 500+ banking professionals on digital banking, resulting in 30% improvement in customer satisfaction',
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      name: 'Healthcare',
      description: 'Enhancing patient care through staff development and clinical excellence',
      challenges: [
        'Patient safety protocols',
        'Healthcare technology adoption',
        'Staff burnout management',
      ],
      solutions: [
        'Clinical communication skills',
        'Healthcare leadership programs',
        'Patient experience training',
      ],
      caseStudy: 'Improved patient satisfaction scores by 25% through communication skills training at a multi-specialty hospital',
    },
    {
      icon: <Factory className="h-12 w-12 text-orange-600" />,
      name: 'Manufacturing',
      description: 'Driving operational excellence and safety in production environments',
      challenges: [
        'Workplace safety',
        'Quality management',
        'Lean manufacturing adoption',
      ],
      solutions: [
        'Six Sigma & Lean training',
        'Safety & compliance programs',
        'Supervisory skills development',
      ],
      caseStudy: 'Reduced workplace incidents by 60% through comprehensive safety training at an automotive plant',
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-purple-600" />,
      name: 'Education',
      description: 'Empowering educators with modern teaching methodologies and leadership skills',
      challenges: [
        'Digital classroom management',
        'Student engagement',
        'Administrative leadership',
      ],
      solutions: [
        'Teaching methodology workshops',
        'Educational technology training',
        'Academic leadership programs',
      ],
      caseStudy: 'Enhanced teaching effectiveness for 200+ faculty members at a leading university',
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-pink-600" />,
      name: 'Retail & E-commerce',
      description: 'Building customer-centric teams that drive sales and loyalty',
      challenges: [
        'Omnichannel customer experience',
        'Sales team performance',
        'Inventory & supply chain',
      ],
      solutions: [
        'Customer service excellence',
        'Sales & negotiation skills',
        'Visual merchandising training',
      ],
      caseStudy: 'Boosted sales conversion rates by 35% through sales training at a retail chain',
    },
    {
      icon: <Landmark className="h-12 w-12 text-slate-600" />,
      name: 'Government & PSU',
      description: 'Modernizing public sector workforce with contemporary skills',
      challenges: [
        'Process modernization',
        'Citizen service delivery',
        'Digital governance',
      ],
      solutions: [
        'E-governance training',
        'Public service excellence',
        'Change management programs',
      ],
      caseStudy: 'Trained 1000+ government officials on digital initiatives and process optimization',
    },
    {
      icon: <Plane className="h-12 w-12 text-cyan-600" />,
      name: 'Hospitality & Tourism',
      description: 'Creating memorable guest experiences through exceptional service',
      challenges: [
        'Service quality consistency',
        'Seasonal workforce training',
        'Guest satisfaction',
      ],
      solutions: [
        'Hospitality excellence training',
        'Service recovery programs',
        'Leadership in hospitality',
      ],
      caseStudy: 'Elevated guest satisfaction scores from 3.8 to 4.6 stars through service training at a hotel chain',
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Deep industry expertise to deliver training programs that address your sector's unique challenges and opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tailored Solutions for Every Sector</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand that each industry has distinct challenges, regulations, and success factors.
              Our training programs are customized to meet your sector's specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-slate-200"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{industry.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900">{industry.name}</h3>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">{industry.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                        Key Challenges
                      </h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start">
                            <span className="text-red-500 mr-2">●</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                        Our Solutions
                      </h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start">
                            <span className="text-emerald-500 mr-2">✓</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 rounded p-4">
                    <p className="text-sm font-semibold text-slate-900 mb-1">Success Story</p>
                    <p className="text-sm text-slate-700 italic">{industry.caseStudy}</p>
                  </div>
                </div>

                <div className="bg-slate-50 px-8 py-4 border-t border-slate-200">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                  >
                    Request Industry-Specific Training →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Industry Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              We bring deep domain knowledge and proven methodologies to every engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Industry-Specific Content</h3>
              <p className="text-slate-600">
                Training materials and case studies drawn from real industry scenarios
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sector Specialist Trainers</h3>
              <p className="text-slate-600">
                Facilitators with extensive experience working in your industry
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Benchmarking & Best Practices</h3>
              <p className="text-slate-600">
                Insights from leading organizations in your sector
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We work across diverse sectors. Let's discuss how we can create customized training solutions
            for your organization's unique needs.
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
