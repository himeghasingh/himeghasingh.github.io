import React, { useState } from 'react';
import vmwareLogo from '../assets/vmwareLogo.png';
import espressifLogo from '../assets/espressifLogo.png';
import plusSign from '../assets/plusSign.png';
import jciLogo from '../assets/jciLogo.png';
import vitLogo from '../assets/vitLogo.png';
import 'animate.css/animate.min.css';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";





const vitLogoUrl = 'https://example.com/vit-logo.png';
const vmwareSkills = [
  'Java',
  'Python',
  'Linux',
  'CI/CD',
  'Ruby',
  'Jenkins',
  'REST APIs',
  'VMWare vSphere',
  'VMWare ESXi',
  'Distributed Systems',
  'Virtualization',
  'Cloud Computing',
  // Add more skills as needed
];
const espressifSkills = [
  'Python',
  'AWS',
  'Linux',
  'CI/CD',
  'REST APIs',
  'CLI Apps and Automations',
  'Git',
  'ESP32',
  // Add more skills as needed
];
const jciSkills = [
  'Java',
  'SpringBoot',
  'Python',
  'HTML',
  'CSS',
  'React.js',
  'REST APIs',
  'CI/CD',
  'Jenkins',
  'Virtualization',
  'SQL',
  // Add more skills as needed
];
const jciInternSkills = [
  'Node.js',
  'MongoDB',
  'Cloud Storage',
  'HVAC',
  // Add more skills as needed
];


const Experience = () => {

  const [vm_isTextVisible, vm_setIsTextVisible] = useState(false);

  const vm_toggleTextVisibility = () => {
    // Toggle the state
    vm_setIsTextVisible(!vm_isTextVisible);
  };
  const [esp_isTextVisible, esp_setIsTextVisible] = useState(false);

  const esp_toggleTextVisibility = () => {
    // Toggle the state
    esp_setIsTextVisible(!esp_isTextVisible);
  };
  const [jc_ft_isTextVisible, jc_ft_setIsTextVisible] = useState(false);

  const jc_ft_toggleTextVisibility = () => {
    // Toggle the state
    jc_ft_setIsTextVisible(!jc_ft_isTextVisible);
  };
  const [jc_int_isTextVisible, jc_int_setIsTextVisible] = useState(false);

  const jc_int_toggleTextVisibility = () => {
    // Toggle the state
    jc_int_setIsTextVisible(!jc_int_isTextVisible);
  };
  return (
    <div className="w-full bg-gradient-to-b from-gray-400  to-white transition-opacity">
      <div className=" mx-auto max-w-screen-xl min-h-screen flex flex-col  justify-center mb-20 ">
        <div className="text-md sm:text-3xl font-bold text-white mb-8 mt-40 style={{ textShadow: '20px 20px 4px rgba(0, 0, 0, 1.0)' }}">
          EXPERIENCE
        </div>
        <ul className='flex flex-col  justify-center'>
           <li className="mt-10">
            <div className="flex items-center justify-between">
              <div className="text-md sm:text-xl font-semibold text-slate-800 mr-2 ">
                <a href="https://www.vmware.com/in.html" target="_blank" rel="noopener noreferrer" className="hover:text-white ">VMWare</a>
                <p className="text-xs text-slate-500">Bengaluru, India</p>
              </div>
              <div className='flex justify-end'>
                <img src={vmwareLogo} alt="VMware Logo" className="h-8 w-26 items-right" style={{ marginLeft: '20' }} /> </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-gray-500 to-gray-100 mt-6 mb-6 custom-animation"></div>


            <p className='mt-5 font-medium'>Member of Technical Staff - 2</p>
            <p className="text-xs font-semibold">Aug 2020 - Jul 2023</p>

            <div className="flex flex-row mt-2 font-secondary font-light">
              {vmwareSkills.map((skill, index) => (
                <div key={index} className="border border-black px-2 rounded-xl bg-gray-500 pb-1 shadow-md shadow-gray-300 mr-2  hover:shadow-xl hover:shadow-gray-200 cursor-pointer transform hover:translate-y-[-1px] transition duration-100 ease-in-out">
                  <span className="text-white text-xs ">{skill}</span>
                </div>
              ))}
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='mt-4 text-sm font-secondary text-black font-medium'> I was a part of the VMWare Cloud Foundation Business Unit, where I worked in the ESXi LifeCycle Team, and extensively on VMware HostProfiles.</div>
              </div>
              <div >
                 {vm_isTextVisible ? (
                  <FaSquareMinus onClick={vm_toggleTextVisibility} size={20} />
                ) : (
                  <FaSquarePlus onClick={vm_toggleTextVisibility} size={20} />
                )}
              </div>
            </div> 


             {vm_isTextVisible && (
              <div className={`transition-height overflow-hidden ${vm_isTextVisible ? 'h-auto' : 'h-0'}`}>
                <ul className="ml-8 font-secondary list-disc text-sm mt-5">
                  <li>Created scalable microservices enabling Multi-Cloud Architecture and Virtualization.</li>
                  <li>Designed and Implemented APIs for Non-Disruptive VM Upgrade, reducing vCenter software upgrade downtime from several hours to 5 minutes, ≈ 1500%.</li>
                  <li>Revamped ConfigStore CLI (an internal tool to modify host configurations) re-engineering the existing system with 20+ user-friendly interface options, leading to a 50% decrease in user errors.</li>
                  <li>Automated test workflows and configured them in a CI/CD pipeline, reducing manual testing effort by 80%.</li>
                  <li>Developed, deployed and tested various features enhancing vSphere ESXi Lifecycle Manager - Host Profiles, that manages critical host configurations in a centralized way, saving 4 engineering hours per day.</li>
                  <li>Resolved 50+ complex customer issues in collaboration with customer support teams.</li>
                  <li>Delivered monthly cross-team knowledge transfer sessions to facilitate improving technical expertise.</li>
                </ul> </div>
            )}
          </li> 
          {/* esp */}
           <li className="mt-16">
            <div className="flex items-center justify-between">
              <div className="text-md sm:text-xl font-semibold text-slate-800 mr-2">
                <a href="https://www.espressif.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white ">Espressif Systems</a>
                <p className="text-xs text-slate-500">Pune, India</p>
              </div>
              <img src={espressifLogo} alt="Espressif Logo" className="h-6 w-19 items-right" style={{ marginLeft: '20' }} />
            </div>
            <div className="w-500 h-1 bg-gradient-to-r from-gray-500 to-gray-100 mt-6 mb-6 custom-animation"></div>
            <p className='mt-5 font-medium'>Staff Engineer</p>
            <p className="text-xs font-semibold">Jan 2020 - Aug 2020</p>
            <div className="flex flex-row mt-2 ">
              {espressifSkills.map((skill, index) => (
                <div key={index} className="border border-black px-2 rounded-xl bg-gray-500 pb-1 shadow-md shadow-gray-100 mr-2  hover:shadow-xl hover:shadow-white cursor-pointer transform hover:translate-y-[-1px] transition duration-100 ease-in-out">
                  <span className="text-white text-xs ">{skill}</span>
                </div>
              ))}
            </div>
            <div className='flex items-center justify-between'>
              <div>
              <div className='mt-4 text-sm font-secondary text-black font-medium'> I was a part of the  Alexa team.</div>
            </div>
            <div className=' hover:scale-125'>
               {esp_isTextVisible ? (
                <FaSquareMinus onClick={esp_toggleTextVisibility} size={20} />
              ) : (
                <FaSquarePlus onClick={esp_toggleTextVisibility} size={20} />
              )}
            </div>
          </div> 

          {esp_isTextVisible && (
            <div className={`transition-height overflow-hidden ${esp_isTextVisible ? 'h-auto' : 'h-0'}`}>
              <ul className="ml-8 font-secondary list-disc text-sm mt-5">
                <li>Constructed a CLI framework for ESP-Rainmaker (a open-source software for hassle-free deployment of an IoT device network) to add new devices and modify the state of the connected devices, in as less as few seconds.</li>
                <li>Enhanced integration of ESP32 chip with Alexa built-in devices, using Python automation, overcoming the redundancy of managing complex cloud services, making it easier than ever to build low-cost Alexa compatible devices.</li>
              </ul> </div>
          )}
        </li> 
        {/* jci */}

         <li className="mt-16">
          <div className="flex items-center justify-between">
            <div className="text-md sm:text-xl font-semibold text-slate-800 mr-2">
              <a href="https://www.johnsoncontrols.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white ">Johnson Controls Inc.</a>
              <p className="text-xs text-slate-500">Pune, India</p>
            </div>
            <img src={jciLogo} alt="JCI Logo" className="h-14 w-61 items-right" style={{ marginLeft: '20' }} />
          </div>
          <div className="w-500 h-1 bg-gradient-to-r from-gray-500 to-gray-100 mt-6 mb-6 custom-animation"></div>
          <ul>
            <li>
              <p className='mt-5 font-medium'>Engineering Associate</p>
              <p className="text-xs font-semibold">Jul 2018 - Aug 2019</p>
              <div className="flex flex-row mt-2 ">
                {jciSkills.map((skill, index) => (
                  <div key={index} className="border border-black px-2 rounded-xl bg-gray-500 pb-1 shadow-md shadow-gray-200 mr-2  hover:shadow-xl hover:shadow-gray-300 cursor-pointer transform hover:translate-y-[-1px] transition duration-100 ease-in-out">
                    <span className="text-white text-xs ">{skill}</span>
                  </div>
                ))}
              </div>
              <div className='flex items-center justify-between'>
              <div>
              <div className='mt-4 text-sm font-secondary text-black font-medium'> I was a part of the Security & Intrusion team.</div>
              </div>
            <div >
              {jc_ft_isTextVisible ? (
                <FaSquareMinus onClick={jc_ft_toggleTextVisibility} size={20} />
              ) : (
                <FaSquarePlus onClick={jc_ft_toggleTextVisibility} size={20} />
              )}
            </div>
          </div>
           {jc_ft_isTextVisible && (
            <div className={`transition-height overflow-hidden ${jc_ft_isTextVisible ? 'h-auto' : 'h-0'}`}>
              <ul className="ml-8 font-secondary list-disc text-sm mt-5">
                <li>Minimized the challenges of evaluating a security product geographically blocked from working in India, by designing a virtual setup using Python, Jenkins, and Virtualization, thereby overall reducing costs and accelerating project completion by {`>75%`}.</li>
                <li>Debugged 30+ issues on Connect24 portal (a website for activating and administering cellular devices for security alarm dealers) using ReactJS.</li>
                <li>Contributed to the development of iOtega home security system panel from Tyco Security Products, and automated end-to-end test workflows, using JAVA Spring Boot and Python.</li>
              </ul> </div>)} 
            </li>
            <li><p className='mt-5 font-medium'>Intern</p>
              <p className="text-xs font-semibold">Jan 2018 - Jun 2018</p>
              <div className="flex flex-row mt-2 ">
                {jciInternSkills.map((skill, index) => (
                  <div key={index} className="border border-black px-2 rounded-xl bg-gray-500 pb-1 shadow-md shadow-gray-200 mr-2  hover:shadow-xl hover:shadow-gray-300 cursor-pointer transform hover:translate-y-[-1px] transition duration-100 ease-in-out">
                    <span className="text-white text-xs ">{skill}</span>
                  </div>
                ))}
              </div>
              <ul className="ml-8 font-secondary list-disc text-sm mt-5">
                <li>Eliminated 40% use of physical storage disks by building a Cloud Storage Disk using MongoDB and Node.JS for a small-scale Building Management System.</li>
              </ul>
            </li>
          </ul>
        </li> 

      </ul>

    </div>
    </div >
  );
};


export default Experience;
