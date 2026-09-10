"use client";

import React, { useState } from "react";
import {
Sliders,
MapPin,
Bell,
Trash2,
Moon,
Sun,
Shield,
Save,
CheckCircle2,
RefreshCw,
Eye,
} from "lucide-react";

export default function SettingsPage() {
const [region, setRegion] = useState("ncr");
const [city, setCity] = useState("pasig");
const [sortBy, setSortBy] = useState("ballot-number");
const [darkMode, setDarkMode] = useState(false);
const [notifyDebates, setNotifyDebates] = useState(true);
const [notifyDeadlines, setNotifyDeadlines] = useState(true);
const [savedSuccess, setSavedSuccess] = useState(false);

const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
};

const handleResetBallot = () => {
    if (confirm("Are you sure you want to clear your current sample ballot? This action cannot be undone.")) {
    localStorage.removeItem("pili_ph_ballot");
    alert("Sample ballot reset successfully.");
    }
};

return (
    <main className="flex-1 overflow-y-auto p-6 md:p-8 min-h-screen text-slate-800 font-sans">
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
        <div>
        <div className="flex items-center gap-3 mb-2">
            <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200 flex items-center gap-1.5">
            <Sliders size={14} /> Preferences & Control
            </span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">SETTINGS</h1>
        <p className="text-sm text-slate-500 mt-1 max-w-xl">
            Configure your registered voter region, ballot display options, and data management preferences.
        </p>
        </div>

        <button
        onClick={handleSave}
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-2 shadow-md shrink-0 self-start sm:self-auto"
        >
        <Save size={16} /> Save Changes
        </button>
    </div>

    {savedSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 shadow-sm animate-fade-in">
        <CheckCircle2 size={16} className="text-emerald-600" />
        Settings saved successfully! Your candidate listings and sample ballot have updated.
        </div>
    )}

    <div className="max-w-4xl space-y-6">
        {/* 1. Location Settings (Crucial for PH local elections) */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <MapPin size={20} />
            </div>
            <div>
            <h2 className="text-base font-bold text-slate-900">Voter Location & District</h2>
            <p className="text-xs text-slate-500">Determines local mayor, vice mayor, councilor, and district representative listings.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Region
            </label>
            <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            >
                <option value="ncr">National Capital Region (NCR)</option>
                <option value="region-4a">Region IV-A (CALABARZON)</option>
                <option value="region-3">Region III (Central Luzon)</option>
                <option value="region-7">Region VII (Central Visayas)</option>
                <option value="region-11">Region XI (Davao Region)</option>
                <option value="barmm">BARMM</option>
            </select>
            </div>

            <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                City / Municipality
            </label>
            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            >
                <option value="pasig">Pasig City</option>
                <option value="quezon-city">Quezon City</option>
                <option value="manila">City of Manila</option>
                <option value="cebu-city">Cebu City</option>
                <option value="davao-city">Davao City</option>
            </select>
            </div>
        </div>
        </section>

        {/* 2. Ballot Display Options */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <Eye size={20} />
            </div>
            <div>
            <h2 className="text-base font-bold text-slate-900">Ballot & Display Preferences</h2>
            <p className="text-xs text-slate-500">Customize how candidate options and sample ballots are formatted.</p>
            </div>
        </div>

        <div className="space-y-4">
            <div className="flex items-center justify-between">
            <div>
                <p className="text-xs font-bold text-slate-800">Default Candidate Sorting</p>
                <p className="text-[11px] text-slate-500">How candidates appear in election listings</p>
            </div>
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
            >
                <option value="ballot-number">Official Ballot Number (#)</option>
                <option value="alphabetical">Alphabetical (A - Z)</option>
                <option value="match-score">Match Score (%)</option>
            </select>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div>
                <p className="text-xs font-bold text-slate-800">Interface Theme</p>
                <p className="text-[11px] text-slate-500">Toggle dark mode interface</p>
            </div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 transition-colors flex items-center gap-2 text-xs font-semibold"
            >
                {darkMode ? <Sun size={16} className="text-amber-500" /> : <Moon size={16} className="text-indigo-600" />}
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            </div>
        </div>
        </section>

        {/* 3. Notifications */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <Bell size={20} />
            </div>
            <div>
            <h2 className="text-base font-bold text-slate-900">Notifications & Alerts</h2>
            <p className="text-xs text-slate-500">Stay updated on key voter deadlines and events.</p>
            </div>
        </div>

        <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div>
                <p className="text-xs font-bold text-slate-800">Official Candidate Debates & Forums</p>
                <p className="text-[11px] text-slate-500">Alerts when livestreamed debates begin</p>
            </div>
            <input
                type="checkbox"
                checked={notifyDebates}
                onChange={(e) => setNotifyDebates(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
            />
            </label>

            <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <div>
                <p className="text-xs font-bold text-slate-800">COMELEC Voter Deadlines</p>
                <p className="text-[11px] text-slate-500">Reminders for voter registration and precinct checks</p>
            </div>
            <input
                type="checkbox"
                checked={notifyDeadlines}
                onChange={(e) => setNotifyDeadlines(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
            />
            </label>
        </div>
        </section>

        {/* 4. Data Management & Privacy */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <Shield size={20} />
            </div>
            <div>
            <h2 className="text-base font-bold text-slate-900">Data & Privacy Management</h2>
            <p className="text-xs text-slate-500">Control your locally saved preferences and sample ballot data.</p>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
            <p className="text-xs font-bold text-slate-800">Clear Sample Ballot Data</p>
            <p className="text-[11px] text-slate-500">Resets all candidate choices stored on your sample cheat sheet.</p>
            </div>
            <button
            onClick={handleResetBallot}
            className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
            >
            <Trash2 size={14} /> Clear Ballot Data
            </button>
        </div>
        </section>
    </div>
    </main>
);
}