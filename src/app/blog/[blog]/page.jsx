"use client";
import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";
import { useTimeline } from "@/app/layout";
import { toast } from "react-toastify";

const BlogDetailPage = ({ params }) => {
    const resolvedParams = use(params);
    const blogId = resolvedParams.blog;

    const { addLog } = useTimeline();
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('/data.json');
                const data = await res.json();
                const foundFriend = data.find(f => f.id.toString() === blogId.toString());
                setFriend(foundFriend);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [blogId]);

    if (loading) return <div className="p-20 text-center font-bold text-slate-600 animate-pulse">Friend is  <span className="loading loading-spinner loading-xl"></span>  loading...</div>
    else if (!friend) return <div className="flex justify-center items-center h-screen text-[#244D3F]"><span className="loading loading-spinner loading-xl"></span></div>;


    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString('en-US');
    };

    const handleAction = (type) => {
        addLog(type, friend.name);
        toast.success(`${type} recorded with ${friend.name}!`, {
            position: "bottom-center",
        });
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-6xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    <div className="md:col-span-4 flex flex-col gap-6">
                        <div className="card bg-white shadow-sm border border-slate-100 p-6 rounded-3xl">
                            <figure className="flex justify-center pt-4">
                                <div className="avatar">
                                    <div className="w-24 h-24 rounded-full border-4 border-slate-50 relative overflow-hidden">
                                        <Image src={friend.picture} alt={friend.name} fill className="object-cover" />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center px-0 pb-4">
                                <h2 className="text-xl font-bold text-slate-800 mt-2">{friend.name}</h2>
                                <button className={`btn btn-xs rounded-full border-none px-4 my-2 text-white capitalize ${friend.status === 'On-track' ? 'bg-[#244D3F]' :
                                    friend.status === 'Almost due' ? 'bg-[#EFAD44]' : 'bg-[#EF4444]'
                                    }`}>
                                    {friend.status}
                                </button>
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {friend.tags?.map((tag, index) => (
                                        <div key={index} className="badge bg-[#CBFADB] text-emerald-700 text-[10px] font-bold py-3 border-none uppercase">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-slate-500 text-sm italic">{friend.bio}</p>
                                <p className="text-xs text-slate-400 mt-2">Preferred: {friend.preferred_contact || 'email'}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button onClick={() => handleUtilityAction('Snooze')} className="flex items-center justify-center gap-3 bg-white text-slate-700 font-semibold py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
                                <RiNotificationSnoozeLine size={20} /> Snooze 2 Weeks
                            </button>
                            <button onClick={() => handleUtilityAction('Archive')} className="flex items-center justify-center gap-3 bg-white text-slate-700 font-semibold py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
                                <BsArchive size={20} /> Archive
                            </button>
                            <Link href="/blog" className="flex items-center justify-center gap-3 bg-white text-rose-500 font-semibold py-4 rounded-2xl border border-slate-200 hover:bg-rose-50 transition-all">
                                <RiDeleteBin5Line size={20} /> Delete
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-8 flex flex-col gap-6">

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                                <div className="text-4xl font-bold text-slate-800 mb-1">{friend.days_since_contact}</div>
                                <div className="text-xs font-medium text-slate-400 uppercase tracking-wide text-nowrap">Days Since Contact</div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                                <div className="text-4xl font-bold text-slate-800 mb-1">{friend.goal}</div>
                                <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">Goal (Days)</div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                                <div className="text-2xl font-bold text-slate-800 mb-1 mt-2">
                                    {formatDate(friend.next_due_date)}
                                </div>
                                <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">Next Due</div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-slate-800">Relationship Goal</h3>
                                <button className="text-sm font-semibold text-slate-400 bg-slate-50 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">Edit</button>
                            </div>
                            <p className="text-slate-600 font-medium">Connect every <span className="text-slate-800 font-bold">{friend.goal} days</span></p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-800 mb-6">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <button onClick={() => handleAction('Call')} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50 group transition-all">
                                    <FiPhoneCall size={24} className="group-hover:text-emerald-600 transition-colors" />
                                    <span className="font-semibold group-hover:text-emerald-700">Call</span>
                                </button>
                                <button onClick={() => handleAction('Text')} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50 group transition-all">
                                    <LuMessageSquareMore size={24} className="group-hover:text-emerald-600 transition-colors" />
                                    <span className="font-semibold group-hover:text-emerald-700">Text</span>
                                </button>
                                <button onClick={() => handleAction('Video')} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50 group transition-all">
                                    <GoDeviceCameraVideo size={24} className="group-hover:text-emerald-600 transition-colors" />
                                    <span className="font-semibold group-hover:text-emerald-700">Video</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;