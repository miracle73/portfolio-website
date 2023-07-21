import React from 'react'
import picture from '../images/picture.jpg'

const About = () => {
    return (
        <div className="w-2/3 flex h-screen items-center mx-auto">
            <div className="w-1/3">
                <h1 className="font-bold text-4xl">About me</h1>
                <div className="h-20 w-20 pt-4">
                    <img src={picture} alt="" />
                </div>

            </div>
            <div className="w-2/3 flex justify-center flex-col items-center">

                <p className="text-center">
                    A highly driven and resourceful software developer and an engineering graduate with a passion for leveraging technology to improve the way we live to make the world a better place.
                    I am highly skilled in solving problems using Javascript and typescript. My aim is to build and develop products for businesses, organizations, and firms, ensuring product useability and flow.
                    I also write technical articles that simplifies complex concepts for audiences of varying technical backgrounds. I try as much as possible to use my skills to bridge the gap between
                    technical complexity and user-friendly experiences.
                </p>
                <div className="rounded-lg p-2 text-center bg-orange-500 text-white w-2/3">Download CV</div>

            </div>

        </div>
    )
}

export default About