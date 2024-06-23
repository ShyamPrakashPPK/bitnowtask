import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
import arrow from '../../../public/images/chevron-right.svg'
interface FooterData {
    logoSrc: any;
    otherPages: string[];
    quickLinks: string[];
    newsletterHeading: string;
    newsletterDescription: string;
}

const footerData: FooterData = {
    logoSrc: logo,

    otherPages: ['Home', 'About Us', 'Services', 'Token Sale', 'Contact'],
    quickLinks: ['Privacy Policy', 'Terms of Service', 'Disclaimer', 'Credits', 'FAQ'],
    newsletterHeading: 'Newsletter',
    newsletterDescription: 'At habitant maecenas lacus adipiscing non. Accumsan etiam non praesent.',
};

const Footer = () => {
    const { logoSrc, otherPages, quickLinks, newsletterHeading, newsletterDescription } = footerData;

    return (
        <div className='bg-gradient-to-t from-[#1f5263] to-transparent'>
            <div className="">
                <div className=" px-8 py-12 md:px-8 lg:px-16 xl:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white border-b-2 border-gray-400">


                    {/* Logo and About Section */}
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <Image src={logoSrc} alt='logo' width={50} height={50} />
                            <h3 className='text-xl font-mono font-extrabold ml-2'>Bitwise</h3>
                        </div>
                        <p className='mt-4'>Lorem Ipsum, jhdjnfnj htiuijnerc</p>
                        <div className='mt-4'>Social links here</div>
                    </div>

                    {/* Other Pages and Quick Links */}
                    <div className='flex flex-row gap-8'>
                        <div>
                            <h4 className='font-bold text-xl'>Other Pages</h4>
                            <div className='flex flex-col mt-4 space-y-2'>
                                {otherPages.map((page, index) => (
                                    <div key={index} className='flex items-center'>
                                        <Image src={arrow} alt='' width={20} height={20} />
                                        <span className='ml-2'>{page}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold text-xl '>Quick Links</h4>
                            <div className='flex flex-col mt-4 space-y-2'>
                                {quickLinks.map((link, index) => (
                                    <div key={index} className='flex items-center'>
                                        <Image src={arrow} alt='' width={20} height={20} />
                                        <span className='ml-2'>{link}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-bold'>{newsletterHeading}</h1>
                        <p className='mt-4'>{newsletterDescription}</p>
                        <div className='mt-4 flex flex-col space-y-4'>
                            <input type="email" className='bg-white rounded-xl py-3 px-4' placeholder='Your email address' />
                            <button type='submit' className='text-black bg-[#5F82FF] px-4 py-3 font-semibold rounded-xl'>Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className='lg:px-5 flex justify-between items-center py-3 text-sm text-gray-300'>
                    <div>&copy; 2024 Bitwise. All rights reserved.</div>
                    <div className='flex gap-5'>
                        <a href='#' className='hover:text-gray-500'>Privacy Policy</a>
                        <a href='#' className='hover:text-gray-500'>Terms</a>
                        <span>Copyright 2023 Atlassian</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
