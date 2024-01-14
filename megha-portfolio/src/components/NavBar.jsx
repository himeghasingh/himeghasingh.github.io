import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {
    const links = [
        {
            id : 1,
            link : 'ABOUT'
        },
        {
            id : 2,
            link : 'EDUCATION'
        },
        {
            id : 3,
            link : 'EXPERIENCE'
        },
        {
            id : 4,
            link : 'PROJECTS'
        },
        {
            id : 5,
            link : 'CONTACT'
        },
    ]
    return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className="font-bold font-secondary ml-2 hover:scale-110 duration-200 cursor-pointer">MEGHA.</h1>
        </div>

        <ul className="flex">
            {links.map(({id, link}) => (
                <li key = {id} className="px-4 cursor-pointer capitalize font-secondary text-gray-500 hover:scale-110 duration-200 text-sm font-semibold">
                {link}
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default NavBar