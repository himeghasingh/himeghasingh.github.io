import React, { useState } from 'react'
import TypingText from './TypingText';
import HeroImage from '../assets/heroImage.jpg'
import { LuHardDriveDownload } from "react-icons/lu";
import ResumePDF from '../assets/MeghaSingh_Resume.pdf';


const About = () => {  
    const [isFlipped, setFlipped] = useState(false);

    const toggleFlipped = () => {
      setFlipped(!isFlipped);
    };
  
    const buttonClass = isFlipped
      ? 'text-black w-fit px-4 py-3 my-2 flex items-center bg-white font-secondary font-bold mx-4'
      : 'text-white w-fit px-4 py-3 my-2 flex items-center bg-black font-secondary font-bold mx-4';

    const handleDownload = () => {
        window.location.href = ResumePDF;
    };
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-gray-400 to-white">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row">
            <div className="flex flex-col justify-center md:text-right">
                <TypingText />
                <p className="py-2 whitespace-nowrap font-secondary font-semibold my-10">MS CS @ UMass Amherst<br></br>Actively seeking Summer 2024 SWE Internships<br></br>Ex - Member of Technical Staff @ VMware<br></br> Loves talking about Cloud Computing, Virtualization and Green Cloud</p>
                <div className="flex justify-center">
                <a className="text-white w-fit px-4 py-3 my-2 flex items-center bg-black font-secondary font-bold mx-4 hover:bg-white hover:text-black transition duration-500" href={ResumePDF} download="MeghaSingh_Resume.pdf">RESUME  
                        <span className="ml-2"><LuHardDriveDownload /></span>
                    </a>
                    <button className="text-white w-fit px-4 py-3 my-2 flex items-center bg-black font-secondary font-bold mx-4 hover:bg-white hover:text-black transition duration-500">HIRE ME?
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my portfolioPic" className="rounded-xl w-1/5 md:w-1/2 mx-auto"></img>
            </div>
        </div>
    </div>
  )
}

export default About