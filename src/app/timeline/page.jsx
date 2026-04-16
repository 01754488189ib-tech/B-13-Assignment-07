"use client";
import React from 'react';
import { useTimeline } from "@/app/layout";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoBanOutline } from 'react-icons/io5';

const TimelinePage = () => {
    const { history = [] } = useTimeline();

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
                <h1 className="text-4xl font-bold text-slate-800 mb-8">Timeline</h1>

                <div className="flex flex-col gap-4">
                    {history.length > 0 ? (
                        history.map((item) => (
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
                            <p className="text-slate-400 font-medium">No timeline items found</p>
                            <p className="text-slate-300 text-sm">Add a friend to see their timeline</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;