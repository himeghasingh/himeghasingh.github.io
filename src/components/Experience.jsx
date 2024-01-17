import React from 'react';
import vmwareLogo from '../assets/vmwareLogo.png';
import espressifLogo from '../assets/espressifLogo.png';
import jciLogo from '../assets/jciLogo.png';
import vitLogo from '../assets/vitLogo.png';
import 'animate.css/animate.min.css';


const vitLogoUrl = 'https://example.com/vit-logo.png';
const Experience = () => {
  return (
      <div className = "w-full bg-gradient-to-b from-gray-400  to-white transition-opacity">
      <div className=" mx-auto max-w-screen-xl min-h-screen flex flex-col items-center justify-center mb-20 ">
      {/* <div className="text-md sm:text-3xl font-bold text-white mb-8 mt-40 hover:scale-200"> */}
      <div className="text-md sm:text-3xl font-bold text-white mb-8 mt-40">
        EXPERIENCE
      </div>
      <ul className=' flex flex-col items-center justify-center'>
        <li className="mt-10">
          <div className="flex items-center justify-between">
            <div className="text-md sm:text-xl font-semibold text-slate-800 mr-2 ">
              <a href="https://www.vmware.com/in.html" target="_blank" rel="noopener noreferrer" className="hover:text-white ">VMWare</a>
                <p className="text-xs text-slate-500">Bengaluru, India</p>   
            </div>
            <div className='flex items-center justify-end'>
            <img src={vmwareLogo} alt="VMware Logo" className="h-8 w-26 items-right" style={{ marginLeft: '20' }} /> </div>
          </div>
          <div className="w-500 h-1 bg-gradient-to-r from-gray-500 to-gray-100 mt-6 mb-6 custom-animation"></div>
          <p className='mt-5 font-medium'>Member of Technical Staff - 2</p>
          <p className="text-xs font-semibold">Aug 2020 - Jul 2023</p>
          <div className='flex flex-row mt-2'>
          <div className="border border-black px-2 rounded-xl bg-gray-500 pb-1 shadow-md mr-2">
            <span className="text-white text-xs ">Java</span>
          </div>
          <div className="border border-black px-2 rounded-xl bg-gray-500 pb-1 shadow-md mr-2">
            <span className="text-white text-xs ">Python</span>
          </div>
          <div className="border border-black px-2 rounded-xl bg-gray-500 pb-1 shadow-md mr-2">
            <span className="text-white text-xs ">Linux</span>
          </div>
          <div className="border border-black px-2 rounded-xl  bg-gray-500 pb-1 shadow-md mr-2">
            <span className="text-white text-xs ">CI/CD</span>
          </div>
          <div className="border border-black px-2 rounded-xl bg-gray-500 pb-1 shadow-md mr-2">
            <span className="text-white text-xs ">Distributed Systems</span>
          </div><div className="border border-black px-2 rounded-xl  bg-gray-500 pb-1 shadow-md mr-2">
            <span className="text-white text-xs ">Virtualization</span>
          </div>
          <div className="border border-black px-2 rounded-xl  bg-gray-500 pb-1 shadow-md mr-2">
            <span className="text-white text-xs ">Ruby</span>
          </div>
          </div>
          <ul className="ml-8 font-secondary list-disc text-sm mt-5">
          <li>Created scalable microservices enabling Multi-Cloud Architecture and Virtualization.</li>
          <li>Designed and Implemented APIs for Non-Disruptive VM Upgrade, reducing vCenter software upgrade downtime from several hours to 5 minutes, ≈ 1500%.</li>
          <li>Revamped ConfigStore CLI (an internal tool to modify host configurations) re-engineering the existing system with 20+ user-friendly interface options, leading to a 50% decrease in user errors.</li>
          <li>Automated test workflows and configured them in a CI/CD pipeline, reducing manual testing effort by 80%.</li>
          <li>Developed, deployed and tested various features enhancing vSphere ESXi Lifecycle Manager - Host Profiles, that manages critical host configurations in a centralized way, saving 4 engineering hours per day.</li>
          <li>Resolved 50+ complex customer issues in collaboration with customer support teams.</li>
          <li>Delivered monthly cross-team knowledge transfer sessions to facilitate improving technical expertise.</li> 
        </ul>
        </li>
        <li className="mt-16">
          <div className="flex items-center justify-between">
            <div className="text-md sm:text-xl font-semibold text-slate-800 mr-2">
              <a href="https://www.espressif.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white ">Espressif Systems</a>
                <p className="text-xs text-slate-500">Pune, India</p>   
            </div>
            <img src={espressifLogo} alt="Espressif Logo" className="h-6 w-19 items-right" style={{ marginLeft: '20' }}  />
          </div>
          <div className="w-500 h-1 bg-gradient-to-r from-gray-500 to-gray-100 mt-6 mb-6 custom-animation"></div>
          <p className='mt-5 font-medium'>Staff Engineer</p>
          <p className="text-xs font-semibold">Jan 2020 - Aug 2020</p>
          <ul className="ml-8 font-secondary list-disc text-sm mt-5">
          <li>Constructed a CLI framework for ESP-Rainmaker (a open-source software for hassle-free deployment of an IoT device network) to add new devices and modify the state of the connected devices, in as less as few seconds.</li>
          <li>Enhanced integration of ESP32 chip with Alexa built-in devices, using Python automation, overcoming the redundancy of managing complex cloud services, making it easier than ever to build low-cost Alexa compatible devices.</li>
        </ul>
      </li>
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
          <li><p className='mt-5 font-medium'>Engineering Associate</p>
          <p className="text-xs font-semibold">Jul 2018 - Aug 2019</p>
          <ul className="ml-8 font-secondary list-disc text-sm mt-5">
          <li>Minimized the challenges of evaluating a security product geographically blocked from working in India, by designing a virtual setup using Python, Jenkins, and Virtualization, thereby overall reducing costs and accelerating project completion by {`>75%`}.</li>
          <li>Debugged 30+ issues on Connect24 portal (a website for activating and administering cellular devices for security alarm dealers) using ReactJS.</li>
          <li>Contributed to the development of iOtega home security system panel from Tyco Security Products, and automated end-to-end test workflows, using JAVA Spring Boot and Python.</li>
          </ul>
          </li>
          <li><p className='mt-5 font-medium'>Intern</p>
          <p className="text-xs font-semibold">Jan 2018 - Jun 2018</p>
          <ul className="ml-8 font-secondary list-disc text-sm mt-5">
          <li>Eliminated 40% use of physical storage disks by building a Cloud Storage Disk using MongoDB and Node.JS for a small-scale Building Management System.</li>
          </ul>
          </li>
        </ul>
      </li>

      </ul>
      
      </div> 
      </div> 
  );
};


export default Experience;
