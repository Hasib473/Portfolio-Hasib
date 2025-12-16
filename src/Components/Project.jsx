import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectimg from '../assets/hero.png'
import emergency from '../assets/images.png'

const projects = [
  {
    title: 'App Store',
    description: 'A responsive React web application to browse, search, install, and manage mobile apps. Features live search, sorting, charts, and localStorage support.',
    image: projectimg,
    tech: ['React', 'JS', 'Tailwind', 'HTML','daisyUI'],
    liveUrl: 'https://heroapps-bd.netlify.app/',
    githubUrl: 'https://github.com/Hasib473/Hero-App'
  },
  {
    title: 'Customer Support Portal',
    description: 'A Customer Support Portal where admin can Aprove or Reject customer requests and can complete the task by marking it as resolved.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'js', 'Tailwind', 'HTML ','daisyUI'],
    liveUrl: 'https://customer-service473.netlify.app/',
    githubUrl: '#'
  },
  {
    title: 'Emergency Hotline Service',
    description: 'A Platform for emergency services to manage and respond to urgent calls all number will availbale on the site and here will be call system using the default coin.',
    image: emergency,
    tech: ['JavaScript', 'Tailwind', 'HTML','daisyUI','CSS'],
    liveUrl: 'https://hasib473.github.io/Emergency-Hotline/',
    githubUrl: 'https://github.com/Hasib473/Emergency-Hotline'
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 w-11/12 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-orange-500">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-3"></div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A collection of projects that showcase my skills and passion for creating exceptional digital experiences
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-4">
              <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-600 mb-3 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.liveUrl}
                  className="text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.githubUrl}
                  className="text-slate-600 hover:text-slate-700 transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
