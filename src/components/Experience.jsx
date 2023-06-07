import React from "react"
import javscript from "../assets/javascript.png"
import reactHooks from "../assets/react-hooks.png"
import gitHub from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import reactLogo from "../assets/react.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import reactRedux from "../assets/react-redux.png"
import typeScript from "../assets/typescript.png"
import reactRouter from "../assets/react-router.png"
import nextJs from "../assets/nextjs.png"
import nodeJs from "../assets/nodejs.png"


function Experience() {
    const mySkills = [
        {
            id: 1,
            img: html,
            name: "HTML",
            color: "shadow-orange-500"
        },
        {
            id: 2,
            img: css,
            name: "CSS",
            color: "shadow-blue-500"
        },
        {
            id: 3,
            img: javscript,
            name: "JavaScript",
            color: "shadow-yellow-500"
        },
        {
            id: 4,
            img: reactLogo,
            name: "React",
            color: "shadow-blue-500"
        },
        {
            id: 5,
            img: gitHub,
            name: "GitHub",
            color: "shadow-white"
        },
        {
            id: 6,
            img: reactHooks,
            name: "React Hooks",
            color: "shadow-blue-300"
        },
        {
            id: 7,
            img: reactRouter,
            name: "React Router",
            color: "shadow-red-800"
        },
        {
            id: 8,
            img: reactRedux,
            name: "React Redux",
            color: "shadow-purple-500"
        },
        {
            id: 9,
            img: typeScript,
            name: "TypeScript",
            color: "shadow-blue-500"
        },
        {
            id: 10,
            img: tailwind,
            name: "Tailwind",
            color: "shadow-blue-500"
        },
        {
            id: 11,
            img: nextJs,
            name: "Next.Js",
            color: "shadow-gray-300"
        },
        {
            id: 12,
            img: nodeJs,
            name: "Node.js",
            color: "shadow-green-500"
        }
    ]

  return (
    <div name="experience" className="pt-20 bg-gradient-to-b py-4 blue-500 from-black to-gray-800 -black w-full text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
                <p className="py-6  ">These are some of the technologies am most competent with</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0 ">
            {
                mySkills.map(({id, img, color, name}) => (
                    <div key={id} className={"shadow-md bg-black flex flex-col gap-4 md:gap-6 py-3 justify-center items-center rounded-lg" + " " + color }>
                        <img 
                            className="w-1/3 sm:w-20 duration-200 hover:scale-105"
                            src={img} 
                            alt="" 
                        />
                        <p>{name}</p>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Experience;
