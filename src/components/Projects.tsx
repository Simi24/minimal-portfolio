import { ProjectItem } from "./ProjectItem";
import { projects } from "@/data/projects";
import { ProjectItemProps } from "@/types/projectTypes";

export const Projects = () => {
    return (
        <section id="projects" className="bg-sky-950 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-6 text-center"><u>Projects</u></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((experience: ProjectItemProps, index: number) => (
                        <ProjectItem
                            key={index}
                            title={experience.title}
                            imgUrl={experience.imgUrl}
                            stack={experience.stack}
                            link={experience.link}
                            description={experience.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}