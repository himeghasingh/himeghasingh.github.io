import React from 'react'

const Education = () => {
  return (
    <div name="home" className={`h-screen w-full bg-gradient-to-b from-gray-400 to-white transition-opacity`}>
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full px-1">
      <h3 className="my-5 text-md sm:text-4xl font-bold text-white items-center">EDUCATION</h3>
      <ul>
        <li className="text-gray-600 font-semibold text-xl">Master's</li>
        <li className="text-gray-600 font-semibold text-xl">Bachelor's</li>
      </ul>
      </div>
    </div>
  )
}

export default Education