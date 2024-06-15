import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills , experiences} from '../constants'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import CTA from '../components/CTA';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello , im <span className='font-semibold blue-gradient_text drop-shadow'>Brian</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Software engineer based in Kenya , specialzing in web development and also android development using React Native and PWA </p>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>
          <div className='mt-16 flex flex-wrap gap-12' >
            
            {skills.map((skill) => (
              <div className='block-container w-15 h-15'>
                <div>
                  <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
            

          </div>
        </div>

        <div className='py-16'>
          <h3 className='subhead-text'>Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>I am currently a student at Masinde Muliro , going for my 4th year of studies, and hoping to hone my skilkls as a react and react native developer. I have so far worked for the following companies as an intern:</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={//centering the icons to be better
                <div className='flex justify-center items-center w-full h-full'>
                  <img 
                  src={experience.icon} 
                  alt={experience.company_name} />
                </div>
              }
              iconStyle={{background: experience.iconBg}}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none'
                
              }}
              
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                  <p>{experience.company_name}</p>
                </div>

                <ul className='my-5 list-disc ml-5 space-6'>
                  {experience.points.map((point,index) => (
                    <li key={`experience-points-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        </div>

        <hr className='border-slate-200' />
        <section className='cta'>
            <p className='cta-text'>Having a project in mind? <br className='sm:block hidden' /> Lets build something together</p>
            <Link className='btn' to={"/contact"}>Reach out to Me</Link>
        </section>
    </section>
  )
}

export default About