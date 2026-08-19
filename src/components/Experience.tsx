import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'TechStart Solutions',
      location: 'Remote',
      period: 'Jun 2024 - Present',
      type: 'Internship',
      description: [
        'Developed and maintained 5+ full-stack web applications using MERN stack, serving 10,000+ users',
        'Implemented RESTful APIs and integrated third-party services, reducing response time by 40%',
        'Collaborated with cross-functional teams using Agile methodology and Git version control',
        'Optimized database queries and implemented caching strategies, improving performance by 50%',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI/ML Research Intern',
      company: 'University Research Lab',
      location: 'On-site',
      period: 'Jan 2024 - May 2024',
      type: 'Research',
      description: [
        'Conducted research on deep learning models for computer vision applications with 95%+ accuracy',
        'Implemented and trained CNN architectures using TensorFlow and PyTorch on large datasets',
        'Published research paper on image classification techniques in IEEE conference',
        'Mentored junior students in machine learning fundamentals and Python programming',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Open Source Contributor',
      company: 'GSSoC & Hacktoberfest',
      location: 'Remote',
      period: 'Oct 2023 - Dec 2023',
      type: 'Open Source',
      description: [
        'Contributed to 15+ open-source projects with 50+ merged pull requests',
        'Fixed critical bugs and implemented new features for popular MERN stack repositories',
        'Improved documentation and wrote comprehensive test cases for better code coverage',
        'Collaborated with global developers and maintained code quality standards',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Web Development Intern',
      company: 'StartupHub India',
      location: 'Hybrid',
      period: 'Jun 2023 - Sep 2023',
      type: 'Internship',
      description: [
        'Built responsive front-end interfaces using React.js and modern CSS frameworks',
        'Integrated REST APIs and handled state management using Redux and Context API',
        'Participated in daily stand-ups, code reviews, and sprint planning meetings',
        'Delivered 3 client projects on time with 100% client satisfaction',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and contributions to the tech community
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 flex justify-start md:justify-end">
                  <div
                    className={`w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                      idx % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.color} mb-3`}
                    >
                      {exp.type}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-blue-500 dark:text-blue-400 mb-3">
                      {exp.company}
                    </p>

                    <div className={`flex ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'} gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className={`space-y-2 text-gray-700 dark:text-gray-300 text-sm ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                      {exp.description.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className={`${idx % 2 === 0 ? 'md:order-2' : ''}`}>•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 md:translate-y-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900`}>
                    <Briefcase className="text-white" size={20} />
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
