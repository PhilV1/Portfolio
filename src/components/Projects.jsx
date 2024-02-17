import ProjectCard from '../utilities/ProjectCard'
// import ToDoImg from '../images/ToDoList.JPG'

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center text-center pt-14 px-8"
    >
      <h2 className="text-3xl font-bold pb-4">Recent Projects</h2>
      <div className="flex justify-center flex-wrap gap-2">
        <ProjectCard
          link="https://simple-to-do-list-eta.vercel.app/"
          image="src/images/ToDoList.JPG"
        >
          Simple ToDo List in ReactJS.
        </ProjectCard>
      </div>
    </div>
  )
}

export default Projects
