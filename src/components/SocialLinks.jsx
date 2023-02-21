import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"


function SocialLinks() {

    const socials = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ), 
            style: "rounded-tr-md", 
            href: "https://www.linkedin.com"
        }, 
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),  
            href: "https://www.github.com/chrisnebo2"
        }, 
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),  
            href: "mailto:nebochristian9@gmail.com"
        }, 
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ), 
            style: "rounded-br-md", 
            href: "./src/assets/Christian Nebo Resume.pdf",
            download: true
        }, 
    ]
  return (
    <div className="hidden w-full xl:flex-col xl:top-[35%] xl:left-0 xl:fixed">
        <ul>
            {
                socials.map(({id, download, href, style, child}) => {
                return (
                    <li key={id} className={`flex items-center xl:w-40 h-14 px-4 bg-gray-500 xl:ml-[-100px] xl:hover:ml-[-5px] xl:${style} xl:duration-300`}>
                        <a 
                            href={href} 
                            download={download} 
                            rel="noreferrer"
                            className="flex justify-between items-center w-full text-white"
                        >
                            {child}
                        </a>
                    </li>
                )    
                })
            }
        </ul>
    </div>
  )
}

export default SocialLinks;
