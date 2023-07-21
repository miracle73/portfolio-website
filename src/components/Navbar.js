import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiSolidContact } from 'react-icons/bi'
import { MdInsertComment } from 'react-icons/md'
import { BsPersonAdd } from 'react-icons/bs'
import { MdWorkHistory } from 'react-icons/md'
import { AiOutlineCopyright } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 m-auto bottom-0 w-20 h-full border-r border-solid border-black flex flex-col items-center">
            <div className="flex flex-col items-center justify-around w-full h-1/3 my-auto">
                < AiOutlineHome className="h-6 w-6" />
                < BsPersonAdd className="h-6 w-6" />
                < BiSolidContact className="h-6 w-6" />
                < MdWorkHistory className="h-6 w-6" />
                < MdInsertComment className="h-6 w-6" />

            </div>
            <div className="flex items-center justify-between">
                < AiOutlineCopyright /> <span className="ml-1">2023</span>
            </div>


        </div>
    )
}

export default Navbar
