import React from 'react'
import DevCareer from '../images/devcareer.jpeg'
import UsefulPDF from '../images/usefulpdf.jpeg'
import Veedez from '../images/veedez.jpeg'

const Experience = () => {
    return (
        <div className="h-full w-full  flex flex-col justify-center">
            <div>
                <h1 className="text-center text-4xl font-bold mb-10"> Experience</h1>
            </div>

            <div className=" w-full p-4  flex items-center justify-between">
                <div className="p-2 w-1/4 rounded-xl bg-orange-300">
                    <div className="flex items-center">
                        <img src={DevCareer} alt="" className="h-14 w-14" />
                        <div className="pl-2">
                            <h3 className="text-center text-2xl font-bold "> DevCareer</h3>
                            <p className="text-center py-2 font-sans">Backend developer Intern</p>
                        </div>

                    </div>
                    <div className="font-serif pl-2">
                        <div className="text-sm py-1">Sep 2022 - Present</div>
                        <div className="py-1">
                            I was part of the team that contributed to the development of UsefulPDF, an Electronic signature and document generation software.
                        </div>
                        <div className="py-1 font-medium">Skills: MongoDB · MySQL · Express.js · JavaScript · Node.js</div>
                    </div>

                </div>
                <div className="p-2 rounded-xl w-1/4 bg-slate-400 ">
                    <div className="flex items-center">
                        <img src={UsefulPDF} alt="" className="h-14 w-14" />
                        <div className="pl-2">
                            <h3 className="text-center text-2xl font-bold"> UsefulPDF</h3>
                            <p className="text-center py-2 font-sans">Fullstack developer Intern</p>
                        </div>
                    </div>
                    <div className="font-serif pl-2">
                        <div className="text-sm py-1">Jan 2022 - May 2022</div>
                        <div className="py-1">
                            I was part of the team that contributed to the development of UsefulPDF, an Electronic signature and document generation software.
                        </div>
                        <div className="py-1 font-medium">Skills: Laravel · PhpMyAdmin · MySQL · PHP</div>
                    </div>
                </div>
                <div className=" p-2 rounded-xl w-1/4 bg-yellow-300">
                    <div className="flex items-center">
                        <img src={Veedez} alt="" className="h-14 w-14" />
                        <div className="pl-2">
                            <h3 className="text-center text-2xl font-bold "> Veedez</h3>
                            <p className="text-center py-2 font-sans">Software developer Intern</p>
                        </div>
                    </div>
                    <div className="font-serif pl-2">
                        <div className="text-sm py-1">Jan 2022 - May 2022</div>
                        <div className="py-1">
                            I was part of the team that contributed to the development of UsefulPDF, an Electronic signature and document generation software.
                        </div>
                        <div className="py-1 font-medium">Skills: Laravel · PhpMyAdmin · MySQL · PHP</div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Experience
