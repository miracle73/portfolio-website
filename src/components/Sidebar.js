import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiSolidContact } from 'react-icons/bi'
import { MdInsertComment } from 'react-icons/md'
import { BsPersonAdd } from 'react-icons/bs'
import { MdWorkHistory } from 'react-icons/md'

const Sidebar = () => {
    return (
        <div className="w-10 h-full border-r-4 border-solid border-black flex flex-col justify-between items-center">
            < AiOutlineHome />
            < BsPersonAdd />
            < BiSolidContact />
            < MdWorkHistory />

            < MdInsertComment />


        </div>
    )
}

export default Sidebar
