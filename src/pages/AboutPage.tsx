import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Arjun Mehta',
      role: 'Founder & CEO',
      image: '👨‍💼',
      credentials: 'PhD in Organizational Psychology, 20+ years experience',
      description: 'Former VP of Learning at Fortune 500 companies',
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Training',
      image: '👩‍💼',
      credentials: 'Certified Executive Coach, MBA from IIM',
      description: 'Specializes in leadership and management development',
    },
    {
      name: 'Vikram Singh',
      role: 'Technical Training Lead',
      image: '👨‍🏫',
      credentials: 'Ex-Microsoft, Google certified trainer',
      description: 'Expert in digital transformation and technical upskilling',
    },
    {
      name: 'Anita Desai',
      role: 'Soft Skills Specialist',
      image: '👩‍🏫',
      credentials: 'Communication expert, TEDx speaker',
      description: 'Masters in organizational communication and team dynamics',
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every training program we deliver',
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Empathy',
      description: 'Understanding unique challenges to create tailored solutions',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Results-Driven',
      description: 'Focused on measurable outcomes and tangible business impact',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'Working closely with clients as partners in growth',
    },
  ];

  const achievements = [
    '20+ Industry Awards & Recognitions',
    'ISO 9001:2015 Certified Training Provider',
    'SHRM Preferred Training Partner',
    'National HRD Network Member',
    'Featured in Top 10 Corporate Training Companies',
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About ElevateTraining</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We are a passionate team of learning and development professionals dedicated to transforming
              organizational performance through innovative, outcome-focused training solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Founded in 2010, ElevateTraining emerged from a simple observation: traditional corporate
                  training was failing to deliver real, measurable results. Organizations were investing
                  heavily in training programs, but employees returned to work unchanged.
                </p>
                <p>
                  We set out to change that. By combining cutting-edge learning science, practical business
                  insights, and technology-enabled delivery, we created a new model of corporate training that
                  actually works.
                </p>
                <p>
                  Today, we've trained over 10,000 professionals across 50+ organizations, delivering an average
                  95% satisfaction rate and demonstrable improvements in business metrics. Our approach is
                  experiential, personalized, and relentlessly focused on outcomes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-slate-700">Professionals Trained</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-slate-700">Corporate Clients</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-slate-700">Satisfaction Rate</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-slate-700">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                To empower organizations with world-class training solutions that unlock human potential,
                drive performance excellence, and create lasting competitive advantages in today's dynamic
                business environment.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Eye className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                To be India's most trusted and innovative corporate training partner, recognized for
                transforming workforces and setting new standards in learning and development excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Industry veterans committed to your organization's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-7xl">
                  {member.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 mb-2">{member.credentials}</p>
                  <p className="text-sm text-slate-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              Our commitment to excellence has been recognized by leading industry bodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center bg-slate-50 rounded-lg p-4 border-l-4 border-blue-600"
              >
                <Award className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Training Philosophy</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            We believe that effective training is experiential, personalized, and outcome-driven.
            Our programs are designed not just to transfer knowledge, but to create lasting behavioral
            change that drives measurable business results. We partner with organizations to understand
            their unique challenges and co-create solutions that work.
          </p>
        </div>
      </section>
    </div>
  );
}
