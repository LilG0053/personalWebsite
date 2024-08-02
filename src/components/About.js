import React from "react";

export default function About() {
    return (
    <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I'm Ethan,
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    I love immersive experiences.
                    </h2>
                </h1>
                
                <p className="mb-8 leading-relaxed">
                    My virtual reality journey started in 2018 when I first tried out the HTC Vive. I was fascinated by this elevated interaction with the virtual world,
                    and 5 years later I applied to the Computer Engineering program at Georgia Tech to learn about both the hardware and software aspects of VR. This website showcases
                    some of my favorite experiences I've created.

                </p>
                <div className="flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg">
                        Work With Me
                    </a>
                    <a 
                    href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    See My Past Work
                    </a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./KimmelHeadshot.jpg"
                />
            </div>
        </div>
    </section>
    );
}