// src/components/Projects.js

import { PROJECTS } from "../constants"; // Importing the projects data

const Projects = () => {
  return (
    <div id="Projects" className="bg-[#FF000FF] border-b border-neutral-800 py-12 my-2">
      <h2 className="text-center text-4xl font-semibold text-white mb-16 tracking-wide">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl shadow-lg bg-gradient-to-r from-[#003366] via-[#0077dd] to-[#3399ff] overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:bg-[#29262b]"
          >
            {/* Project Info Container */}
            <div className="p-6 transition-all duration-300">
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-white">
                {project.title}
              </h3>
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs text-neutral-800 bg-neutral-200 rounded-full px-3 py-1 font-medium shadow-sm hover:bg-[#61DAFB] hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description - Hidden initially, shown on hover */}
            <div
              className="absolute inset-0 flex justify-center items-center p-6 bg-black bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            >
              <ul className="text-sm text-white text-left text-justify space-y-2">
                {project.description.split('. ').map((point, idx) => (
                  <li key={idx} className="list-disc pl-5">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
