import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
    const [toggle, setToggle] = useState(false)
    const myLinks = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "experience"
        },
        {
            id: 4,
            link: "portfolio"
        },
        {
            id: 5,
            link: "contact"
        }
    ]
    
  return (
    <div className="w-full bg-black fixed top-0">
        <div className="w-full max-w-screen-lg mx-auto bg-black text-white px-4 md:px-6 h-20 flex items-center justify justify-between">
            <div>
                <h1 className="text-4xl md:text-5xl font-logo">Chris</h1>
            </div>
            <ul className="hidden md:flex">
                {
                    myLinks.map(({link, id}) => (
                        <li key={id} className="capitalize text-base font-medium px-4 text-gray-400 hover:scale-105 duration-200 ease-out cursor-pointer hover:text-gray-200">{link}</li>
                    ))
                }
            </ul>
            <div className="text-gray-500 pr-4 z-10 cursor-pointer md:hidden">
                {
                    toggle ? 
                    <FaTimes size={25} onClick={() => setToggle(false)} /> :
                    <FaBars size={25} onClick={() => setToggle(true)}/>
                }
            </div>
            {toggle && (
                <ul className="md:hidden w-full h-screen bg-gradient-to-b from-black to-gray-600 absolute top-0 left-0 flex flex-col justify-center items-center">
                    {
                        myLinks.map(({link, id}) => (
                            <li key={id} className="capitalize text-2xl py-2 text-gray-400 hover:scale-105 cursor-pointer hover:text-gray-200">{link}</li>
                        ))
                    }
                </ul>
            )}

        </div>
    </div>
  )
}

export default NavBar;
