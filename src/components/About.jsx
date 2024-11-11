import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpeg";

const About = () => {
  const paragraphs = ABOUT_TEXT.split("\n\n");

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 mx-30 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-5 justify-center lg:justify-start">
            {paragraphs.map((para, index) => (
                <p className="my-2 mx-20 max-w-xl py-6" key={index}>{para}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
