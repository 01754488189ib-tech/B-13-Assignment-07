import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] rounded p-10 text-white">
            <nav>
                <h2 className="font-bold text-6xl">KeenKeeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </nav>

            <nav className="font-bold text-2xl">
                <h2>Social Links</h2>
                <div className="grid grid-flow-col gap-4 text-black">
                    <a className='bg-white p-2 rounded-full'>
                        <PiInstagramLogoFill />
                    </a>
                    <a className='bg-white p-2 rounded-full'>
                        <FaFacebookSquare />
                    </a>
                    <a className='bg-white p-2 rounded-full'>
                        <BsTwitterX />
                    </a>
                </div>
            </nav>
            <aside className="border-t opacity-30 w-11/12 mx-auto">
                <div className="w-full mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p>
                        © {new Date().getFullYear()}  KeenKeeper. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Cookies</a>
                    </div>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;