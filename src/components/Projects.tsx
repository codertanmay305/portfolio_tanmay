import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, type MouseEvent } from 'react';

export default function Projects() {
  const projectContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollProjects = (offset: number) => {
    const container = projectContainerRef.current;
    if (container) {
      container.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const container = projectContainerRef.current;
    if (!container) return;
    isDragging.current = true;
    container.classList.add('cursor-grabbing');
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const container = projectContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    container.scrollLeft = scrollLeft.current - walk;
  };

  const endDrag = () => {
    isDragging.current = false;
    const container = projectContainerRef.current;
    if (container) {
      container.classList.remove('cursor-grabbing');
    }
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'MERN Stack',
      description:
        'Full-featured e-commerce platform with user authentication, product management, cart functionality, payment integration, and order tracking. Built with React, Node.js, Express, and MongoDB.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Sentiment Analysis System',
      category: 'AI & ML',
      description:
        'Advanced NLP-based sentiment analysis system for social media data. Uses LSTM networks and transformer models to analyze emotions and classify sentiments with 94% accuracy.',
      tech: ['Python', 'TensorFlow', 'NLTK', 'Transformers', 'Flask'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/sentiment-analysis',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Social Media Dashboard',
      category: 'MERN Stack',
      description:
        'Real-time social media analytics dashboard with post scheduling, engagement metrics, and user management. Features real-time updates using Socket.io and data visualization.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/social-dashboard',
      color: 'from-green-500 to-emerald-500',
    },
    
    {
      title: 'Image Classification CNN',
      category: 'AI & ML',
      description:
        'Deep learning image classifier using Convolutional Neural Networks for multi-class classification. Trained on 100K+ images with data augmentation achieving 96% validation accuracy.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/image-classifier',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Task Management System',
      category: 'MERN Stack',
      description:
        'Collaborative task management platform with team workspaces, real-time collaboration, file attachments, and progress tracking. Features drag-and-drop interface and notifications.',
      tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/task-manager',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'AI Chatbot with NLP',
      category: 'AI & ML',
      description:
        'Intelligent chatbot using natural language processing and deep learning. Implements intent classification, entity recognition, and context management for human-like conversations.',
      tech: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/ai-chatbot',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work in full-stack development and AI/ML
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-4 right-0 flex items-center gap-3 z-10">
            <button
              type="button"
              onClick={() => scrollProjects(-420)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollProjects(420)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            ref={projectContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(e) => {
              const container = projectContainerRef.current;
              if (!container) return;
              isDragging.current = true;
              startX.current = e.touches[0].pageX - container.offsetLeft;
              scrollLeft.current = container.scrollLeft;
            }}
            onTouchMove={(e) => {
              if (!isDragging.current) return;
              const container = projectContainerRef.current;
              if (!container) return;
              const x = e.touches[0].pageX - container.offsetLeft;
              const walk = (x - startX.current) * 1.2;
              container.scrollLeft = scrollLeft.current - walk;
            }}
            onTouchEnd={endDrag}
            className="scrollbar-hide overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 pb-4 cursor-grab"
            style={{ WebkitOverflowScrolling: 'touch', scrollPadding: '0 1rem' }}
          >
            {projects.map((project, idx) => (
              <article
                key={idx}
                className="snap-start min-w-[320px] sm:min-w-[360px] md:min-w-[420px] flex-shrink-0 group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
            Drag or swipe to explore projects. Use the arrows to move faster.
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
