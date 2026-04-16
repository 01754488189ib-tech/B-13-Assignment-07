'use client';

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const FRIENDS_DATA = [
    { id: 1, name: "Nusrat Jahan", status: "Call" },
    { id: 2, name: "Shakil Khan", status: "Text" },
    { id: 3, name: "Farzana Akter", status: "Video" },
    { id: 4, name: "Sadia Karim", status: "Text" },
    { id: 5, name: "Mahmudul Islam", status: "Video" },
    { id: 6, name: "Tania Sultana", status: "Call" },
    { id: 7, name: "Imran Hossain", status: "Call" },
    { id: 8, name: "Rahim Uddin", status: "Video" }
];

const COLORS = ['#8b5cf6', '#1e3a3a', '#34d399'];

const FriendshipStats = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const getChartData = () => {
        let textCount = 0;
        let callCount = 0;
        let videoCount = 0;

        FRIENDS_DATA.forEach((item) => {
            if (item.status === 'Text') {
                textCount++;
            } else if (item.status === 'Call') {
                callCount++;
            } else if (item.status === 'Video') {
                videoCount++;
            }
        });
        const finalData = [
            { name: 'Text', value: textCount },
            { name: 'Call', value: callCount },
            { name: 'Video', value: videoCount }
        ];

        return finalData;
    };

    const chartData = getChartData();

    if (!isClient) {
        return (
            <div className="flex justify-center items-center h-screen text-[#244D3F]">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight pb-4">
                        Friendship Analytics
                    </h1>
                </header>

                <main className="bg-white rounded-xl shadow-sm p-8">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-emerald-900">By Interaction Type</h3>
                    </div>

                    <div className="h-90 w-full flex justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={8}
                                    cornerRadius={12}
                                    dataKey="value"
                                    isAnimationActive={true}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                            stroke="none"
                                        />
                                    ))}
                                </Pie>

                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{
                                        borderRadius: '12px',
                                        border: 'none',
                                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
                                    }}
                                />

                                <Legend
                                    verticalAlign="bottom"
                                    align="center"
                                    iconType="circle"
                                    iconSize={10}
                                    wrapperStyle={{ paddingTop: '20px' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default FriendshipStats;