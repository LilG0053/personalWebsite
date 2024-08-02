import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
    <section id="skills">
        <div className="container px-5 py-5 mx-auto">
            <div className="mb-20">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 incline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium justify-center title-font mb-4 text-white">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        I mainly specialize in XR development technology, especially Unity and its XR frameworks. The technologies listed below have all been used in my personal projects. I enjoy learning, so I can quickly pick up new frameworks, engines, and languages.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-900 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div> 
                    ))}
                    
                </div>
                <h2 className="pt-10 text-center sm:text-3xl text-2xl font-medium title-font text-white ">
                        Current Positions
                </h2>
                <ul className="pl-2 pt-3 text-left list-disc leading-relaxed list-inside text-left text-gray-300">
                    <li className="py-2">Developing immersive worlds for the Academic and Research Technology division of Georgia Tech's Office of Information Technology</li>
                    <li className="py-2">Undergraduate research assistant in the head worn displays team for Dr. Thad Starner's <a className= "text-indigo-400 underline"href="https://gvu.gatech.edu/research/labs/contextual-computing-group"> Contextual Computing Group </a>
                    </li>
                    <li className="py-2">Developing extended reality educational applications for Georgia Tech's Leadership Education and Development office</li>
                    <li className="py-2">Executive board member for <a className= "text-indigo-400 underline"href="https://www.gtxr.club/"> GTXR</a>, Georgia Tech's extended reality club</li>
                </ul>
            </div>
        </div>
    </section>
    );
    
}