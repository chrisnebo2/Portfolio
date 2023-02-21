import React from "react";

function Contact() {
  return (
    <div name="contact" className="pt-24 w-full bg-gradient-to-b from-gray-800 to-black p-4 text-white">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="px-2 sm:px-0">
          <form 
            action="https://getform.io/f/b396d9f0-d2bf-4581-b2bb-d6dc970e442d"
            method="POST" 
            className="flex flex-col w-full md:w-1/2 gap-4 mx-auto">
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              className="p-2 bg-transparent border rounded-md text-white focus:outline-none"
            />

            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email address" 
              className="p-2 bg-transparent border rounded-md text-white focus:outline-none"
            />

            <textarea 
              name="message" 
              className="resize-none bg-transparent border w-full h-40 p-2" 
              id=""
              placeholder="Please enter your message"
            />

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
