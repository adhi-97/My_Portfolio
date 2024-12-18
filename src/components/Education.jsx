import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div id="Education" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-white text-center text-4xl">Education</h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Year */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </div>

            {/* Degree and School */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {education.degree} -{" "}
                <span className="text-sm text-purple-100">{education.school}</span>
              </h6>
              <p className="mb-4 text-neutral-400">CGPA: {education.grade}</p>

              {/* Courses */}
              <div>
                <p className="font-semibold text-neutral-400 mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="mr-2 mt-2 rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-100"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
