"use client";

import React, { useState, useMemo } from "react";
import { Search, Calendar, Clock, ChevronRight, Filter, Award, Users, CheckCircle2 } from "lucide-react";

type ElectionTab = "upcoming" | "historical";

interface BaseElectionCard {
id: string;
title: string;
status: "Active" | "Upcoming" | "Concluded";
date: string;
positions: string[];
regionLevel: "national" | "senatorial" | "local";
}

interface UpcomingElectionCard extends BaseElectionCard {
daysLeft?: string;
keyDeadline?: string;
}

interface HistoricalElectionCard extends BaseElectionCard {
turnout: string;
totalVoters: string;
winningCandidates: { name: string; position: string; votes: string }[];
summary: string;
}

export default function ElectionsPage() {
const [activeTab, setActiveTab] = useState<ElectionTab>("upcoming");
const [searchQuery, setSearchQuery] = useState("");
const [selectedRegion, setSelectedRegion] = useState("all");

const upcomingElections: UpcomingElectionCard[] = [
    {
    id: "2025-midterms",
    title: "2025 Midterm Elections",
    status: "Active",
    date: "May 12, 2025",
    daysLeft: "142 Days Left",
    positions: ["Senatorial", "House of Representatives", "Local Positions"],
    keyDeadline: "Voter Registration: May 12, 2025 (53 Days Left)",
    regionLevel: "national",
    },
    {
    id: "2025-barmm",
    title: "2025 BARMM Parliamentary Elections",
    status: "Upcoming",
    date: "May 12, 2025",
    daysLeft: "142 Days Left",
    positions: ["Parliamentary Representatives", "Party Representatives"],
    keyDeadline: "Campaign Period: March 28, 2025",
    regionLevel: "local",
    },
];

const historicalElections: HistoricalElectionCard[] = [
    {
    id: "2022-presidential",
    title: "2022 Presidential Election",
    status: "Concluded",
    date: "May 9, 2022",
    positions: ["Presidential", "Vice Presidential", "Senatorial", "Local"],
    regionLevel: "national",
    turnout: "83.63%",
    totalVoters: "56,095,234",
    summary: "First nationwide victory with an absolute majority under the 1987 Constitution.",
    winningCandidates: [
        { name: "Ferdinand Marcos Jr.", position: "President", votes: "31,629,783 (58.77%)" },
        { name: "Sara Duterte", position: "Vice President", votes: "32,208,417 (61.53%)" },
        { name: "Robin Padilla", position: "Top Senatorial Candidate", votes: "26,612,434" },
    ],
    },
    {
    id: "2019-senatorial",
    title: "2019 Midterm Senatorial Election",
    status: "Concluded",
    date: "May 13, 2019",
    positions: ["Senatorial", "House of Representatives", "Local"],
    regionLevel: "senatorial",
    turnout: "75.90%",
    totalVoters: "47,296,442",
    summary: "The administration coalition achieved a sweeping victory across contested Senate seats.",
    winningCandidates: [
        { name: "Cynthia Villar", position: "Top Senatorial Candidate", votes: "25,283,727" },
        { name: "Grace Poe", position: "2nd Senatorial Candidate", votes: "22,029,788" },
        { name: "Bong Go", position: "3rd Senatorial Candidate", votes: "20,657,702" },
    ],
    },
    {
    id: "2016-presidential",
    title: "2016 Presidential Election",
    status: "Concluded",
    date: "May 9, 2016",
    positions: ["Presidential", "Vice Presidential", "Senatorial", "Local"],
    regionLevel: "national",
    turnout: "80.69%",
    totalVoters: "44,979,151",
    summary: "High-turnout election marking significant shifts in national executive leadership.",
    winningCandidates: [
        { name: "Rodrigo Duterte", position: "President", votes: "16,601,997 (39.01%)" },
        { name: "Leni Robredo", position: "Vice President", votes: "14,418,817 (35.11%)" },
        { name: "Franklin Drilon", position: "Top Senatorial Candidate", votes: "18,607,391" },
    ],
    },
];

// Filtering Logic
const filteredUpcoming = useMemo(() => {
    return upcomingElections.filter((item) => {
    const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.positions.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesRegion = selectedRegion === "all" || item.regionLevel === selectedRegion;
    return matchesSearch && matchesRegion;
    });
}, [searchQuery, selectedRegion]);

const filteredHistorical = useMemo(() => {
    return historicalElections.filter((item) => {
    const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.positions.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.winningCandidates.some((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesRegion = selectedRegion === "all" || item.regionLevel === selectedRegion;
    return matchesSearch && matchesRegion;
    });
}, [searchQuery, selectedRegion]);

return (
    <main className="flex-1 overflow-y-auto p-6 md:p-8 min-h-screen text-slate-800 font-sans">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">ELECTIONS</h1>
            <p className="text-sm text-slate-500 mt-1">
                Explore upcoming electoral races or review detailed historical election results.
            </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                type="text"
                placeholder="Search races or candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
            </div>

            <div className="relative">
                <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-8 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                >
                <option value="all">All Levels</option>
                <option value="national">National</option>
                <option value="senatorial">Senatorial</option>
                <option value="local">Local / Regional</option>
                </select>
                <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
        </div>
    </div>

    {/* Navigation Tabs */}
    <div className="flex border-b border-slate-200 mb-8">
        <button
        onClick={() => setActiveTab("upcoming")}
        className={`pb-3 px-6 font-semibold text-sm transition-all border-b-2 flex items-center gap-2 ${
            activeTab === "upcoming"
            ? "border-indigo-600 text-indigo-600"
            : "border-transparent text-slate-500 hover:text-slate-800"
        }`}
        >
        Upcoming & Active
        <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-700">
            {filteredUpcoming.length}
        </span>
        </button>
        <button
        onClick={() => setActiveTab("historical")}
        className={`pb-3 px-6 font-semibold text-sm transition-all border-b-2 flex items-center gap-2 ${
            activeTab === "historical"
            ? "border-indigo-600 text-indigo-600"
            : "border-transparent text-slate-500 hover:text-slate-800"
        }`}
        >
        Historical Archive
        <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-slate-200 text-slate-700">
            {filteredHistorical.length}
        </span>
        </button>
    </div>

    {/* Tab Content */}
    {activeTab === "upcoming" ? (
        <section className="space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Active & Scheduled Elections
        </h2>

        {filteredUpcoming.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center text-slate-500 border border-slate-200">
            No active elections match your current query or filter.
            </div>
        ) : (
            <div className="grid grid-cols-1 gap-6">
            {filteredUpcoming.map((race) => (
                <div
                key={race.id}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E2538] via-[#2D1B4E] to-[#63205D] text-white p-8 shadow-xl"
                >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                    <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30 mb-2">
                        Status: {race.status}
                    </span>
                    <h3 className="text-2xl font-bold">{race.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
                        <span className="flex items-center gap-1">
                        <Calendar size={14} /> {race.date}
                        </span>
                        <span className="flex items-center gap-1">
                        <Clock size={14} /> {race.daysLeft}
                        </span>
                    </div>
                    </div>

                    <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl text-sm shadow-md hover:bg-slate-100 transition-colors flex items-center gap-2">
                    Explore This Race
                    <ChevronRight size={16} />
                    </button>
                </div>

                <div className="border-t border-white/10 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-200">
                    <div>
                    <span className="text-slate-400 text-xs block mb-1">Positions Up For Election:</span>
                    <p className="font-medium">{race.positions.join(", ")}</p>
                    </div>
                    {race.keyDeadline && (
                    <div>
                        <span className="text-slate-400 text-xs block mb-1">Key Deadline:</span>
                        <p className="font-medium">{race.keyDeadline}</p>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        )}
        </section>
    ) : (
        <section className="space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Historical Election Archive
        </h2>

        {filteredHistorical.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center text-slate-500 border border-slate-200">
            No historical records match your search query or filter.
            </div>
        ) : (
            <div className="grid grid-cols-1 gap-6">
            {filteredHistorical.map((race) => (
                <div
                key={race.id}
                className="bg-[#1E2538] text-white rounded-2xl p-6 shadow-md border border-slate-700/80 flex flex-col justify-between transition-all hover:border-slate-500"
                >
                <div>
                    <div className="flex justify-between items-start mb-3">
                    <div>
                        <span className="bg-slate-700/80 text-slate-300 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full mr-2">
                        {race.regionLevel}
                        </span>
                        <h3 className="text-xl font-bold inline-block">{race.title}</h3>
                    </div>
                    <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 size={12} /> {race.status}
                    </span>
                    </div>

                    <p className="text-xs text-slate-400 mb-4">Election Day: {race.date}</p>

                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{race.summary}</p>

                    {/* Historical Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-indigo-400" />
                        <div>
                        <span className="text-[10px] uppercase text-slate-400 block">Voter Turnout</span>
                        <span className="text-xs font-semibold text-slate-200">{race.turnout}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award size={16} className="text-amber-400" />
                        <div>
                        <span className="text-[10px] uppercase text-slate-400 block">Total Ballots</span>
                        <span className="text-xs font-semibold text-slate-200">{race.totalVoters}</span>
                        </div>
                    </div>
                    </div>

                    {/* Winners Breakdown */}
                    <div className="mb-6">
                    <span className="text-xs font-semibold text-slate-400 block mb-2 uppercase tracking-wide">
                        Key Winners & Results:
                    </span>
                    <ul className="space-y-1.5">
                        {race.winningCandidates.map((winner, idx) => (
                        <li key={idx} className="flex justify-between text-xs bg-slate-800/40 px-3 py-1.5 rounded-md">
                            <span className="text-slate-200 font-medium">
                            {winner.name} <span className="text-slate-400">({winner.position})</span>
                            </span>
                            <span className="text-indigo-300 font-mono">{winner.votes}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>

                <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm transition-colors text-center shadow-lg shadow-indigo-600/20">
                    View Full Certified Breakdown
                </button>
                </div>
            ))}
            </div>
        )}
        </section>
    )}
    </main>
);
}