import { useState } from 'react';
import { EXPERIENCES } from "../constants";

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="Experience" className="bg-gray-50 py-12">
      <h1 className="my-12 mb-20 text-center text-4xl font-semibold text-gray-800">Experience</h1>
      <div className="relative max-w-7xl ml-40 px-4 sm:px-6 lg:px-8">
        {/* Vertical Timeline Line */}
        <div className="absolute top-0 left-10 h-full border-l-2 border-gray-300"></div>
        
        {EXPERIENCES.map((experience, index) => {
          // Split description by new lines to get individual pointers
          const descriptionLines = experience.description.split("\n");
          return (
            <div key={index} className="mb-12 flex justify-start relative">
              {/* Circular marker on top of the line */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-gray-600 rounded-full shadow-lg"></div>
              
              {/* Experience details */}
              <div className="w-full lg:w-5/6 pl-16 tracking-tighter justify-center">
                {/* Title with company, location, and period */}
                <p className="text-m mb-5 flex items-center text-gray-600">
                  <span className="text-gray-700 font-semibold">{experience.role}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-500">{experience.company}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-500">{experience.location}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-500">{experience.year}</span>
                </p>

                <ul className="list-none mb-4 text-gray-700 space-y-2 pl-6">
                  {/* Show the first two pointers with a hyphen or custom symbol */}
                  {descriptionLines.slice(0, 2).map((line, i) => (
                    <li key={i} className="text-m leading-6">
                      <span className="text-gray-500">-</span> {line}
                    </li>
                  ))}
                  {expanded[index] ? (
                    // Show the rest of the pointers with a hyphen if expanded
                    descriptionLines.slice(2).map((line, i) => (
                      <li key={i} className="text-m leading-6">
                        <span className="text-gray-500">-</span> {line}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm leading-6">
                      <span className="text-gray-500">-</span> ...
                    </li> // Show ellipsis with hyphen when not expanded
                  )}
                </ul>

                <button
                  onClick={() => handleToggle(index)}
                  className="text-sm text-blue-600 hover:text-blue-700 transition duration-200"
                >
                  {expanded[index] ? "Show less" : "Show more"}
                </button>
                
                <div className="mt-4">
                  {experience.technologies.length > 0 && experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-2 rounded bg-gray-700 px-2 py-1 text-sm font-medium text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
