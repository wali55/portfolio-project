import { projects } from "@/data/data"
import Project from "./Project"

const Projects = () => {
  return (
    <div id="projects" className="max-w-6xl mx-auto mt-60 px-6">
      <h1 className="text-center text-4xl font-bold text-neutral-900">
        Projects
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))} */}
        Will be added soon!
      </div>
    </div>
  )
}

export default Projects
