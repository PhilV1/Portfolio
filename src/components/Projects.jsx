import ProjectCard from '../utilities/ProjectCard'
import { projectInfo } from '../data/projectData'

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center text-center pt-14 px-8"
    >
      <h2 className="text-3xl font-bold pb-4">Recent Projects</h2>
      <div className="flex justify-center flex-wrap gap-6 text-white">
        {projectInfo.map(({ link, image, description, github }) => (
          <ProjectCard link={link} image={image} github={github}>
            {description}
          </ProjectCard>
        ))}
      </div>
    </div>
  )
}

export default Projects
