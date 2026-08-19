import { Code2, Brain, GraduationCap, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([]);
  const sectionRef = useRef(null);

  // Create particles
  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    let animationId: number;
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y + particle.speed,
          x: particle.x + (Math.sin(Date.now() * 0.001 * particle.speed) * 0.1),
          ...(particle.y > 100 && { y: -10, x: Math.random() * 100 }),
        }))
      );
      animationId = requestAnimationFrame(animateParticles);
    };
    animateParticles();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Track mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -inset-[10px] opacity-30 dark:opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.3) 0%, 
              rgba(147, 51, 234, 0.3) 50%, 
              rgba(236, 72, 153, 0.1) 100%)`,
            transition: 'background 0.3s ease',
          }}
        />
        
        {/* Animated Particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 dark:opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transition: 'all 0.3s linear',
            }}
          />
        ))}

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20 animate-pulse delay-700" />
      </div>

      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px),
                           linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.2s ease',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate <span className="font-semibold text-blue-500 relative inline-block group">
                4th-year IT Engineering student
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span> with a unique blend of expertise in both <span className="font-semibold text-purple-500 relative inline-block group">
                Full Stack Development
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span> and{' '}
              <span className="font-semibold text-pink-500 relative inline-block group">
                Artificial Intelligence
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey started with building scalable web applications using the <span className="font-semibold">MERN Stack</span>,
              and I've evolved to integrate cutting-edge ML models into production-ready applications. I believe in the power
              of combining intelligent algorithms with seamless user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <Code2 className="text-blue-500 mb-2 group-hover:rotate-12 transition-transform duration-300" size={32} />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Full Stack</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">MERN Expert</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group">
                <Brain className="text-purple-500 mb-2 group-hover:rotate-12 transition-transform duration-300" size={32} />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">AI & ML</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Deep Learning</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-lg transform hover:scale-102 transition-all duration-300">
              <div className="flex items-start gap-3">
                <Sparkles className="text-blue-500 flex-shrink-0 mt-1 animate-pulse" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Currently Learning</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Generative AI, Advanced Communication Skills, and Real-world Project Development
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-xl p-6 border border-purple-200 dark:border-purple-800 hover:shadow-lg transform hover:scale-102 transition-all duration-300">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-purple-500 flex-shrink-0 mt-1 animate-bounce" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Bachelor of Technology in Information Technology</span>
                    <br />
                    3rd Year Student | CGPA: 7.8/10
                    <br />
                    Relevant Coursework: Data Structures & Algorithms, Machine Learning, Data Analysis, Business Intelligence (BI)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes to your global CSS or use inline style tag */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}