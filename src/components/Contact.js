import React from "react";

export default function Contact() {
    return (
    <section id="contact" className="text-center">
        <h1 className = "sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Contact Me
        </h1>
        <div className="container py-0 mx-auto justify-center flex sm:flex-nowrap flex-wrap">
            <div className="bg-gray-800 rounded-lg overflow-hidden p-5 flex relative">
                <div className="bg-gray-900 relative flex py-5 rounded shadow-md">
                    <div className="px-6 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            EMAIL
                        </h2>
                        <a className="text-indigo-400 leading-relaxed">
                            ekimmel8@gatech.edu
                        </a>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                            PHONE
                        </h2>
                        <p className="sm:text-ellipsis leading-relaxed">914-705-3328</p>
                    </div>
                </div>
                {/* flex row to position the icons to the right */}
            </div>
        </div>
        <div className="flex flex-row justify-center pt-3 pb-1">
            <a href="https://github.com/LilG0053">
                <img className="rounded px-1"
                    alt="hero"
                    src="./github.png"
                    width="60"
                    height="60" />
            </a>
            <a href="https://www.linkedin.com/in/ethan-kimmel-25a065262">
                <img className="rounded px-1"
                    alt="hero"
                    src="./linkedin.png"
                    width="60"
                    height="60" />
            </a>
            <a href="mailto:ekimmel8@gatech.edu">
                <img className="rounded px-1"
                    alt="hero"
                    src="./email.png"
                    width="60"
                    height="60" />
            </a>
        </div>
    </section>
    );
}