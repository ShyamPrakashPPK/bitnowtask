import React from 'react';
import Image from 'next/image';
import herobg from '../../../public/images/hero.jpeg';

const Hero = () => {
    return (
        <div className='relative h-screen w-full'>
            <div className='hero-gradient opacity-40'></div>
            <Image
                src={herobg}
                alt='Hero Background'
                layout='fill'
                objectFit='cover'
                quality={100}
                className='absolute top-0 left-0 w-full h-full -z-10'
            />
            <div className='relative z-10 text-white p-10'>
                <div className='mt-[30%]'>
                    <h1 className='text-5xl font-bold'>Welcome to BitNow</h1>
                    <p className='mt-4 text-2xl'>Your journey to the crypto world starts here.</p>
                </div>
               
                {/* Add more text or buttons as needed */}
            </div>
        </div>
    );
}

export default Hero;
