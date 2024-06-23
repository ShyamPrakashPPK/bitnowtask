import React from 'react';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/aboutus' },
    { name: 'Services', link: '/services' },
    { name: 'Pages', link: '/pages' },
    { name: 'News', link: '/news' },
    { name: 'Contact Us', link: '/contact' },
];

const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 w-full flex flex-row justify-between items-center px-10 py-10 bg-transparent text-white'>
            <div className="flex flex-row items-center gap-3 text-3xl">
                <Image className='p-2' src={logo} alt='logo' />
                BitNow
            </div>
            <div className="flex flex-row items-center gap-5">
                {navItems.map((item, index) => (
                    <Link key={index} href={item.link} legacyBehavior>
                        <a className={`text-xl ${item.name === 'Home' ? 'text-blue-500' : ''}`}>{item.name}</a>
                    </Link>
                ))}
                <Link href="/getstarted" legacyBehavior>
                    <a className="text-xl bg-blue-500 text-white px-4 py-2 rounded">Get Started</a>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
