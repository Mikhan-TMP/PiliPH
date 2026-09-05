"use client";

import React from "react";
import {
Info,
ShieldCheck,
Target,
Users,
Database,
Lock,
Heart,
ChevronRight,
Sparkles,
} from "lucide-react";

export default function AboutPage() {
return (
    <main className="flex-1 overflow-y-auto p-6 md:p-8 min-h-screen text-slate-800 font-sans">
    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-slate-200 pb-6">
        <div>
        <div className="flex items-center gap-3 mb-2">
            <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200 flex items-center gap-1.5">
            <Info size={14} /> About PiliPH
            </span>
            <span className="text-xs text-slate-500">Non-Partisan Civic Initiative</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">ABOUT THE PLATFORM</h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Empowering voters across the Philippines with objective candidate tracking, policy comparisons, and personal ballot planning.
        </p>
        </div>
    </div>

    {/* Hero Mission Card */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl relative z-10">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-2">
            Our Mission
        </span>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Informed Choice for Every Voter
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PiliPH was built to simplify voter research during Philippine election cycles. We aggregate public records, official platform statements, and legislative track records into a clean, searchable dashboard so citizens can make confident, informed decisions at the polls.
        </p>
        </div>
    </div>

    {/* Core Guiding Principles */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100 w-fit mb-4">
            <ShieldCheck size={22} />
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2">Non-Partisan & Neutral</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
            We operate independently of political parties, candidates, or campaign organizations. No candidate can pay for boosted placement or altered profiles.
        </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100 w-fit mb-4">
            <Database size={22} />
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2">Public & Verified Data</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
            Candidate profiles and voting histories are curated exclusively from public records, COMELEC filings, official statements, and credible media archives.
        </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl border border-purple-100 w-fit mb-4">
            <Lock size={22} />
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-2">Privacy First</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
            Your sample ballot choices and saved slates remain strictly private to your device/account. We do not sell or share voting preferences with third parties.
        </p>
        </div>
    </div>

    {/* Features Overview */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
        <h3 className="text-lg font-extrabold text-slate-900 mb-4">What You Can Do on PiliPH</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
            <Target size={20} className="text-indigo-600 shrink-0 mt-0.5" />
            <div>
            <h4 className="text-xs font-bold text-slate-800 mb-1">Candidate Directory & Profiles</h4>
            <p className="text-xs text-slate-500">
                Browse complete listings for national and local races, complete with party affiliations, track records, and legislative history.
            </p>
            </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
            <Users size={20} className="text-indigo-600 shrink-0 mt-0.5" />
            <div>
            <h4 className="text-xs font-bold text-slate-800 mb-1">Side-by-Side Comparison</h4>
            <p className="text-xs text-slate-500">
                Compare candidates head-to-head on key social, economic, and policy issues to see where they align with your values.
            </p>
            </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
            <Sparkles size={20} className="text-indigo-600 shrink-0 mt-0.5" />
            <div>
            <h4 className="text-xs font-bold text-slate-800 mb-1">Sample Slate Builder ("My Vote")</h4>
            <p className="text-xs text-slate-500">
                Select your preferred candidates and generate a print-ready cheat sheet to carry into the polling place on Election Day.
            </p>
            </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
            <Info size={20} className="text-indigo-600 shrink-0 mt-0.5" />
            <div>
            <h4 className="text-xs font-bold text-slate-800 mb-1">Civic Education ("Learn")</h4>
            <p className="text-xs text-slate-500">
                Access step-by-step guides on voter registration, precinct finder steps, and understanding government positions.
            </p>
            </div>
        </div>
        </div>
    </div>

    {/* Official Disclaimer Footer */}
    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
        <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
        <div>
        <strong className="font-bold block mb-0.5">Official Disclaimer:</strong>
        PiliPH is an independent voter education tool. It is not affiliated with, endorsed by, or an official representative of the Commission on Elections (COMELEC) or any Philippine government agency. All sample ballots created on this platform are for personal reference only and do not constitute an official vote.
        </div>
    </div>
    </main>
);
}