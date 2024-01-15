import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    const [nav, setNav] = useState(false);

    const links = [
        {
            id : 1,
            path : '/about',
            link : 'ABOUT'
        },
        {
            id : 2,
            path : 'education',
            link : 'EDUCATION'
        },
        {
            id : 3,
            path : 'experience',
            link : 'EXPERIENCE'
        },
        {
            id : 4,
            path : 'projects',
            link : 'PROJECTS'
        },
        // {
        //     id : 5,
        //     link : 'CONTACT'
        // },
    ]

    return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <Link to="/">
            <h1 className="font-bold font-secondary ml-2 hover:scale-105 duration-200 cursor-pointer">MEGHA.</h1>
            </Link>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, path, link}) => (
                <li key = {id} className="px-4 cursor-pointer capitalize font-secondary text-gray-500 hover:scale-105 duration-200 text-sm font-semibold hover:text-gray-100">
                <Link to={path}>{link}</Link>
            </li>
            ))}
        </ul>
        <div onClick = {() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
            {nav ? <FaTimes  size={20} /> : <FaBars size={20} />}
        </div>
        {nav && (<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-white">
        {links.map(({id, path, link}) => (
                <li key = {id} className="py-4 cursor-pointer capitalize font-secondary text-white hover:scale-105 duration-200 text-sm font-semibold">
                <Link to={path}>{link}</Link>
            </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default NavBar