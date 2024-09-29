import React from "react";
import { FaLinkedin } from "react-icons/fa";

export const About = () => {
    return (
    <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-sky-950">
        <div className="lg:flex-grow flex-auto md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
            <h2 className="text-white">Hi 😃, my name is</h2>
            <h1 className="text-white title-font sm:text-6xl text-4xl mb-4 font-medium font-bold">Simone,</h1>
            <p className="text-white">
                I'm a software engineer based in Opera, Milano, Italy, Eart, Solar System ☀️. <br />
                I have a passion for software development and new technologies. <br />
                I love to learn new things and share my knowledge with others. <br />
                I've completed my bachelor degree in computer science for digital communication at University of Milano 🎓. <br />
                I'm currently studying for my master degree in computer science at University of Milano 🎓.
            </p>
            <div className="flex justify-center pt-10 md:pt-80"> 
            <h2 className="pr-2">New idea? Drop me a message 👉 </h2>
            <a href="https://www.linkedin.com/in/simone-paolo-petta/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex-auto">
            <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
            />
        </div>
        </div>

    </section>
    )
}