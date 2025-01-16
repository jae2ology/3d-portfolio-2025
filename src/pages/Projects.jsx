import { Link } from 'react-router-dom'
import { projects } from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className= "max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold
        drop-shadow">Projects!</span>
      </h1>

      <div className=" mt-5 flex flex-col gap-3 text-slate-500">
        <p>Although I haven't had much experience on my side, I have been working on some projects to improve my skills
          and to learn new things. Currently, I am in honors programming principles 1 (CSCI 1301), 
          where I will have a lot more projects in Java to show off, including this website! Here are some of the projects that I have worked on, 
          namely being from the Girls Who Code program. I will be sure to update this page as I create more projects!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img 
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
            </div>
          </div>

          <div classNamee="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link 
                to={project.link}
                targent="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600">
                Live Link
                </Link>
                <img 
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
                </div>
          </div>


        </div>   
      ))}
    </div>

    <hr className="border-slate-200" />
    <CTA />
    </section>
  )
}

export default Projects