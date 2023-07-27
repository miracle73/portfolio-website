import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { TfiWrite } from 'react-icons/tfi'

const expertise = () => {
    return (
        <div className="h-full w-full p-4">
            <h1> What I do</h1>
            <div className="h-full w-full p-4 flex items-center justify-between">
                <div className="h-full w-1/4 bg-slate-400">
                    < FaReact />
                    <h3 className="text-white"> Frontend development</h3>
                    <p className="text-white"> I build and create  digital experiences that blend art and code, bringing imagination to life on the web
                    </p>
                </div>
                <div className="h-full w-1/4 bg-slate-400">
                    < FaNodeJs />
                    <h3 className=""> Backend development</h3>
                    <p className="">  I build the skeletal framework that powers websites and applications, ensuring seamless functionality and data management behind the scenes
                    </p>
                </div>
                <div className="h-full w-1/4 bg-slate-400">
                    < TfiWrite />
                    <h3 className="text-white"> Technical writing</h3>
                    <p className="text-white">   I transform complex concepts into clear, concise, and user-friendly documentation, bridging the gap between technology and understanding
                    </p>
                </div>
            </div>

        </div>
    )
}

export default expertise
