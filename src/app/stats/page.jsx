'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { PieChart } from 'recharts';
import { Pie } from 'recharts';
import { Cell } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import { Tooltip } from 'recharts';
import { Legend } from 'recharts';
import { useTimeline } from '../layout';
import { IoBanOutline } from 'react-icons/io5';

const COLORS = ['#8b5cf6', '#1e3a3a', '#34d399'];

const FriendshipStats = () => {
    const { history = [] } = useTimeline();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const chartData = useMemo(() => {
        let textCount = 0;
        let callCount = 0;
        let videoCount = 0;

        history.forEach((item) => {
            if (item.type === 'Text') textCount++;
            else if (item.type === 'Call') callCount++;
            else if (item.type === 'Video') videoCount++;
        });

        const data = [
            { name: 'Text', value: textCount },
            { name: 'Call', value: callCount },
            { name: 'Video', value: videoCount }
        ];

        return data.filter(item => item.value > 0);
    }, [history]);

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

                <main className="bg-white rounded-xl p-8">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-emerald-900">By Interaction Type</h3>
                    </div>

                    <div className="h-[400px] w-full flex items-center justify-center">
                        {history.length > 0 ? (
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
                        ) : (
                            <div className="text-center py-10">
                                <div className="flex justify-center text-slate-300 mb-4">
                                    <IoBanOutline size={80} />
                                </div>
                                <h2 className="text-xl font-medium text-slate-500">No data available</h2>
                                <p className="text-slate-400 text-sm">Add some activities to your timeline first.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default FriendshipStats;