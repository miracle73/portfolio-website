import React from 'react'
import picture from '../images/picture.jpg'
import { saveAs } from 'file-saver';

const About = () => {
    const pdfPath = process.env.PUBLIC_URL + '/Files/CV(16).pdf';
    const handleDownload = () => {
        // Fetch the PDF file using the provided path (replace 'path/to/your/pdf.pdf' accordingly).
        fetch(pdfPath)
            .then(response => response.blob())
            .then(blob => {
                // Save the PDF file using FileSaver.js
                saveAs(blob, 'Resume.pdf');
            })
            .catch(error => console.log('Error downloading the PDF:', error));
    };
    return (
        <div className="h-full w-full flex flex-col items-center  md:grid md:grid-cols-2 md:align-middle md:justify-center md:pt-0 md:px-4">
            <div className="md:flex md:flex-col md:items-center">
                <h1 className="text-center text-2xl md:text-4xl font-bold mb-2">About me</h1>
                <div className="">
                    <img src={picture} alt="" className="h-28 w-28 mx-auto md:h-40 md:w-40 rounded-full " />
                </div>

            </div>
            <div className="w-full md:mt-6 mt-4 shadow-2xl rounded-xl p-1 md:p-2 lg:p-6">

                <p className="mb-4  font-sans text-center ">
                    A highly driven and resourceful software developer and an engineering graduate with a passion for leveraging technology to improve the way we live to make the world a better place.
                    I am highly skilled in solving problems using Javascript and typescript. My aim is to build and develop products for businesses, organizations, and firms, ensuring product useability and flow.
                    I also write technical articles that simplifies complex concepts for audiences of varying technical backgrounds. I try as much as possible to use my skills to bridge the gap between
                    technical complexity and user-friendly experiences.
                </p>
                <div className="text-center w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/4 bg-orange-500 text-white rounded-xl mx-auto" onClick={handleDownload}>Download CV</div>

            </div>

        </div>
    )
}

export default About
