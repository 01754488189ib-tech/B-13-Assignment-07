import Image from "next/image";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";

const friends = [
    {
        "id": 1,
        "name": "Nusrat Jahan",
        "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        "email": "nusrat.jahan@gmail.com",
        "days_since_contact": 10,
        "status": "Almost due",
        "tags": ["university", "study partner"],
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
        "tags": ["gym buddy", "motivation partner"],
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
        "tags": ["family friend", "neighbor"],
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
        "tags": ["online friend", "design"],
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
        "tags": ["business", "mentor"],
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
        "tags": ["college", "travel buddy"],
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
        "tags": ["gym", "fitness buddy"],
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
        "tags": ["school", "close friend"],
        "bio": "Grew up together in Kaliganj. We still talk about cricket and old school memories.",
        "goal": 14,
        "next_due_date": "2026-03-28"
    }
];

const BlogDetailPage = async ({ params }) => {
    const { blog } = await params;
    const friend = friends.find(f => f.id === parseInt(blog));

    if (!friend) {
        return <div className="p-20 text-center text-2xl font-semibold text-gray-600">Friend not found.</div>;
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 flex flex-col gap-6">
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
                                            className="object-cover" />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center px-4 pb-8">
                                <h2 className="text-xl font-bold text-slate-800 mb-0">{friend.name}</h2>
                                <div className="card-actions">

                                    <button
                                        className={`btn btn-block btn-sm rounded-full border-none ${friend.status === 'On-track' ? 'bg-[#244D3F] text-white' : '' || friend.status === 'Almost due' ? 'bg-[#EFAD44] text-white' : '' || friend.status === 'Overdue' ? 'bg-[#EF4444] text-white' : ''}`}>
                                        {friend.status}
                                    </button>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {friend.tags.map((tag, index) => (
                                        <div key={index} className="badge bg-[#CBFADB] badge-outline rounded-full border-slate-200 text-slate-500 text-[10px] font-bold py-3">
                                            {tag.toUpperCase()}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-slate-500 text-sm mb-2 leading-relaxed">
                                    {friend.bio}
                                </p>
                                <p className="text-slate-400 text-xs font-medium">Preferred: email</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-4 rounded-2xl border border-slate-200 transition-all">
                            <RiNotificationSnoozeLine className="text-slate-400" size={20} />
                            Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-4 rounded-2xl border border-slate-200 transition-all">
                            <BsArchive className="text-slate-400" size={20} />
                            Archive
                        </button>
                        <Link href={'/blog'} className="flex items-center justify-center gap-3 bg-white hover:bg-rose-50 text-rose-500 font-semibold py-4 rounded-2xl border border-slate-200 transition-all">
                            <RiDeleteBin5Line size={20} />
                            Delete
                        </Link>
                    </div>
                </div>
                <div className="md:col-span-8 flex flex-col gap-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                            <div className="text-4xl font-bold text-slate-800 mb-1">{friend.days_since_contact}</div>
                            <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">Days Since Contact</div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                            <div className="text-4xl font-bold text-slate-800 mb-1">{friend.goal}</div>
                            <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">Goal (Days)</div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                            <div className="text-2xl font-bold text-emerald-800 mb-1 mt-2">
                                {formatDate(friend.next_due_date).split(',')[0]}
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


                        <>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50 hover:border-emerald-100 group transition-all">
                                <FiPhoneCall size={24} className="text-slate-700 group-hover:text-emerald-600" />
                                <span className="font-semibold text-slate-700 group-hover:text-emerald-700">Call</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50 hover:border-emerald-100 group transition-all">
                                <LuMessageSquareMore size={24} className="text-slate-700 group-hover:text-emerald-600" />
                                <span className="font-semibold text-slate-700 group-hover:text-emerald-700">Text</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50 hover:border-emerald-100 group transition-all">
                                <GoDeviceCameraVideo size={24} className="text-slate-700 group-hover:text-emerald-600" />
                                <span className="font-semibold text-slate-700 group-hover:text-emerald-700">Video</span>
                            </button>
                            </div>
                        </>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;