import { Crown, MessageSquare, Cpu, Users, Shield, TrendingUp, Clock, Download, Play } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const programs = [
    {
      icon: <Crown className="h-10 w-10 text-blue-600" />,
      category: 'Leadership Development',
      description: 'Transform managers into inspiring leaders who drive organizational success',
      programs: [
        {
          title: 'Executive Leadership Program',
          duration: '3 Months',
          audience: 'C-Suite & Senior Leaders',
          outcomes: ['Strategic thinking', 'Change management', 'Stakeholder management'],
          mode: 'Hybrid',
        },
        {
          title: 'Middle Management Excellence',
          duration: '6 Weeks',
          audience: 'Team Leads & Managers',
          outcomes: ['Team building', 'Performance management', 'Conflict resolution'],
          mode: 'Online/Offline',
        },
        {
          title: 'First-Time Manager Bootcamp',
          duration: '4 Weeks',
          audience: 'New Managers',
          outcomes: ['Delegation skills', 'Time management', 'Feedback techniques'],
          mode: 'Blended',
        },
      ],
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-emerald-600" />,
      category: 'Soft Skills Training',
      description: 'Enhance communication, teamwork, and emotional intelligence across teams',
      programs: [
        {
          title: 'Advanced Communication Skills',
          duration: '2 Weeks',
          audience: 'All Employees',
          outcomes: ['Presentation skills', 'Active listening', 'Persuasive communication'],
          mode: 'Workshops',
        },
        {
          title: 'Emotional Intelligence at Work',
          duration: '3 Weeks',
          audience: 'Managers & Teams',
          outcomes: ['Self-awareness', 'Empathy', 'Relationship management'],
          mode: 'Interactive Sessions',
        },
        {
          title: 'Team Collaboration & Dynamics',
          duration: '2 Weeks',
          audience: 'Cross-functional Teams',
          outcomes: ['Trust building', 'Effective collaboration', 'Conflict resolution'],
          mode: 'Experiential',
        },
      ],
    },
    {
      icon: <Cpu className="h-10 w-10 text-purple-600" />,
      category: 'Technical Training',
      description: 'Keep your workforce ahead with cutting-edge technical skills development',
      programs: [
        {
          title: 'Digital Transformation Essentials',
          duration: '4 Weeks',
          audience: 'IT & Business Teams',
          outcomes: ['Cloud computing basics', 'AI/ML fundamentals', 'Data analytics'],
          mode: 'Online',
        },
        {
          title: 'Agile & Scrum Mastery',
          duration: '2 Weeks',
          audience: 'Project Teams',
          outcomes: ['Agile methodologies', 'Sprint planning', 'Scrum ceremonies'],
          mode: 'Certified Program',
        },
        {
          title: 'Data-Driven Decision Making',
          duration: '3 Weeks',
          audience: 'Analysts & Managers',
          outcomes: ['Data visualization', 'Analytics tools', 'Insight generation'],
          mode: 'Hands-on Labs',
        },
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-orange-600" />,
      category: 'Team Development',
      description: 'Build high-performing teams that drive organizational excellence',
      programs: [
        {
          title: 'High-Performance Team Building',
          duration: '2 Days',
          audience: 'Department Teams',
          outcomes: ['Team cohesion', 'Trust exercises', 'Goal alignment'],
          mode: 'Offsite/Onsite',
        },
        {
          title: 'Cross-Cultural Communication',
          duration: '1 Week',
          audience: 'Global Teams',
          outcomes: ['Cultural awareness', 'Virtual collaboration', 'Inclusive practices'],
          mode: 'Virtual',
        },
        {
          title: 'Innovation & Creative Thinking',
          duration: '3 Days',
          audience: 'All Levels',
          outcomes: ['Design thinking', 'Problem-solving', 'Creative workshops'],
          mode: 'Interactive',
        },
      ],
    },
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      category: 'Compliance & Safety',
      description: 'Essential compliance training to meet regulatory requirements',
      programs: [
        {
          title: 'Workplace Safety & POSH',
          duration: '1 Day',
          audience: 'All Employees',
          outcomes: ['Safety protocols', 'Legal compliance', 'Reporting mechanisms'],
          mode: 'Mandatory Training',
        },
        {
          title: 'Cybersecurity Awareness',
          duration: '2 Days',
          audience: 'All Staff',
          outcomes: ['Security best practices', 'Phishing prevention', 'Data protection'],
          mode: 'Online Modules',
        },
        {
          title: 'Ethics & Corporate Governance',
          duration: '1 Week',
          audience: 'Leadership Teams',
          outcomes: ['Ethical decision-making', 'Compliance frameworks', 'Risk management'],
          mode: 'Certification',
        },
      ],
    },
  ];

  const deliveryModes = [
    { mode: 'In-Person Workshops', description: 'Engaging face-to-face sessions at your office' },
    { mode: 'Virtual Training', description: 'Live online sessions with full interactivity' },
    { mode: 'Hybrid Programs', description: 'Blend of online and offline for flexibility' },
    { mode: 'Self-Paced Learning', description: 'Access content anytime, anywhere' },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Training Programs & Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive learning solutions designed to elevate your workforce and drive measurable business results
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryModes.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-600">
                <h3 className="font-bold text-slate-900 mb-2">{item.mode}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {programs.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <div className="mr-4">{category.icon}</div>
              <div>
                <h2 className="text-4xl font-bold text-slate-900">{category.category}</h2>
                <p className="text-lg text-slate-600 mt-2">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.programs.map((program, programIndex) => (
                <div
                  key={programIndex}
                  className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-6 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{program.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-slate-700">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        <span><strong>Duration:</strong> {program.duration}</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <Users className="h-4 w-4 mr-2 text-blue-600" />
                        <span><strong>For:</strong> {program.audience}</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                        <span><strong>Mode:</strong> {program.mode}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Learning Outcomes:</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-700">
                          <span className="text-emerald-600 mr-2">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                        <Download className="h-4 w-4 inline mr-1" />
                        Brochure
                      </button>
                      <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
                        <Play className="h-4 w-4 inline mr-1" />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Custom Training Solutions</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Every organization is unique. We design tailored training programs that address your specific
              challenges, culture, and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">Needs Assessment</h3>
              <p className="text-blue-100">
                We analyze your organization's specific requirements and skill gaps
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Custom Design</h3>
              <p className="text-blue-100">
                Programs built from scratch to align with your goals and culture
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Measurable Impact</h3>
              <p className="text-blue-100">
                Track progress with detailed analytics and ROI reporting
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Discuss Custom Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
