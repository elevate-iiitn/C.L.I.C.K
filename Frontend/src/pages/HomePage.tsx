import { ArrowRight, Users, Award, TrendingUp, CheckCircle, Star, BarChart } from 'lucide-react';
import { TestimonialsColumn } from "../components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

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
      text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Briana Patton",
      role: "Operations Manager",
    },
    {
      text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Bilal Ahmed",
      role: "IT Manager",
    },
    {
      text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Saman Malik",
      role: "Customer Support Lead",
    },
    {
      text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Omar Raza",
      role: "CEO",
    },
    {
      text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Zainab Hussain",
      role: "Project Manager",
    },
    {
      text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Aliza Khan",
      role: "Business Analyst",
    },
    {
      text: "Our business functions improved with a user-friendly design and positive customer feedback.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Farhan Siddiqui",
      role: "Marketing Director",
    },
    {
      text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Sana Sheikh",
      role: "Sales Manager",
    },
    {
      text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Hassan Ali",
      role: "E-commerce Manager",
    },
  ];


  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-4xl justify-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight">
                  <span className="text-white">"We are committed <br /> to building your <br /></span>
                  <span className="text-yellow-400">career</span>
                  <span className="text-white"> and </span>
                  <span className="text-white"> <br></br>amplifying <br /> your </span>
                  <span className="text-yellow-400">growth </span>
                  <span className="text-white">."</span>  
                </h1>
                
            <p className="text-xl md:text-2xl font-semibold text-white/90 mb-8">
                  – Krishna & Sameer, Founders of CLICK
                </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
       <img
  src="/images/krishna.png"
  alt="Krishna"
  className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] object-contain"
/>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose C.L.I.C.K</h2>
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

      <section className="bg-background my-20 relative">
        <div className="container z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
            <div className="flex justify-center">
              <div className="border py-1 px-4 rounded-lg">Testimonials</div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
              What our users say
            </h2>
            <p className="text-center mt-5 opacity-75">
              See what our customers have to say about us.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Team?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 50+ leading organizations that trust C.L.I.C.K for their workforce development needs
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
