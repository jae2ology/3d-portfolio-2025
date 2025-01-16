import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
    {btnText}
    </Link>
  </div>
)


const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center 
    neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Jae</span> 👋
      <br />
      A Software Engineering student from Douglasville, Georgia! 
    </h1>
  ),
  2: (
    <InfoBox 
    text="Always sought after change in my community, hoping to spread technology!" 
    link="/about"
    btnText="Learn more about me! ❤️"/>
  ),
  3: (
    <InfoBox 
    text="Dabbled in a bit of everything, want to check out my projects?" 
    link="/projects"
    btnText="Visit my portfolio!"/>
  ),
  4: (
    <InfoBox 
    text="Looking for an intern that can learn quickly and adapt to new tech? 🚀" 
    link="/contact"
    btnText="Let's chat!"/>
  ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;

  
}

export default HomeInfo