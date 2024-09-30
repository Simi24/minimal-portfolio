
import { ExperienceItemProps } from "@/types/experienceTypes"

export const ExperienceItem = ({year, title, duration, company,  description}: ExperienceItemProps) => {

    return (
        <div className="relative flex items-start ">
          {/* Dot and line */}
          <div className="absolute left-0 top-1/4 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full z-10"></div>
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-white"></div>
      
          {/* Contents */}
          <div className="ml-8 p-4 bg-sky-900 rounded-lg shadow-md mb-4 hover:bg-sky-800 hover:scale-105 transition-colors duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-4">
                <span className="text-black bg-white font-bold text-lg px-3 py-1 rounded-full">{year}</span>
                <h3 className="text-xl font-semibold text-white">{company}</h3>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-white text-sm">{title}</p>
                <p className="text-sky-400 text-xs">{duration}</p>
              </div>
            </div>
            <p className="text-white text-sm mt-2">{description}</p>
          </div>
        </div>
      );
      
      

}