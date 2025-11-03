import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const serviceItems = [
    { id: 'courses', label: 'Courses', active: true },
    { id: 'seminars', label: 'Seminars', comingSoon: true },
    { id: 'events', label: 'Live Events', comingSoon: true },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-950/60 backdrop-blur-xl shadow-lg shadow-cyan-500/10' 
            : 'bg-slate-950/40 backdrop-blur-md'
        }`}
        style={{
          height: isScrolled ? '64px' : '72px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="relative">
                <BookOpen className="h-8 w-8 text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text transition-transform duration-300 group-hover:scale-110" 
                  style={{ stroke: 'url(#logo-gradient)' }}
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent tracking-tight">
                CLICK
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`px-4 py-2 rounded-lg text-sm font-medium tracking-tight transition-all duration-300 flex items-center gap-1 ${
                          currentPage === item.id || currentPage === 'courses'
                            ? 'text-white relative'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        {(currentPage === item.id || currentPage === 'courses') && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 rounded-full shadow-lg shadow-cyan-500/50" />
                        )}
                      </button>
                      
                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-56 transition-all duration-600 ${
                          isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-2xl shadow-cyan-500/10 overflow-hidden">
                          {serviceItems.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => {
                                if (!service.comingSoon) {
                                  onNavigate(service.id);
                                  setIsServicesOpen(false);
                                }
                              }}
                              className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 flex items-center justify-between ${
                                service.comingSoon
                                  ? 'text-slate-500 cursor-not-allowed'
                                  : currentPage === service.id
                                  ? 'text-white bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-l-2 border-cyan-400'
                                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                              }`}
                            >
                              <span>{service.label}</span>
                              {service.comingSoon && (
                                <span className="text-xs px-2 py-0.5 bg-slate-800 rounded-full text-slate-400">Soon</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium tracking-tight transition-all duration-300 relative group ${
                        currentPage === item.id
                          ? 'text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {currentPage === item.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 rounded-full shadow-lg shadow-cyan-500/50" />
                      )}
                      {currentPage !== item.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 rounded-full shadow-lg shadow-cyan-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      )}
                    </button>
                  )}
                </div>
              ))}
              
              {/* Get Started Button */}
              {/* <button
                onClick={() => onNavigate('contact')}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white transition-colors duration-300 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-slate-950/95 backdrop-blur-2xl z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.id}>
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium tracking-tight transition-all duration-300 flex items-center justify-between ${
                      currentPage === item.id || currentPage === 'courses'
                        ? 'text-white bg-gradient-to-r from-cyan-500/10 to-violet-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileServicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 mt-2 space-y-1">
                      {serviceItems.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            if (!service.comingSoon) {
                              onNavigate(service.id);
                              setIsMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-300 flex items-center justify-between ${
                            service.comingSoon
                              ? 'text-slate-500 cursor-not-allowed'
                              : currentPage === service.id
                              ? 'text-white bg-slate-800/70'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                          }`}
                        >
                          <span>{service.label}</span>
                          {service.comingSoon && (
                            <span className="text-xs px-2 py-0.5 bg-slate-800 rounded-full text-slate-500">Soon</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium tracking-tight transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-cyan-500/10 to-violet-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
          
          <button
            onClick={() => {
              onNavigate('contact');
              setIsMenuOpen(false);
            }}
            className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 backdrop-blur-sm text-white rounded-lg text-base font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}