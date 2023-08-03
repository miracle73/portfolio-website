import React from 'react'
import backend from '../images/backend5.png'
import frontend from '../images/frontend4.png'
import technicalWriting from '../images/technical writing.png'

const Services = () => {
    return (
        <div className="h-full w-full  flex flex-col justify-center">
            <div>
                <h1 className="text-center text-4xl font-bold mb-10"> What I do</h1>
            </div>

            <div className=" w-full p-4  flex items-center justify-between">
                <div className="p-4 w-1/4 rounded-xl bg-orange-300">
                    <img src={frontend} alt="" className="w-20 h-20 rounded-md mx-auto" />
                    <h3 className="text-center text-2xl font-bold py-2"> Frontend development</h3>
                    <p className="text-center py-2 font-sans"> I build and create  digital experiences that blend art and code, bringing imagination to life on the web
                    </p>
                </div>
                <div className="p-2 rounded-xl w-1/4 bg-slate-400 ">
                    <img src={backend} alt="" className="w-20 h-20 rounded-md mx-auto" />
                    <h3 className="text-center text-2xl font-bold py-2"> Backend development</h3>
                    <p className="text-center py-2 font-sans">  I build the skeletal framework that powers websites and applications, ensuring seamless functionality and data management behind the scenes
                    </p>
                </div>
                <div className=" p-5 rounded-xl w-1/4 bg-yellow-300">
                    <img src={technicalWriting} alt="" className="w-20 h-20 rounded-md mx-auto" />
                    <h3 className="text-center text-2xl font-bold pb-2"> Technical writing</h3>
                    <p className="text-center py-2 font-sans">   I transform complex concepts into clear, concise, and user-friendly documentation, bridging the gap between technology and understanding
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Services
