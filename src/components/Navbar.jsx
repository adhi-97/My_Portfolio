import logo from "../assets/AKLogo.PNG";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div>
        <img className="mx-2 w-10" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaEnvelope/>
        <FaPhone/>
    </div>
  </nav>;
};

export default Navbar;
