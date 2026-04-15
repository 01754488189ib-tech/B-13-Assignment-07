"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineQueryStats } from 'react-icons/md';
import { RiTimeLine } from 'react-icons/ri';
import { TiHomeOutline } from 'react-icons/ti';

const Header = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const navItems = [
        { name: 'Home', link: '/blog', icon: <TiHomeOutline size={18} /> },
        { name: 'Timeline', link: '/timeline', icon: <RiTimeLine size={18} /> },
        { name: 'Stats', link: '/stats', icon: <MdOutlineQueryStats size={18} /> },
    ];

    return (
        <div className="navbar bg-base-100 px-4 md:px-10 py-3 shadow-sm sticky top-0 z-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        {navItems.map((item, index) => (
                            <li key={index} onClick={() => setActiveTab(item.name)}>
                                <Link href={item.link} className={`flex items-center gap-2 ${activeTab === item.name ? "text-[#244D3F] font-bold" : ""}`}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="text-2xl font-bold tracking-tight">KeenKeeper</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems.map((item, index) => (
                        <li key={index} onClick={() => setActiveTab(item.name)}>
                            <Link href={item.link}
                                className={`rounded-md font-medium px-4 py-2 flex items-center gap-2 transition-all duration-300
                                ${activeTab === item.name
                                        ? 'bg-[#244D3F] text-white'
                                        : 'text-gray-500 hover:bg-gray-100'}`}>
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;