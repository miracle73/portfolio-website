import React from 'react'
import picture from '../images/mirack.jpg'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'



const home = () => {
    return (

        <div className=" w-1/3 flex flex-col items-center mx-auto m-40 ">
            <img src={picture} className="rounded-full w-40 h-40" alt="" />
            <h1 className="font-bold text-2xl">Nwadiaro Miracle</h1>
            <p className="text-base">Full stack software developer</p>
            <div className="flex w-full justify-center">
                < AiFillLinkedin className="h-8 w-8 px-1" />
                < AiOutlineTwitter className="h-8 w-8 px-1" />
                < AiOutlineGithub className="h-8 w-8 px-1" />

            </div>
            <div className=" rounded-xl w-1/3 h-6 text-center m-3 bg-orange-400 cursor-pointer 
                hover:w-2/5 hover:h-8 hover:text-center hover:flex hover:items-center hover:justify-center hover:rounded-2xl ">
                Hire Me
            </div>
        </div>




    )
}

export default home







