'use client'
import React, { useState } from 'react';
import logo from '../../../public/images/logo.png';
import menu from '../../../public/images/menu.svg';
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
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='absolute top-0 left-0 w-full flex flex-row justify-between items-center px-6 lg:px-20 sm:px-6 py-4 bg-transparent text-white'>
            {/* Logo and Menu Icon for Mobile */}
            <div className="flex items-center">
                <Image src={logo} alt='logo' width={40} height={40} />
                <span className="ml-2 text-xl font-black">BitNow</span>
            </div>

            {/* Menu Links */}
            <div className="hidden sm:flex flex-row items-center gap-1 lg:gap-8">
                {navItems.map((item, index) => (
                    <Link key={index} href={item.link} passHref legacyBehavior>
                        <a className={` lg:text-lg ${item.name === 'Home' ? 'text-blue-500' : ''}`}>{item.name}</a>
                    </Link>
                ))}
                <Link href="/getstarted" passHref legacyBehavior>
                    <a className="text-xl bg-blue-500 text-white lg:px-4 p-1 lg:py-2 rounded">Get Started</a>
                </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none"
                >
                 <Image src={menu} alt=''/>
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
