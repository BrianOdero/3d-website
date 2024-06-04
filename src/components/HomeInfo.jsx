import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, btnText ,link}) => {
    return(
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
          {btnText}
        </Link>
        <img src={arrow} className='w-4 h-4 object-contain'/>
       
    </div>
    )
}



const renderContent = {
    1:(<h1 className='sm:text-xl sm;leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-1.5'>
        Hi, I am <span className='font-semibold sm;text-xl text-center'>Brian Okoth</span> 👋
        ,<br />
        a Software Engineer from Kenya
        </h1>),
    2:(
        <InfoBox
        text="worked with many companies and picked up alot of skills along the way"
        link="/about"
        btnText="Learn more"
        />
        
    ),
    3:(
        <InfoBox
        text="I have participated in many collaborative and private projects. Interested in seeing them? "
        link="/projects"
        btnText="See my portfolio projects"
        />
    ),
    4:(
        <InfoBox
        text="In need of a developer?Want to get in touch?"
        link="/contact"
        btnText="Contact me"
        />
    ),

}





const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null ;
}

export default HomeInfo