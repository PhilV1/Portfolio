import ProjectCard from '../utilities/ProjectCard'

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center text-center pt-14 px-8"
    >
      <h2 className="text-3xl font-bold pb-4">Recent Projects</h2>
      <div className="flex justify-center flex-wrap gap-6 text-white">
        <ProjectCard
          link="https://task-planner-five.vercel.app/"
          image="/images/TaskPlanner.JPG"
        >
          ToDo List with random Taskgenerator. Created with React and
          TailwindCSS.
        </ProjectCard>
        <ProjectCard
          link="https://counter-five-omega.vercel.app/"
          image="/images/Counter.JPG"
        >
          Counter with vanilla Javascript.
        </ProjectCard>
        <ProjectCard
          link="https://dice-game-one-silk.vercel.app/"
          image="/images/Counter.JPG"
        >
          DiceGame with vanilla HTML,CSS and Javascript .
        </ProjectCard>
      </div>
    </div>
  )
}

export default Projects
