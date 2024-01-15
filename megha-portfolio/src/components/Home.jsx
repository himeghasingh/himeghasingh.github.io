import React, { useState, useEffect } from 'react'
import TypingText from './TypingText';
import HeroImage from '../assets/heroImage.png'
import { LuHardDriveDownload } from "react-icons/lu";
import ResumePDF from '../assets/MeghaSingh_Resume.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const Home = () => {  
    const [isFlipped, setFlipped] = useState(false);

    const toggleFlipped = () => {
      setFlipped(!isFlipped);
    };


    const handleDownload = () => {
        window.location.href = ResumePDF;
    };

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    

    return () => clearTimeout(timerId);
  }, []);

  const socialLinks = [
    { icon: <FaLinkedin size={30} />, link: 'https://www.linkedin.com/in/imeghasingh', colorClass: 'text-blue-500' },
    { icon: <FaGithub size={30} />, link: 'https://github.com/himeghasingh', colorClass: 'text-purple-500' },
    { icon: <HiOutlineMail size={30} />, link: 'mailto:meghasingh@umass.edu', colorClass: 'text-green-500' },
  ];

  return (
    <div name="home" className={`h-screen w-full bg-gradient-to-b from-gray-400 to-white transition-opacity`}>
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-1">
            <div>
                <img src={HeroImage} alt="my portfolioPic" className="rounded-xl w-1/5 md:w-1/4 mx-auto"></img>
            </div>
            <div className="flex flex-col justify-center text-center">
                <TypingText />
                <p className="py-2 whitespace-nowrap font-secondary font-semibold my-5 text-sm text-wrap md:text-md">MS CS @ UMass Amherst<br></br>Actively seeking Summer 2024 SWE Internships<br></br>Ex - Member of Technical Staff @ VMware<br></br> Loves talking about Cloud Computing, Virtualization and Green Cloud</p>
                <div className="flex justify-center items-center md:justify-between-items my-5">
            {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mx-5 ${social.colorClass} transition duration-300 hover:scale-125`}
                    >
                        {social.icon}
                    </a>
              
            ))}
            </div>
                <div className="flex justify-center items-center md:justify-between-items my-5">
                    <a className="text-white w-fit px-4 py-3 flex items-center rounded-md bg-black text-sm font-semibold border-2 border-white hover:bg-white hover:text-black transition duration-500 hover:border-black cursor-pointer ease-in-out transform" href={ResumePDF} target="_blank"
                        rel="noopener noreferrer">RESUME  
                    <span className="ml-2"><LuHardDriveDownload /></span>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home;