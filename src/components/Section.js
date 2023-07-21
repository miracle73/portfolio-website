import React from 'react'
import Home from './Home'
import About from './About'

const Section = () => {
    return (
        <div className=" h-full w-5/6 mx-auto flex flex-col p-4 justify-center bg-slate-400">
            <div className="h-full mt-32 mb-10">
                <Home />
            </div>
            <div className="h-full mb-20 mt-10 ">
                <About />
            </div>

        </div>
    )
}

export default Section
