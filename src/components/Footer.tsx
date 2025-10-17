import { BookOpen, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">ElevateTraining</span>
            </div>
            <p className="text-sm mb-4">
              Empowering teams and enhancing performance through world-class corporate training solutions.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Training Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-blue-400 transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-blue-400 transition-colors">
                  Success Stories
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Leadership Development</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Soft Skills Training</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Technical Training</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Custom Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>contact@elevatetraining.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 ElevateTraining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
