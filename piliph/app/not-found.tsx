"use client";

import React from "react";
import Link from "next/link";
import { Vote, ArrowLeft, Construction, HelpCircle, Compass } from "lucide-react";

export default function NotFound() {
return (
    <main className="flex-1 bg-[#F8F9FA] min-h-screen flex items-center justify-center p-6 text-slate-800 font-sans">
    <div className="max-w-lg w-full text-center">
        {/* Animated Badge & Icon */}
        <div className="relative inline-flex items-center justify-center mb-6">
        <div className="w-24 h-24 bg-indigo-50 border border-indigo-100 rounded-3xl flex items-center justify-center shadow-sm">
            <Construction size={44} className="text-indigo-600 animate-pulse" />
        </div>
        <span className="absolute -top-2 -right-2 bg-amber-500 text-white font-black text-xs px-2.5 py-1 rounded-full border-2 border-white shadow-sm">
            404
        </span>
        </div>

        {/* Heading & Subtitle */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
        Page Under Construction
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-md mx-auto">
        The page or feature you are looking for is currently being prepared for the upcoming election cycle, or the ballot link may have moved.
        </p>

        {/* Quick Help Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 text-left shadow-sm">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Compass size={14} className="text-indigo-600" />
            Where would you like to go?
        </div>
        
        <ul className="space-y-2 text-xs">
            <li>
            <Link
                href="/elections"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors border border-transparent hover:border-slate-200"
            >
                <span>View Candidate Listings & Races</span>
                <span className="text-indigo-600 font-bold">→</span>
            </Link>
            </li>
            <li>
            <Link
                href="/my-vote"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors border border-transparent hover:border-slate-200"
            >
                <span>Build & Print Your Sample Ballot</span>
                <span className="text-indigo-600 font-bold">→</span>
            </Link>
            </li>
            <li>
            <Link
                href="/learn"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors border border-transparent hover:border-slate-200"
            >
                <span>Voter Education & Election Rules</span>
                <span className="text-indigo-600 font-bold">→</span>
            </Link>
            </li>
        </ul>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
        >
            <ArrowLeft size={16} /> Return to Home
        </Link>
        
        <Link
            href="/my-vote"
            className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
        >
            <Vote size={16} className="text-indigo-600" /> My Sample Ballot
        </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-10 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
        <HelpCircle size={13} />
        <span>Need assistance? Check the official voter portal guide in the Learn tab.</span>
        </div>
    </div>
    </main>
);
}