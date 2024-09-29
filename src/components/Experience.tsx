import { ExperienceItem } from "./ExperienceItem"
import { ExperienceItemProps } from "@/types/experienceTypes"
import { experiences } from "@/data/experiences"

export const Experience = () => {
    return (
      <section id="experience" className="bg-sky-950 py-8">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto">
            {experiences.map((experience: ExperienceItemProps, index: number) => (
                <ExperienceItem
                    key={index}
                    year={experience.year}
                    title={experience.title}
                    duration= {experience.duration}
                    company={experience.company}
                    description={experience.description}
                />
            ))}
            </div>
        </div>
      </section>
    );
  };