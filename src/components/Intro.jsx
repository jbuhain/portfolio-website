import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
    return (
        
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <TypeAnimation
                sequence={[
                    'JoshuaBuhain.dev',
                    3000, 
                    'Joshua Buhain',
                    5000,
                ]}
                wrapper="span"
                speed={10}
                cursor={false}
                className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold font-pixelify"
                repeat={Infinity}
            />
            {/* <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Joshua Buhain</h1> */}
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Hello I’m Josh, a new grad with a Bachelor’s in Computer Science from UC Davis. I am currently on the job hunt and am excited to find opportunities in the realm of Software Engineering. 

What I lack in experience I make up for with personal projects and certifications. I also hold internship experience as a developer.</p>
        </div>
    )
        
}

export default Intro;