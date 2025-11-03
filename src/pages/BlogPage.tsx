import React, { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neutral-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neutral-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div 
        className={`relative z-10 max-w-2xl w-full text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Logo placeholder */}
        <div className="mb-12 flex justify-center">
          <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-sm">
            <div className="w-8 h-8 border-2 border-neutral-50 rounded-lg"></div>
          </div>
        </div>

        {/* Animated loading indicator */}
        <div className="mb-8 flex justify-center">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 200}ms`,
                  animationDuration: '1.4s'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-semibold text-neutral-900 mb-6 tracking-tight">
          We're building<br />something amazing
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-md mx-auto leading-relaxed">
          Our platform is currently under development. Check back soon.
        </p>

        {/* Footer info */}
        <div className="mt-16 text-sm text-neutral-400">
          Expected launch: Q1 2026
        </div>
      </div>

      {/* Floating element animation */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="w-3 h-3 bg-neutral-400 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
      </div>
    </div>
  );
}