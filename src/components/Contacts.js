import React from 'react'

const Contacts = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl font-bold">Get In Touch</h1>
            <h3 className="text-center text-2xl mb-8 font-semibold">Lets talk about everything</h3>
            <form className=" w-1/2 flex flex-col items-center p-4 ">

                <input className="border w-2/3 p-1 m-2 rounded-lg shadow-2xl" type="text" id="name" placeholder="Insert your name" />
                <input className="border w-2/3  p-1 m-2 rounded-lg shadow-2xl" type="text" id="email" placeholder="Insert your email" />
                <input className="border w-2/3 p-1 m-2 rounded-lg shadow-2xl" type="text" id="subject" placeholder="Subject of the mail" />
                <textarea className="border w-2/3 m-2 rounded-lg shadow-2xl" type="textarea" id="message" rows="6" placeholder="Write your message" />
                <button className="bg-orange-500 rounded-lg w-1/3 p-1 m-1 text-white">Send Message</button>
            </form>

        </div>
    )
}

export default Contacts
