import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import { AiOutlineHome } from 'react-icons/ai'
import { BiSolidContact } from 'react-icons/bi'
import { MdInsertComment } from 'react-icons/md'
import { BsPersonAdd } from 'react-icons/bs'
import { MdWorkHistory } from 'react-icons/md'
import { AiOutlineCopyright } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'





const App = () => {
  const [showDiv, setShowDiv] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    setShowDiv(prev => !prev)
  }
  return (
    <div className="relative h-full w-full flex flex-col ">
      <FontAwesomeIcon icon="fa-solid fa-bars" className="h-6 fixed top-0 left-0 w-6 md:h-0 md:w-0 mt-6 ml-4" onClick={handleClick}> </FontAwesomeIcon>
      {showDiv && <div className="ml-1 mt-14 fixed top-0 left-0 shadow-2xl rounded-lg p-3 md:w-0 md:h-0">
        <a href="#home">
          < AiOutlineHome className="h-6 w-6 my-2 md:w-0 md:h-0" />
        </a>

        <a href="#about" >
          < BsPersonAdd className="h-6 w-6 my-2 md:w-0 md:h-0" />
        </a>
        <a href="#services">
          < BiSolidContact className="h-6 w-6 my-2 md:w-0 md:h-0" />
        </a>
        <a href="#experience">
          < MdWorkHistory className="h-6 w-6 my-2 md:w-0 md:h-0" />
        </a>
        <a href="#skills">
          < GiSkills className="h-6 w-6 my-2 md:w-0 md:h-0" />
        </a>
        <a href="#contact">
          < MdInsertComment className="h-6 w-6 my-2 md:w-0 md:h-0" />
        </a>
      </div>}
      <div className="md:fixed md:top-0 md:left-0 md:m-auto md:bottom-0 md:w-20 md:h-full md:border-r md:border-solid md:border-black md:flex md:flex-col md:items-center">
        <div className="md:flex md:flex-col md:items-center md:justify-around md:w-full md:h-1/3 md:my-auto">
          <a href="#home">
            < AiOutlineHome className="h-0 w-0 md:h-6 md:w-6" />
          </a>

          <a href="#about" >
            < BsPersonAdd className=" h-0 w-0 md:h-6 md:w-6" />
          </a>
          <a href="#services">
            < BiSolidContact className=" h-0 w-0 md:h-6 md:w-6" />
          </a>
          <a href="#experience">
            < MdWorkHistory className=" h-0 w-0 md:h-6 md:w-6" />
          </a>
          <a href="#skills">
            < GiSkills className="h-0 w-0 md:h-6 md:w-6" />
          </a>
          <a href="#contact">
            < MdInsertComment className="h-0 w-0 md:h-6 md:w-6" />
          </a>



        </div>
        {/* <div className="md:flex md:items-center md:justify-between ">
          < AiOutlineCopyright /> <span className="ml-1">2023</span>
        </div> */}


      </div>
      <div className=" h-full w-5/6 mx-auto flex flex-col p-4 justify-center ">
        <div className="h-full md:h-screen py-20 md:py-0" id="home">
          <LandingPage />
        </div>
        <div className="h-full md:h-screen py-20 md:py-0" id="about">
          <About />
        </div>
        <div className="h-full md:h-screen py-20 md:py-0" id="services">
          <Services />
        </div>
        <div className="h-full md:h-screen py-20 md:py-0" id="experience">
          <Experience />
        </div>
        <div className="h-full md:h-screen py-20 md:py-0" id="skills">
          <Skills />
        </div>
        <div className="h-full md:h-screen py-20 md:py-0" id="contact">
          <Contacts />
        </div>
      </div>





    </div>
  );
}

export default App;
library.add(fab, fas, far)