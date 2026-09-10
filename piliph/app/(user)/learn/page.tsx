"use client";

import React, { useState } from "react";
import {
BookOpen,
Search,
CheckCircle,
HelpCircle,
AlertTriangle,
Calendar,
FileText,
ExternalLink,
ChevronRight,
Sparkles,
Info,
Layers,
} from "lucide-react";

interface GuideArticle {
id: string;
category: "voter-basics" | "government-roles" | "fact-checking" | "election-day";
title: string;
summary: string;
readTime: string;
icon: React.ReactNode;
badge?: string;
}

export default function LearnPage() {
const [searchQuery, setSearchQuery] = useState("");
const [selectedCategory, setSelectedCategory] = useState<string>("all");

const articles: GuideArticle[] = [
    {
    id: "voter-status",
    category: "voter-basics",
    title: "How to Verify Your Precinct & Voter Registration Status",
    summary: "Step-by-step instructions on checking if your voter record is active through the COMELEC portal.",
    readTime: "3 min read",
    icon: <CheckCircle className="text-emerald-500" size={20} />,
    badge: "Essential",
    },
    {
    id: "election-day-checklist",
    category: "election-day",
    title: "Election Day Checklist: What to Bring and Expect",
    summary: "Valid IDs, proper attire rules, valid ballot shade procedures, and how optical mark readers (VCMs) work.",
    readTime: "5 min read",
    icon: <Calendar className="text-indigo-500" size={20} />,
    badge: "Must Read",
    },
    {
    id: "roles-senate-vs-house",
    category: "government-roles",
    title: "Understanding Government Offices: Senate vs. House vs. Local",
    summary: "Learn what legislative powers Senators hold versus District and Party-List Representatives.",
    readTime: "6 min read",
    icon: <Layers className="text-blue-500" size={20} />,
    },
    {
    id: "partylist-system",
    category: "government-roles",
    title: "How the Party-List System Works in the Philippines",
    summary: "A breakdown of marginalized sectors representation, seat allocation formulas, and criteria.",
    readTime: "4 min read",
    icon: <FileText className="text-purple-500" size={20} />,
    },
    {
    id: "spotting-fake-news",
    category: "fact-checking",
    title: "How to Spot Electoral Misinformation & Fake Polls",
    summary: "Red flags for edited videos, unverified survey infographics, and techniques for cross-checking claims.",
    readTime: "4 min read",
    icon: <AlertTriangle className="text-amber-500" size={20} />,
    },
    {
    id: "voter-rights",
    category: "voter-basics",
    title: "Your Rights as a Voter & Reporting Electoral Offenses",
    summary: "What to do if you encounter vote-buying, voter intimidation, or machine failure at your precinct.",
    readTime: "5 min read",
    icon: <Info className="text-cyan-500" size={20} />,
    },
];

const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === "all" || art.category === selectedCategory;
    const matchesSearch =
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
});

return (
    <main className="flex-1 overflow-y-auto p-6 md:p-8  min-h-screen text-slate-800 font-sans">
    {/* Top Banner */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-slate-200 pb-6">
        <div>
        <div className="flex items-center gap-3 mb-2">
            <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200 flex items-center gap-1.5">
            <BookOpen size={14} /> Voter Education Hub
            </span>
            <span className="text-xs text-slate-500">Non-partisan Civics Guide</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">LEARN & PREPARE</h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Understand how the Philippine electoral process works, learn about office responsibilities, and arm yourself with accurate facts before voting.
        </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input
            type="text"
            placeholder="Search guides, terms, roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm"
        />
        </div>
    </div>

    {/* Category Pills */}
    <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        {[
        { id: "all", label: "All Guides" },
        { id: "voter-basics", label: "Voter Registration & Rights" },
        { id: "election-day", label: "Election Day Rules" },
        { id: "government-roles", label: "Government Positions" },
        { id: "fact-checking", label: "Fact-Checking & News" },
        ].map((cat) => (
        <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
            selectedCategory === cat.id
                ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
        >
            {cat.label}
        </button>
        ))}
    </div>

    {/* Grid of Articles */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredArticles.map((article) => (
        <div
            key={article.id}
            className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
        >
            <div>
            <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                {article.icon}
                </div>
                {article.badge && (
                <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {article.badge}
                </span>
                )}
            </div>

            <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                {article.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">{article.summary}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
            <span className="text-[11px] font-medium text-slate-400">{article.readTime}</span>
            <span className="text-xs font-semibold text-indigo-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Guide <ChevronRight size={14} />
            </span>
            </div>
        </div>
        ))}
    </div>

    {/* Quick Reference Box: Official Resources */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <Sparkles size={20} />
        </div>
        <div>
            <h2 className="text-base font-bold text-slate-900">Official COMELEC Links</h2>
            <p className="text-xs text-slate-500">Direct tools hosted by the Commission on Elections</p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
            href="https://precinctfinder.comelec.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 transition-all flex items-center justify-between group"
        >
            <div>
            <p className="text-xs font-bold text-slate-800">Precinct Finder</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Locate your voting venue</p>
            </div>
            <ExternalLink size={14} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
        </a>

        <a
            href="https://comelec.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 transition-all flex items-center justify-between group"
        >
            <div>
            <p className="text-xs font-bold text-slate-800">Official COMELEC Portal</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Resolutions and announcements</p>
            </div>
            <ExternalLink size={14} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
        </a>

        <a
            href="https://namfrel.org.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 transition-all flex items-center justify-between group"
        >
            <div>
            <p className="text-xs font-bold text-slate-800">NAMFREL Watch</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Election monitoring resources</p>
            </div>
            <ExternalLink size={14} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
        </a>
        </div>
    </div>
    </main>
);
}