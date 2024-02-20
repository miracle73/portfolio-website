import React from 'react'
import DevCareer from '../images/devcareer.jpeg'
import UsefulPDF from '../images/usefulpdf.jpeg'
import Veedez from '../images/veedez.jpeg'

const Experience = () => {
    return (
        <div className="h-full w-full  flex flex-col justify-center ">
            <div>
                <h1 className="text-center text-4xl font-bold  "> Experience</h1>
            </div>

            <div className=" w-full p-4  flex flex-col items-center md:grid md:grid-cols-3 md:gap-4">
                <div className="p-2 h-96 xl:h-64 flex flex-col justify-around w-5/6   md:w-full lg:w-3/4 my-5 md:my-0 rounded-xl shadow-2xl">
                    <div className="flex items-center">
                        <img src={DevCareer} alt="" className="h-14 w-14" />
                        <div className="pl-2">
                            <h3 className="text-center text-2xl font-bold "> DevCareer</h3>
                            <p className="text-center py-2 font-sans"></p>
                        </div>

                    </div>

                    <div className="text-sm py-1 font-serif pl-2">Sep 2022 - Present</div>
                    <div className="py-1 font-serif pl-2">
                        am part of the team that is building web and mobile application that enables the
                        organization to recruit and employ young techies in various cohort programs.
                    </div>
                    <div className="py-1 font-medium font-serif pl-2">Skills: React · ReactNative · Tailwindcss · Javascript · Typescript </div>


                </div>
                <div className="p-2 h-96  xl:h-64 flex flex-col justify-around   rounded-xl w-5/6 md:w-full lg:w-3/4 my-5 md:my-0 shadow-2xl ">
                    <div className="flex items-center">
                        <img src={UsefulPDF} alt="" className="h-14 w-14" />
                        <div className="pl-2">
                            <h3 className="text-center text-2xl font-bold"> UsefulPDF</h3>
                            <p className="text-center py-2 font-sans">Fullstack developer Intern</p>
                        </div>
                    </div>

                    <div className="text-sm py-1 font-serif pl-2">Jan 2022 - May 2022</div>
                    <div className="py-1 font-serif pl-2">
                        I was part of the team that contributed to the development of UsefulPDF, an Electronic signature and document generation software.
                    </div>
                    <div className="py-1 font-medium font-serif pl-2">Skills: Laravel · PhpMyAdmin · MySQL · PHP</div>

                </div>
                <div className=" p-2 h-96 xl:h-64 flex flex-col justify-around  rounded-xl w-5/6 md:w-full lg:w-3/4 my-5 md:my-0 shadow-2xl">
                    <div className="flex items-center">
                        <img src={Veedez} alt="" className="h-14 w-14" />
                        <div className="pl-2">
                            <h3 className="text-center text-2xl font-bold "> Veedez</h3>
                            <p className="text-center py-2 font-sans">Software developer Intern</p>
                        </div>
                    </div>

                    <div className="text-sm py-1 font-serif pl-2">Jan 2022 - May 2022</div>
                    <div className="py-1 font-serif pl-2">
                        I was part of the team that contributed to the development of UsefulPDF, an Electronic signature and document generation software.
                    </div>
                    <div className="py-1 font-medium font-serif pl-2">Skills: Laravel · PhpMyAdmin · MySQL · PHP</div>


                </div>
            </div>

        </div>
    )
}

export default Experience
