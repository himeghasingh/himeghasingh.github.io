import React from 'react';


const Education = () => {
  return (
      <div className = "w-full bg-gradient-to-b from-gray-400  to-white transition-opacity">
      <div className="min-h-screen flex flex-col items-center justify-center mb-20 ">
      <div className="text-md sm:text-3xl font-bold text-white mb-8 mt-40">
        EDUCATION
      </div>
      <ul>
        <li className="text-gray-600 font-semibold text-2xl">Master's</li>
        <p className="text-md sm:text-xl font-bold text-slate-800 flex justify-between">University of Massachusetts Amherst</p>
        <p className='text-xs'>Amherst, MA, USA</p>
        <p className='mt-5 font-medium'>Master's of Science - Computer Science</p>
        <p className="text-xs">Sep 2023 - May 2025 (Expected Graduation)</p>
        <p className='font-semibold'>GPA : 4.0/4.0 </p>
        <p> Courses : </p>
        <ul className="ml-4">
          <li>Fall 2023</li>
          <ul className="ml-8 font-secondary list-disc text-sm">
            <li>Distributed Computing and Systems</li>
            <li>Machine Learning</li>
            <li>Secure Distributed Systems (Blockchains)</li>
          </ul>
          <li>Spring 2024</li> 
          <ul className="ml-8 font-secondary list-disc text-sm">
            <li>Software Engineering</li>
            <li>Distributed and Operating Systems</li>
            <li>Business Intelligence and Analytics</li>
          </ul>
        </ul>
        <li className="text-gray-600 font-semibold text-2xl mt-5">Bachelor's</li>
        <p className="text-md sm:text-xl font-bold text-slate-800">VIT University</p>
        <p className='text-xs'>Vellore, TN, India</p>
        <p className='mt-5 font-medium'>Bachelor of Technology - Electronics and Communication</p>
        <p className="text-xs">Jul 2014 -Apr2018</p>
        <p className='font-semibold'>GPA : 3.57/4.0 </p>
        <p> Relevant Courses : </p>
        <ul className="ml-8 font-secondary list-disc text-sm">
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
