import { LANDINGPAGE_CONTENT } from "../constants";
import profilePic from "../assets/AKProfilePic.jpeg";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"; // Add icon packages

const LandingPage = () => {
  return (
    <div id="landingPage" className="border-b border-neutral-900 pb-20 my-0">
      <div className="flex flex-col lg:flex-row px-4 lg:px-16">
        {/* Left Section - Text */}
        <div className="w-full lg:w-2/3 pb-8 lg:pb-0">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-4xl font-thin tracking-tight text-center lg:text-left lg:text-6xl xl:text-7xl pb-8 xl:pt-10 leading-tight">
              Adarsh G Krishnan
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center lg:text-left">
              Software Engineer
            </span>
            <p className="my-6 max-w-xl py-4 font-light tracking-tighter text-justify text-center lg:text-left">
              {LANDINGPAGE_CONTENT}
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-6">
              {" "}
              Feel free to connect through:
              <br />
              <a
                href="https://www.linkedin.com/in/adarshgkrishnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600 hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/adhi-97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-800 hover:text-gray-900"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:aadarshg.krishnan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-300 hover:text-blue-600"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/+918129151294" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-green-500 hover:text-green-600"
              >
                <FaWhatsapp />
              </a>
              <a
                href="tel:+918129151294"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-600"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-2/5 px-4 lg:my-0 flex justify-end mr-20">
          <img
            className="rounded-2xl max-w-full h-auto"
            src={profilePic}
            alt="Adarsh G Krishnan"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
