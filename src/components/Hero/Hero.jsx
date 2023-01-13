import React from 'react';

const Hero = ({ bgImage, title, desc }) => {

    return (
        <div className='md:h-[80vh] h-[50vh]'>
            <div className='relative -z-10'>
                <div style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'top', backgroundSize: 'cover' }} className="hero md:h-[60vh] h-[40vh]">
                    <div className="hero-content text-center">
                        <div className="text-white">
                            <h1 className="text-6xl font-bold">{title}</h1>
                            <p className="text-2xl py-6">{desc}.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;