"use client"
import React from 'react';
import Image from 'next/image';
import herobg from '../../../../public/images/hero.jpeg';
import WordRotate from '@/components/ui/WordRotate';
import { FollowerPointerCard } from '@/components/ui/following-pointer';

const Hero = () => {
    return (
        <div className='relative h-screen w-full'>
            <div className='hero-gradient opacity-80'></div>
            <Image
                src={herobg}
                alt='Hero Background'
                layout='fill'
                objectFit='cover'
                objectPosition='left'
                quality={100}
                className='absolute top-0 left-0 w-full h-full -z-10'
            />
            <div className='relative z-10 text-white p-10 max-w-[80%]'>
                <div className='mt-[70%] lg:mt-[30%] md:ml-[10%] font-mono text-4xl md:text-5xl lg:text-6xl'>
                    Ultrices ut etiam vulputate ante congue jokichn na
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5F82FF]">
                        <WordRotate words={["Lorem Ipsum", "Lorem Ipsumm"]} />
                    </span>
                </div>
                <div className=" md:ml-[10%] mt-5 flex flex-row gap-8 text-white items-center">
                    <div className='bg-[#5F82FF] rounded-lg px-3 py-2'>Learn More</div>
                    <div>Watch Video</div>
                </div>
            </div>




        </div>
    );
}

export default Hero;
