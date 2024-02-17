import ProjectCard from '../utilities/ProjectCard'

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center text-center pt-14 px-8"
    >
      <h2 className="text-3xl font-bold pb-4">Recent Projects</h2>
      <div className="flex justify-center flex-wrap gap-2">
        <ProjectCard
          link="https://www.w3schools.com/"
          image="src/images/3D_HoverEffect.JPG"
        >
          Lorem, ipsum.
        </ProjectCard>
      </div>
    </div>
  )
}

export default Projects
