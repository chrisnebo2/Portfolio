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
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {
                socials.map(({id, download, href, style, child}) => {
                return (
                    <li key={id} className={`flex items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-5px] ${style} duration-300`}>
                        <a 
                            href={href} 
                            download={download}
                            target="_blank" 
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
