
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className= "max-container">
      <h1 className="head-text">
        Hello I'm <span className="blue-gradient_text font-semibold
        drop-shadow">Jae!</span>
      </h1>

      <div className=" mt-5 flex flex-col gap-3 text-slate-500">
        <p>A Software Engineer based in the United States, specifically 
          the Atlanta Georgia area, specializing in community engagement, technology distribution
          and game development. I enjoy a good game, Undertale being my favorite,
          and talking to people. I aspire to be a fullstack engineer that adds value to a company whose goal
          is to help the community around them. 

        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills!</h3>
      </div>


      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justfy-center 
            items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="py-16">
        <h3 className="subhead-text">My Experiences!</h3>
        <div className=" mt-5 flex flex-col gap-3 text-slate-500">
        <p>I haven't had much experience, as I am a freshman at Georgia Southern University. However,
          I try to find more things to dabble into when I get the chance; I always try to stay involved. Here's
          the rundown:</p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
            key={experience.company_name}
            date={experience.date}
            icon={<div className="flex justify-center items-center w-full h-full">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>}
            iconStyle={{ background: 'white' }}
            contentStyle={{ 
              borderBottom: '8px',
              borderStyle: 'solid',
              borderBottomColor: experience.iconBg,
              boxShadow: 'none',
              
              }}>
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p className="text-black-500 font-medium font-base"
                style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={`expereience-point-$`} className="text-black-500/50 font-normal pl-1 text-small">
                    {point}
                  </li>
                ))}
              </ul>

            </VerticalTimelineElement>
          
          ))}
        </VerticalTimeline>

      </div>


      <hr className="border-slate-300" />

      <CTA />
      </div>







    </section>
  )
}

export default About