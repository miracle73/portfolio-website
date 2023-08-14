import React from 'react'
import picture from '../images/mirack.jpg'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'



const LandingPage = () => {

    return (

        <div className="md:w-1/3 h-full w-3/4 flex flex-col items-center mx-auto justify-center ">
            <img src={picture} className=" rounded-full w-40 h-40 " alt="" />
            <h1 className="font-bold text-2xl text-center">Nwadiaro Miracle</h1>
            <p className="text-base text-center">Full stack software developer</p>
            <div className="flex w-full justify-center " >
                <a href="https://www.linkedin.com/in/nwadiaro-miracle/" target="_blank" rel="noopener noreferrer">
                    < AiFillLinkedin className="h-8 w-8 px-1" />
                </a>
                <a href="https://twitter.com/Nwadiaromiracl1" target="_blank" rel="noopener noreferrer">
                    < AiOutlineTwitter className="h-8 w-8 px-1" />
                </a>
                <a href="https://github.com/miracle73" target="_blank" rel="noopener noreferrer">
                    < AiOutlineGithub className="h-8 w-8 px-1" />
                </a>

            </div>
            <div className=" rounded-xl   w-2/5 h-6 text-center m-3 bg-orange-400 cursor-pointer 
                hover:w-3/5 hover:h-8 hover:text-center hover:flex hover:items-center hover:justify-center hover:rounded-2xl " >
                Hire Me
            </div>
        </div>
    )
}

export default LandingPage
