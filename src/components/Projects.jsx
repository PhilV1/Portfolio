import ProjectCard from '../utilities/ProjectCard'

function Projects() {
  const projectInfo = [
    {
      link: 'https://task-planner-five.vercel.app/',
      image: '/images/TaskPlanner.JPG',
      description:
        'ToDo List with random Taskgenerator. Created with React and TailwindCSS.',
    },
    {
      link: 'https://dice-game-one-silk.vercel.app/',
      image: '/images/DiceGame.JPG',
      description: 'DiceGame with vanilla HTML,CSS and Javascript.',
    },
    {
      link: 'https://portfolio-website-omega-sepia-99.vercel.app/',
      image: '/images/JsPortfolio.JPG',
      description:
        'Portfolio with vanilla HTML, CSS and a bit JS. Includes some of my older Projects',
    },
  ]

  return (
    <div
      id="projects"
      className="flex flex-col items-center text-center pt-14 px-8"
    >
      <h2 className="text-3xl font-bold pb-4">Recent Projects</h2>
      <div className="flex justify-center flex-wrap gap-6 text-white">
        {projectInfo.map(({ link, image, description }) => (
          <ProjectCard link={link} image={image}>
            {description}
          </ProjectCard>
        ))}
      </div>
    </div>
  )
}

export default Projects
