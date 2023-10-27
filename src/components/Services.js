import React from 'react'
import backend from '../images/backend5.png'
import frontend from '../images/frontend4.png'
import technicalWriting from '../images/technical writing.png'
import mobile from '../images/mobile3.jpeg'

const Services = () => {
    return (
        <div className="h-full w-full  flex flex-col justify-center">
            <div>
                <h1 className="text-center text-4xl font-bold "> What I do</h1>
            </div>

            <div className=" w-full p-4  flex flex-col items-center md:grid md:grid-cols-3 md:gap-4">
                <div className="p-2 h-80 md:h-[20rem] xl:h-60 flex flex-col justify-around  w-5/6 md:w-full  lg:w-3/4 my-5 md:my-0 rounded-xl bg-orange-300 ">
                    <div className="w-20 h-20  rounded-md mx-auto">
                        <img src={frontend} alt="" className="object-cover" />
                    </div>
                    <h3 className="text-center text-2xl font-bold "> Frontend development</h3>
                    <p className="text-center  font-sans">  I build and create  digital experiences that blend art and code, bringing imagination to life on the web
                    </p>
                </div>
                <div className="p-2 h-80 md:h-[20rem] xl:h-60 flex flex-col justify-around    rounded-xl  w-5/6 md:w-full lg:w-3/4  bg-slate-400 my-5 md:my-0">
                    <div className="w-20 h-20 rounded-md mx-auto">
                        <img src={mobile} alt="" className="" />
                    </div>
                    <h3 className="text-center text-2xl font-bold  "> Mobile development</h3>
                    <p className="text-center  font-sans"> high-quality, user-friendly apps that meet the needs of their users and achieve the desired business outcomes
                    </p>
                </div>
                <div className=" p-2 h-80 md:h-[20rem] xl:h-60 flex flex-col justify-around   rounded-xl w-5/6 md:w-full lg:w-3/4 bg-yellow-300 my-5 md:my-0">
                    <div className="w-20 h-20  rounded-md mx-auto">
                        <img src={technicalWriting} alt="" className=" object-cover" />
                    </div>
                    <h3 className="text-center text-2xl font-bold "> Technical writing</h3>
                    <p className="text-center  font-sans">   I transform complex concepts into clear, concise, and user-friendly documentation, bridging the gap between technology and understanding
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Services
