"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, createContext, useContext, useCallback } from 'react';
import { ToastContainer } from "react-toastify";

const TimelineContext = createContext(null);

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) throw new Error("useTimeline must be used within a TimelineProvider");
  return context;
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [history, setHistory] = useState([]);

  const addLog = useCallback((type, person) => {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    setHistory(prev => [{
      id: Date.now(),
      type,
      person,
      date: timestamp
    }, ...prev]);
  }, []);

  return (
    <html lang="en" data-theme="light" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <TimelineContext.Provider value={{ history, addLog }}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </TimelineContext.Provider>
        <ToastContainer />
      </body>
    </html>
  );
}