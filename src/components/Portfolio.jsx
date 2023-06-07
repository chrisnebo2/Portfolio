import React from "react"
import piggyVest from "../assets/portfolio/piggyvest_clone.png"
import fedixLabs from "../assets/portfolio/fedix_labs.png"
import paystackClone from "../assets/portfolio/paystack_clone.png"
import naijaKids from "../assets/portfolio/naija_kids.png"
import oakClone from "../assets/portfolio/oak_clone.png"
import portfolio from "../assets/portfolio/portfolio.png"


function Portfolio() {
    const myWorks = [
        {
            id: 1,
            img: fedixLabs,
            code: "",
            demo: "https://fedixlabs.netlify.app/"
        },
        {
            id: 2,
            img: portfolio,
            code: "https://github.com/chrisnebo2/Portfolio",
            demo: "https://nebochristian.netlify.app/"
        },
        {
            id: 3,
            img: paystackClone,
            code: "https://64806ab40ba5cb08fab533ec--cosmic-genie-d19673.netlify.app/",
            demo: "https://6480f2c165a64a44a9cec18d--resilient-cocada-d09865.netlify.app/"
        },
        {
            id: 4,
            img: naijaKids,
            code: "https://github.com/chrisnebo2/9ijakids_Game_List",
            demo: "https://spontaneous-sopapillas-cff653.netlify.app/"
        },
        {
            id: 5,
            img: piggyVest,
            code: "https://github.com/chrisnebo2/HTML_and_CSS_Cool_Projects/tree/main/2.%20piggyvest%20website%20clone",
            demo: "https://64806ab40ba5cb08fab533ec--cosmic-genie-d19673.netlify.app/"
        },
        {
            id: 6,
            img: oakClone,
            code: "https://github.com/chrisnebo2/oak",
            demo: "https://chrisnebo2.github.io/oak/"
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
                            <a target='_blank' href={demo} className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">Demo</a>
                            <a target='_blank' href={code} className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">Code</a>
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
