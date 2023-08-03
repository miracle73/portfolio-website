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




const App = () => {

  return (
    <div className="relative h-full w-full flex flex-col ">

      <div className="fixed top-0 left-0 m-auto bottom-0 w-20 h-full border-r border-solid border-black flex flex-col items-center">
        <div className="flex flex-col items-center justify-around w-full h-1/3 my-auto">
          <a href="#home">
            < AiOutlineHome className="h-6 w-6" />
          </a>
          <a href="#about" >
            < BsPersonAdd className="h-6 w-6" />
          </a>
          <a href="#services">
            < BiSolidContact className="h-6 w-6" />
          </a>
          <a href="#experience">
            < MdWorkHistory className="h-6 w-6" />
          </a>
          <a href="#skills">
            < GiSkills className="h-6 w-6" />
          </a>
          <a href="#contact">
            < MdInsertComment className="h-6 w-6" />
          </a>



        </div>
        <div className="flex items-center justify-between">
          < AiOutlineCopyright /> <span className="ml-1">2023</span>
        </div>


      </div>
      <div className=" h-full w-5/6 mx-auto flex flex-col p-4 justify-center ">
        <div className="h-screen" id="home">
          <LandingPage />
        </div>
        <div className="h-screen" id="about">
          <About />
        </div>
        <div className="h-screen" id="services">
          <Services />
        </div>
        <div className="h-screen" id="experience">
          <Experience />
        </div>
        <div className="h-screen" id="skills">
          <Skills />
        </div>
        <div className="h-screen" id="contact">
          <Contacts />
        </div>
      </div>





    </div>
  );
}

export default App;
