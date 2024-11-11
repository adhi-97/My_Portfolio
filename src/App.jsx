import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-700 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#63e_200%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <LandingPage/>
        <About/>
        <TechStack/>
        <Experience/>
        <Projects/>
        <Education/>
      </div>
    </div>
  );
};

export default App;
