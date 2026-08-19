import { Code2, Brain, Database, Wrench } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingIcons, setFloatingIcons] = useState<Array<{ x: number; y: number; icon: string; delay: number }>>([]);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'MERN Stack',
      icon: <Code2 size={32} />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'React.js', level: 95 },
        { name: 'Node.js', level: 88 },
        { name: 'REST APIs', level: 92 },
        { name: 'JWT Auth', level: 87 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={32} />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow/Keras', level: 85 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'NLP', level: 82 },
        { name: 'Computer Vision', level: 80 },
        { name: 'Pandas & NumPy', level: 92 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={32} />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 78 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={32} />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 90 },
        { name: 'Jupyter Notebook', level: 88 },
        { name: 'Linux', level: 82 },
      ],
    },
  ];

  // Create floating icons
  useEffect(() => {
    const icons = ['⚛️', '🐍', '🤖', '💻', '🚀', '📊', '🔧', '⚙️', '🛠️', '📈'];
    const newFloatingIcons = Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[i % icons.length],
      delay: Math.random() * 5,
    }));
    setFloatingIcons(newFloatingIcons);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-20 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.2) 0%, 
              rgba(147, 51, 234, 0.2) 40%, 
              rgba(236, 72, 153, 0.1) 80%,
              transparent 100%)`,
          }}
        />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-5 dark:opacity-10 animate-float"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            {item.icon}
          </div>
        ))}

        {/* Animated Shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-5 dark:opacity-10 animate-pulse delay-700" />
      </div>

      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full animate-slide-in"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`${category.bgColor} rounded-2xl p-8 border ${category.borderColor} 
                hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 
                relative overflow-hidden group animate-slide-in-up`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Card shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white transform group-hover:rotate-12 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="animate-slide-in-right" style={{ animationDelay: `${skillIdx * 0.05}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIdx * 0.1}s`,
                        }}
                      >
                        {/* Progress bar shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'Tailwind CSS', 'GraphQL', 'PyTorch', 'OpenCV'].map(
              (tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium 
                    text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 
                    hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 
                    dark:hover:text-blue-400 hover:shadow-md transition-all duration-200 
                    cursor-default active:scale-95 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.03}s` }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 5rem;
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}