import React from 'react';
import umassLogoUrl from '../assets/umassLogo.png';
import vitLogo from '../assets/vitLogo.png';
import 'animate.css/animate.min.css';


const vitLogoUrl = 'https://example.com/vit-logo.png';
const Education = () => {
  return (
      <div className = "w-full bg-gradient-to-b from-gray-400  to-white transition-opacity">
      <div className="min-h-screen flex flex-col items-center justify-center mb-20 ">
      {/* <div className="text-md sm:text-3xl font-bold text-white mb-8 mt-40 hover:scale-200"> */}
      <div className="text-md sm:text-3xl font-bold text-white mb-8 mt-40">

        EDUCATION
      </div>
      <ul>
        <li className="text-gray-600 font-semibold text-2xl mt-2">Master's</li>
        <div className="w-30 h-1 bg-gradient-to-r from-gray-500 to-gray-100 mt-6 mb-6 custom-animation"></div>
        <div className="flex items-center justify-between">
  <div className="text-md sm:text-xl font-semibold text-slate-800 mr-2">
  <a href="https://www.umass.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white ">University of Massachusetts</a>
    <p className="text-xs">Amherst, MA, USA</p>
  </div>
  <img src={umassLogoUrl} alt="UMass Logo" className="h-20 w-20" style={{ marginLeft: '20' }} />
</div>



        
        <p className='mt-5 font-medium'>Master's of Science - Computer Science</p>
        <p className="text-xs">Sep 2023 - May 2025 (Expected Graduation)</p>
        <p className='font-semibold'>GPA : 4.0/4.0 </p>
        <p className='mt-5'> Courses : </p>
        <ul className="ml-4 mt-1">

          <li>Spring 2024</li> 
          <ul className="ml-8 font-secondary list-disc text-sm">
            <li>Software Engineering</li>
            <li>Distributed and Operating Systems</li>
            <li>Business Intelligence and Analytics</li>
          </ul>
          <li className='mt-2'>Fall 2023</li>
          <ul className="ml-8 font-secondary list-disc text-sm">
            <li>Distributed Computing and Systems</li>
            <li>Machine Learning</li>
            <li>Secure Distributed Systems (Blockchains)</li>
          </ul>
          
        </ul>

        <li className="text-gray-600 font-semibold text-2xl mt-10">Bachelor's</li>
        <div className="w-30 h-1 bg-gradient-to-r from-gray-500 to-white mt-6 mb-6 custom-animation"></div>
        <div className="flex items-center justify-between">
  <div className="text-md sm:text-xl font-semibold text-slate-800 mr-2">
  <a href="https://www.vit.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
      VIT University
    </a>
    <p className="text-xs">Vellore, TN, India</p>
  </div>
  <img src={vitLogo} alt="VIT Logo" className="h-20 w-20" style={{ marginLeft: '10' }} />
</div>
        <p className='mt-5 font-medium'>Bachelor's of Technology - Electronics and Communication</p>
        <p className="text-xs">Jul 2014 - Apr 2018</p>
        <p className='font-semibold'>GPA : 3.57/4.0 </p>
        <p className='mt-5'> Relevant Courses : </p>
        <ul className="ml-8 font-secondary list-disc text-sm mt-1">
          <li>Data Structures and Algorithms</li>
          <li>Computer Programming and Problem Solving</li>  
          <li>Computer Organization and Architecture</li> 
          <li>Computer Networks</li> 
          <li>Agent Based Intelligent Systems</li> 
          <li>Human Computer Interaction</li> 
          </ul>
      </ul>
      </div> 
      </div> 
  );
};


export default Education;
