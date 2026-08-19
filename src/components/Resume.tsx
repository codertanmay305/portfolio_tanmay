import { Download, FileText, Award, Code, Briefcase } from 'lucide-react';

export default function Resume() {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Technical Skills',
      description: 'Proficient in MERN Stack, Python, AI/ML frameworks',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Experience',
      description: '2 internships and research positions',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Award size={24} />,
      title: 'Achievements',
      description: 'Multiple hackathon participation  and certifications',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FileText size={24} />,
      title: 'Projects',
      description: '5+ full-stack and AI/ML projects',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my resume to learn more about my qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Main Card */}
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800 shadow-2xl">
            
            {/* Icon + Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                <FileText className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Professional Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive overview of my skills, experience, and achievements
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white mb-3`}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Download + View Buttons */}
            <div className="text-center space-y-4">
              
              {/* Download Button */}
              <a
                href="/resume.pdf"
                download="Tanmay_Shete_Resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Download size={24} />
                Download Resume (PDF)
              </a>

              {/* View Button */}
              <div>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                       setTimeout(() => window.focus(), 1000);
                   }}
                  >
                  View Resume
                  </a>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Last updated: April 2026 • 2 pages
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                7.8/10
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                CGPA
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                20+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>

            <div className="text-center p-6 bg-pink-50 dark:bg-pink-900/20 rounded-xl border border-pink-200 dark:border-pink-800">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                4+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Internships
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}