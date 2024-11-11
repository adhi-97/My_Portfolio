import {LANDINGPAGE_CONTENT} from "../constants"
import profilePic from "../assets/AKProfilePic.jpeg"

const LandingPage = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35">
      <div className="flex">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="mx-4 pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Adarsh G Krishnan</h1>
                <span className="mx-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Engineer</span> 
                <p className="mx-4 my-2 max-w-xl py-6 font-light tracking-tighter">
                    {LANDINGPAGE_CONTENT}
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/3 mx-20">
            <div className="flex justify-center mx-50">
                <img className="rounded-2xl" src={profilePic} alt="Adarsh G Krishnan"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
