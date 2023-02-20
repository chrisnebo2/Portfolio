import React from "react"
import HeroImage from "../assets/heroImage.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

function Home() {   
     
  return (
    <div 
        name="home"
        className="mt-20 w-full bg-gradient-to-b from-gray-800 to-black py-12"
    >
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-5 md:gap-16 items-center justify-center px-4 gap-y-8">
            <div className="md:col-span-3 flex flex-col justify-center h-full gap-1 md:gap-3">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-relaxed">I'm Frontend Web Developer</h2>
                <p className="text-gray-400 py-4 md:max-w-xl md:text-xl">
                    I have 3 years of experience building and designing Frontend web application. 
                    Current, I love to work on web applications using technologies like React, Tailwind, Typescript and React Router.
                </p>
                <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight />
                        </span>
                    </button>
                </div>
            </div>
            <div className="col-span-2">
                <img 
                    src={HeroImage} 
                    alt="my profile photo"
                    className="rounded-2xl mx-auto w-full" 
                />
            </div>
        </div>
    </div>
  )
}

export default Home;
