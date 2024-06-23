import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/logo.png'
import arrow from '../../../public/images/chevron-right.svg'



const Footer = () => {
    return (
        <div className='h-full bg-gradient-to-t from-[#1f5263] to-transparent mt-28 '>
            <div className="grid md:grid-cols-3 gap-8 text-white border-b-2 border-gray-400 px-32" >
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col '>
                        <div className='flex'>
                            <Image src={logo} alt='logo' />
                            <h3 className='text-xl font-mono font-extrabold '>Bitwise</h3>
                        </div>
                        Lorem Ipsum, jhdjnfnj htiuijnerc
                    </div>
                    <div>Socilas</div>
                </div>

                <div className='flex flex-row gap-16'>
                    <div className='flex flex-col gap-8'>
                        <h4 className='font-bold text-xl'>Other Pages</h4>
                        <div className='flex flex-col items-start gap-4'>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>Home</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>About Us</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>Services</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>Token Sale</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>Contact</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <h4 className='font-bold text-xl'>Quick Links</h4>
                        <div className='flex flex-col items-start gap-4'>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>Privacy Policy</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>Term of Service</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>Disclamer</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>Credits</span>
                            </div>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={arrow} alt='' />
                                <span>FAQ</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-5'>
                    <div className="flex flex-col gap-8">
                        <h1 className='text-xl font-bold'>News letter</h1>
                        <h4>At habitant maecenas lacus adipiscing non. Accumsan etiam non praesent </h4>
                        <div className='flex flex-col gap-5'>
                            <input type="email" className='bg-white rounded-xl py-3 px-4' placeholder='Your email address' />
                            <button type='submit' className='text-black bg-[#5F82FF] px-4 py-3 font-semibold rounded-xl'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between px-8 py-4 text-[14px]'>
                <div>

                </div>
                <div className='flex flex-row gap-5 text-gray-300 font-light'>
                    <h4>Privacy Policy</h4>
                    <h4>Notice at Collection</h4>
                    <h4>Terms</h4>
                    <h4>Copyright 2023 Atlassian</h4>
                </div>
            </div>

        </div>
    )
}

export default Footer
