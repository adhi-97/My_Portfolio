import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa"; // Import the up arrow icon
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll event to show/hide the scroll-to-top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-700 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#63e_1500%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <LandingPage />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Education />
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FaArrowAltCircleUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;
