import React from "react"
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"


function Portfolio() {
    const myWorks = [
        {
            id: 1,
            img: reactWeather,
            code: "",
            demo: ""
        },
        {
            id: 2,
            img: reactSmooth,
            code: "",
            demo: ""
        },
        {
            id: 3,
            img: reactParallax,
            code: "",
            demo: ""
        },
        {
            id: 4,
            img: navbar,
            code: "",
            demo: ""
        },
        {
            id: 5,
            img: installNode,
            code: "",
            demo: ""
        },
        {
            id: 6,
            img: arrayDestruct,
            code: "",
            demo: ""
        }
    ]
  return (
    <div name="portfolio" className="pt-20 bg-gradient-to-b py-4 from-gray-800 to-black w-full text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6  ">Check out some of my works right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-8 px-2 sm:px-0 ">
            {
                myWorks.map(({id, img, code, demo}) => (
                    <div key={id} className="shadow-md overflow-hidden shadow-gray-600 rounded-lg">
                        <img 
                            className="w-full duration-200 hover:scale-105"
                            src={img} 
                            alt="" 
                        />
                        <div className="flex items-center justify-center">
                            <a href={demo} className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">Demo</a>
                            <a href={code} className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">Code</a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio;
