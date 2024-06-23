import React from 'react'
import card from '../../../../public/images/section2.jpeg'
import Image from 'next/image'
import InfinityCards from '../InfintiyCards/InfintiyCards'
import Accordion from '../Accordion/Accordion'
const Section2 = () => {


    const accordionItems = [
        { title: 'What is your favorite template from BRIX Templates?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.' },
        { title: 'What is your favorite template from BRIX Templates?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.' },
        { title: 'What is your favorite template from BRIX Templates?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.' },
        { title: 'What is your favorite template from BRIX Templates?', content: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.' },

    ];

    return (
        <section className='   h-full'>
            <div className='section2-background  flex flex-col items-center justify-center p-[10vh] gap-24'>
                <div className=' text-center text-white'>
                    <h1 className='font-mono pb-8 text-[35px] font-extrabold'>Most Trusted Cryptocurrency Platform</h1>
                    <h4 className='text-xl max-w-2xl' >Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus .</h4>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10'>

                    <div className='w-full h-auto  md:w-[180px] md:h-[350px] lg:w-[375px] lg:h-[500px]'>
                        <Image
                            src={card}
                            alt='cardimage'
                            width={1000}
                            height={1000}
                            className='rounded-2xl object-cover w-full h-full'
                        />
                    </div>
                    <div className='w-full h-auto  md:w-[180px] md:h-[350px] lg:w-[375px] lg:h-[500px]'>
                        <Image
                            src={card}
                            alt='cardimage'
                            width={1000}
                            height={1000}
                            className='rounded-2xl object-cover w-full h-full'
                        />
                    </div>
                    <div className='w-full h-auto  md:w-[180px] md:h-[350px] lg:w-[375px] lg:h-[500px]'>
                        <Image
                            src={card}
                            alt='cardimage'
                            width={1000}
                            height={1000}
                            className='rounded-2xl object-cover w-full h-full'
                        />
                    </div>
                </div>


            </div>

            {/* Infinity cards and accordion */}
            <div className='section3-background '>

                
                <InfinityCards/>
                <Accordion items={accordionItems} />


            </div>


            <div>

            </div>
        </section>

    )
}

export default Section2
