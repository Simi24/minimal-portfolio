import { ProjectItemProps } from "@/types/projectTypes";
import { useState } from "react";
import { Rotate3D } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const ProjectItem = ({title, imgUrl, stack, link, description}: ProjectItemProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="min-h-[300px] w-full h-full perspective"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of the card */}
                <div className="absolute w-full h-full backface-hidden">
                    <div className="bg-sky-950 border-2 border-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                        <img className="h-32 w-full object-cover" src={imgUrl} alt={title} />
                        <div className="p-4 flex-grow flex flex-col justify-between w-full">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                                <div className="flex flex-wrap mb-2">
                                    {stack.map((tech, index) => (
                                        <span key={index} className="inline-block bg-sky-950 text-white border border-white rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-2">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <a href="https://www.linkedin.com/in/simone-paolo-petta/" target="_blank" rel="noopener noreferrer" className="text-white">
                                    <FaGithub size={24}/>
                                </a>
                                <div className="text-white">
                                    <Rotate3D size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Back of the card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="bg-sky-950 border-2 border-white rounded-xl shadow-md overflow-hidden h-full p-4 flex flex-col">
                        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                        <p className="text-white overflow-y-auto flex-grow">{description}</p>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center space-x-2">
                                <a href={link} className="text-white hover:underline flex items-center">
                                    <span>Learn More</span>
                                    <FaGithub size={20} className="ml-2"/>
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="text-white">
                                    <Rotate3D size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}