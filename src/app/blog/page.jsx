"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="flex justify-center items-center h-screen text-[#244D3F]"><span className="loading loading-spinner loading-xl"></span></div>;

    const totalFriends = friends.length;
    const onTrack = friends.filter(f => f.status === 'On-track').length;
    const needAttention = friends.filter(f => f.status === 'Overdue' || f.status === 'Almost Due').length;

    return (
        <div className="bg-[#F8FAFC] min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-16 text-center">
                <h1 className="text-4xl font-extrabold text-[#1E293B] mb-4">Friends to keep close in your life</h1>
                <p className="text-slate-500 max-w-2xl mx-auto mb-8">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className="bg-[#1B4332] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-[#143427] transition-all">
                    <span className="text-xl">+</span> Add a Friend
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-16">
                {[
                    { label: 'Total Friends', value: totalFriends },
                    { label: 'On Track', value: onTrack },
                    { label: 'Need Attention', value: needAttention },
                    { label: 'Interactions This Month', value: '12' }
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                        <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                        <div className="text-[11px] uppercase font-bold text-slate-400 mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-xl font-bold text-slate-800 mb-8">Your Friends</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {friends.map((friend) => (
                        <Link
                            href={`/blog/${friend.id}`}
                            key={friend.id}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-50 flex flex-col items-center text-center hover:shadow-md transition-all"
                        >
                            <div className="w-20 h-20 rounded-full overflow-hidden relative mb-4 border-2 border-slate-50 shadow-sm">
                                <Image src={friend.picture} alt={friend.name} fill className="object-cover" />
                            </div>

                            <h3 className="font-bold text-slate-800 text-lg mb-1">{friend.name}</h3>
                            <p className="text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-wider">62d ago</p>

                            <div className="flex flex-wrap justify-center gap-1 mb-3">
                                {friend.tags?.map((tag, i) => (
                                    <span key={i} className="bg-[#CBFADB] text-emerald-800 text-[9px] font-extrabold px-3 py-1 rounded-full uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className={`btn btn-block btn-sm rounded-full border-none ${friend.status === 'On-track' ? 'bg-[#244D3F] text-white' : '' || friend.status === 'Almost due' ? 'bg-[#EFAD44] text-white' : '' || friend.status === 'Overdue' ? 'bg-[#EF4444] text-white' : ''}`}>
                                {friend.status}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;