"use client";
import React, { useState } from 'react';
import { useTimeline } from "@/app/layout";
import { FiPhoneCall, FiFilter } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoBanOutline } from 'react-icons/io5';

const TimelinePage = () => {
    const { history } = useTimeline();
    const [filter, setFilter] = useState('All');

    const filteredHistory = filter === 'All'
        ? history
        : history.filter(item => item.type === filter);

    const renderIcon = (type) => {
        switch (type) {
            case 'Call': return <FiPhoneCall size={24} />;
            case 'Text': return <LuMessageSquareMore size={24} />;
            default: return <GoDeviceCameraVideo size={24} />;
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <h1 className="text-4xl font-bold text-slate-800">Timeline</h1>

                    <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-slate-100 w-fit">
                        <div className="pl-3 text-slate-400">
                            <FiFilter size={18} />
                        </div>
                        {['All', 'Call', 'Text', 'Video'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filter === type
                                        ? 'bg-slate-800 text-white shadow-md'
                                        : 'text-slate-500 hover:bg-slate-50'
                                    }`}>
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {filteredHistory.length > 0 ? (
                        filteredHistory.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-500">
                                <div className="p-3 bg-slate-50 rounded-xl text-slate-600">
                                    {renderIcon(item.type)}
                                </div>
                                <div>
                                    <h3 className="text-slate-700 font-medium">
                                        <strong className="text-slate-900">{item.type}</strong> with {item.person}
                                    </h3>
                                    <p className="text-slate-400 text-sm">Time: {item.date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl">
                            <h2 className="flex opacity-40 text-slate-400 mb-4 justify-center items-center"><IoBanOutline size={100} /></h2>
                            <p className="text-slate-400 font-medium">No {filter !== 'All' ? filter : ''} items found</p>
                            <p className="text-slate-300 text-sm">Try changing the filter or add a friend</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;