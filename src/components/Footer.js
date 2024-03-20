import React from 'react';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
    return (
        <>
            <footer className='bg-[#ec3237] pt-4 pb-4 sm:pb-12 flex justify-around 2xl:text-lg flex-wrap gap-y-4 gap-x-4'>
                <div className='space-x-2'>
                    <FaPhoneSquareAlt className='text-white inline text-3xl' />
                    <a href="tel:+18002001234" className='text-white inline align-bottom'>Toll Free 18002001234</a>
                </div>
                <div className='space-x-2'>
                    <IoLogoFacebook className='text-white inline text-3xl' />
                    <a href='https://www.facebook.com/cripumps' target="_main" className='text-white inline align-bottom'>www.facebook.com/cripumps</a>
                </div>
                <div className='space-x-2'>
                    <TfiWorld className='text-white inline text-3xl' />
                    <a href='https://www.crigroups.com' target="_main" className='text-white inline align-bottom'>www.crigroups.com</a>
                </div>
            </footer>
        </>
    )
};
export default Footer;