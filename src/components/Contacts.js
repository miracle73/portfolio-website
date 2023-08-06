import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const Contacts = () => {
    const form = useRef();
    const [data, setData] = useState({ name: "", email: "", subject: "", message: "" })
    const serviceId = process.env.REACT_APP_SERVICE_ID
    const templateId = process.env.REACT_APP_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((response) => {
                // show the user a success message
                console.log('Email sent successfully:', response.text);
                setData({ name: "", email: "", subject: "", message: "" })
            }, (error) => {
                // show the user an error
                console.error('Error sending email:', error);
            });
    };
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl mb-2 md:mb-0 font-bold">Get In Touch</h1>
            <h3 className="text-center px-3 md:px-0 text-2xl md:mb-8 mb-4 font-semibold">Lets talk about everything</h3>
            <form className=" md:w-1/2 w-full flex flex-col items-center p-4 " ref={form} onSubmit={sendEmail}>

                <input className="border w-2/3 p-1 m-2 rounded-lg shadow-2xl" type="text" id="name" name="name" placeholder="Insert your name" value={data.name} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
                <input className="border w-2/3  p-1 m-2 rounded-lg shadow-2xl" type="email" id="email" name="email" placeholder="Insert your email" value={data.email} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
                <input className="border w-2/3 p-1 m-2 rounded-lg shadow-2xl" type="text" id="subject" name="subject" placeholder="Subject of the mail" value={data.subject} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
                <textarea className="border w-2/3 m-2 rounded-lg shadow-2xl" id="message" rows="6" name="message" placeholder="Write your message" value={data.message} onChange={(e) => setData(prev => ({ ...prev, [e.target.name]: e.target.value }))} />
                <button className="bg-orange-500 rounded-xl lg:w-1/3 w-1/2 p-1 m-1 text-white" onClick={sendEmail}>Send Message</button>
            </form>

        </div>
    )
}

export default Contacts
