import { PROJECTS } from "../constants"; // Importing the projects data

const Projects = () => {
  return (
    <div className="my-16 px-4">
      <h2 className="text-center text-4xl font-semibold text-white-900 mb-16">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-4 gap-10">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#29262b] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-12 object-cover rounded-t-lg"/>
            
            <div className="p-6">
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white-400 mb-2">{project.title}</h3>
              
              {/* Project Description */}
              <p className="text-sm text-white-100 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs text-neutral-700 bg-neutral-100 rounded-full px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
