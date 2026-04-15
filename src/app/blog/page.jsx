import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const KinKeeperDashboard = () => {
    const friends = [
        {
            "id": 1,
            "name": "Nusrat Jahan",
            "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            "email": "nusrat.jahan@gmail.com",
            "days_since_contact": 10,
            "status": "Almost due",
            "tags": [
                "university",
                "study partner"
            ],
            "bio": "Studied computer science together. Always helps with coding problems.",
            "goal": 14,
            "next_due_date": "2026-04-18"
        },
        {
            "id": 2,
            "name": "Shakil Khan",
            "picture": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            "email": "shakil.khan@example.com",
            "days_since_contact": 2,
            "status": "On-track",
            "tags": [
                "gym buddy",
                "motivation partner"
            ],
            "bio": "We push each other during workouts and track fitness goals together.",
            "goal": 7,
            "next_due_date": "2026-04-15"
        },
        {
            "id": 3,
            "name": "Farzana Akter",
            "picture": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            "email": "farzana.akter@gmail.com",
            "days_since_contact": 20,
            "status": "Overdue",
            "tags": [
                "family friend",
                "neighbor"
            ],
            "bio": "Family friend since childhood. We used to celebrate festivals together.",
            "goal": 14,
            "next_due_date": "2026-03-26"
        },
        {
            "id": 4,
            "name": "Sadia Karim",
            "picture": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            "email": "sadia.karim@gmail.com",
            "days_since_contact": 7,
            "status": "On-track",
            "tags": [
                "online friend",
                "design"
            ],
            "bio": "Connected through a design community. We share UI/UX ideas regularly.",
            "goal": 14,
            "next_due_date": "2026-04-21"
        },
        {
            "id": 5,
            "name": "Mahmudul Islam",
            "picture": "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
            "email": "mahmudul.islam@gmail.com",
            "days_since_contact": 16,
            "status": "Overdue",
            "tags": [
                "business",
                "mentor"
            ],
            "bio": "Guides me on business ideas and freelancing opportunities.",
            "goal": 14,
            "next_due_date": "2026-04-01"
        },
        {
            "id": 6,
            "name": "Tania Sultana",
            "picture": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
            "email": "tania.sultana@gmail.com",
            "days_since_contact": 9,
            "status": "Almost due",
            "tags": [
                "college",
                "travel buddy"
            ],
            "bio": "We love traveling together and exploring new places around Bangladesh.",
            "goal": 14,
            "next_due_date": "2026-04-19"
        },
        {
            "id": 7,
            "name": "Imran Hossain",
            "picture": "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
            "email": "imran.hossain@gmail.com",
            "days_since_contact": 13,
            "status": "Almost due",
            "tags": [
                "gym",
                "fitness buddy"
            ],
            "bio": "Met at the gym. Keeps me motivated to stay consistent with workouts.",
            "goal": 14,
            "next_due_date": "2026-04-15"
        },
        {
            "id": 8,
            "name": "Rahim Uddin",
            "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            "email": "rahim.uddin@gmail.com",
            "days_since_contact": 18,
            "status": "Overdue",
            "tags": [
                "school",
                "close friend"
            ],
            "bio": "Grew up together in Kaliganj. We still talk about cricket and old school memories.",
            "goal": 14,
            "next_due_date": "2026-03-28"
        }
    ];

    const stats = [
        {
            id: 1,
            label: 'Total Friends',
            value: friends.length,
        },
        {
            id: 2,
            label: 'On Track',
            value: friends.filter(f => f.status === 'on-track').length,
        },
        {
            id: 3,
            label: 'Need Attention',
            value: friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length,
        },
        {
            id: 4,
            label: 'Recent Contacts',
            value: friends.filter(f => f.days_since_contact <= 7).length,
        },
    ];

    return (
        <div className="p-8 bg-base-200 min-h-screen font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-5 mb-12">
                    <h1 className="text-5xl font-extrabold tracking-tight text-slate-800">
                        Friends to keep close
                    </h1>
                    <p className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none px-8 shadow-lg transition-all duration-300">
                        <FaPlus className="mr-2" /> Add a Friend
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((item) => (
                        <div key={item.id} className="card bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="card-body items-center text-center p-6">
                                <h2 className="text-4xl font-black text-slate-800">{item.value}</h2>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 border-t border-slate-300 pt-10">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-3xl font-bold text-slate-800">Your Friends</h3>
                        <span className="badge badge-ghost p-4 font-semibold">{friends.length} Total</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {friends.map((friend) => (
                            <div key={friend.id} className="group">
                                <div className="card bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
                                    <figure className="pt-8 transition-transform duration-300">
                                        <div className="avatar">
                                            <div className="w-24 h-24 rounded-full">
                                                <Image
                                                    src={friend.picture}
                                                    alt={friend.name}
                                                    width={100}
                                                    height={100}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </figure>

                                    <div className="card-body items-center text-center px-4 pb-8">
                                        <h2 className="text-xl font-bold text-slate-800 mb-0">{friend.name}</h2>
                                        <span className="text-slate-400 text-sm mb-4">
                                            Last contact: {friend.days_since_contact}d ago
                                        </span>

                                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                                            {friend.tags.map((tag, index) => (
                                                <div key={index} className="badge bg-[#CBFADB] badge-outline rounded-full border-slate-200 text-slate-500 text-[10px] font-bold py-3">
                                                    {tag.toUpperCase()}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="card-actions w-full">
                                            
                                            <Link
                                                href={`/blog/${friend.id}`}
                                                className={`btn btn-block btn-sm rounded-full border-none ${friend.status === 'On-track' ? 'bg-[#244D3F] text-white' : '' || friend.status === 'Almost due' ? 'bg-[#EFAD44] text-white' : '' || friend.status === 'Overdue' ? 'bg-[#EF4444] text-white' : ''}`}>
                                                    {friend.status}
                                                </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KinKeeperDashboard;