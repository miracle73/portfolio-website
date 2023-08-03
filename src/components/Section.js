import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './About'
import Services from './Services'
import Experience from './Experience'
import Contacts from './Contacts'
import Skills from './Skills'


const Section = () => {
    return (
        <div className=" h-full w-5/6 mx-auto flex flex-col p-4 justify-center ">
            <Router >
                <Routes>
                    <div className="h-screen">
                        <Route path="/" element={<LandingPage />} />
                    </div>
                    <div className="h-screen ">
                        <Route path="/about" element={<About />} />
                    </div>
                    <div className="h-screen">
                        <Route path="/services" element={<Services />} />
                    </div>
                    <div className="h-screen">
                        <Route path="/experience" element={<Experience />} />
                    </div>
                    <div className="h-screen">
                        <Route path="/skills" element={<Skills />} />
                    </div>
                    <div className="h-screen">
                        <Route path="/contacts" element={<Contacts />} />

                    </div>
                </Routes>
            </Router>

        </div>
    )
}

export default Section
