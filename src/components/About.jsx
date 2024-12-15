import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpeg";

const About = () => {
  const paragraphs = ABOUT_TEXT.split("\n\n");

  return (
    <div id="about" className="border-b border-neutral-900 py-10">
      <h1 className="my-10 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 mx-30 lg:p-8">
          <div className="flex items-center pl-10 justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="mx-40 max-w-full font-light tracking-tighter text-justify text-center lg:text-left">
            {paragraphs.map((para, index) => (
                <p className="my-10 max-w-full py-6" key={index}>{para}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
