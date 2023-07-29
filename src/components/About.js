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
                saveAs(blob, 'CV(16).pdf');
            })
            .catch(error => console.log('Error downloading the PDF:', error));
    };
    return (
        <div className="w-2/3 flex h-screen items-center m-auto">
            <div className="w-1/3">
                <h1 className="font-bold text-4xl ">About me</h1>
                <div className="h-40 w-40 pt-4 rounded-full ">
                    <img src={picture} alt="" className="h-40 w-40 rounded-full " />
                </div>

            </div>
            <div className="w-2/3 flex justify-center flex-col items-center shadow-2xl p-6 rounded-xl">

                <p className="p-2 ">
                    A highly driven and resourceful software developer and an engineering graduate with a passion for leveraging technology to improve the way we live to make the world a better place.
                    I am highly skilled in solving problems using Javascript and typescript. My aim is to build and develop products for businesses, organizations, and firms, ensuring product useability and flow.
                    I also write technical articles that simplifies complex concepts for audiences of varying technical backgrounds. I try as much as possible to use my skills to bridge the gap between
                    technical complexity and user-friendly experiences.
                </p>
                <div className="p-2 rounded-3xl text-center bg-orange-500 text-white w-2/3 " onClick={handleDownload}>Download CV</div>

            </div>

        </div>
    )
}

export default About
