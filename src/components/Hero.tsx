import React from 'react';
import Navbar from './Navbar';

const Hero: React.FC = () => {
    return (
        <div
            id="hero"
            className='min-h-screen bg-no-repeat bg-[url(/B612_20240412_043621_688-removebg-preview.png)] bg-cover'
            style={{
                backgroundSize: "35%",
                backgroundPosition: "left 100px top 100px",
                border: "none", // Remove border if any
                margin: "0", // Remove margin
                padding: "0", // Remove padding
                boxShadow: "none", // Remove box shadow
            }}
        >
            <Navbar />
            <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
                <div className='hidden lg:block'></div>
                <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
                    <div>
                        <p data-aos="zoom-out-right">I'm</p>
                        <p data-aos="zoom-out-right">Maheen</p>
                        <p data-aos="zoom-out-right">Kamal Khan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;