import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Experience from './Experience'

const Section = () => {
    return (
        <div className=" h-full w-5/6 mx-auto flex flex-col p-4 justify-center ">
            <div className="h-screen">
                <Home />
            </div>
            <div className="h-screen ">
                <About />
            </div>
            <div className="h-screen">
                <Services />
            </div>
            <div className="h-screen">
                <Experience />
            </div>

        </div>
    )
}

export default Section
