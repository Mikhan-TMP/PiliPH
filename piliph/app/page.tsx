'use client';

import React, { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Presidential');

  const categories = [
    'Presidential',
    'Vice Presidential',
    'Senatorial',
    'Local Candidates',
  ];

  return (
    <section className="relative text-white min-h-screen py-16 px-6 md:px-12 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        
        {/* Header Content */}
        <div className="space-y-4">
          <span className="text-sm text-slate-400 select-none">Empowering Filipino Voters</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight select-none">
            <span className="text-indigo-500 ">Know who's running.</span> <br />
            <span className="text-indigo-900 text-5xl md:text-6xl">See where they stand.</span><br />
            <span className="text-indigo-500">Vote with confidence.</span>
          </h1>
        </div>
        {/* Divider */}
        <div className="border-t border-slate-700 my-8" />
        {/* Category Selector */}
        <div className="space-y-4">
          <p className="text-md md:text-lg text-slate-900 font-medium select-none">
            What are you looking for? <br />
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center select-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  selectedCategory === category
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Comparisons Card Section */}
        <div className="pt-6 w-full max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-xl font-bold text-slate-600 flex items-center gap-2">
              <span role="img" aria-label="fire">🔥</span> Popular Comparisons
            </h2>
            <span className="text-xs text-indigo-300 uppercase tracking-wider font-semibold">
              {selectedCategory}
            </span>
          </div>

          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm text-left">
            <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-6">
              <h3 className="text-lg font-bold text-white tracking-wide">
              </h3>
              <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full font-medium">
                Head-to-Head
              </span>
            </div>

            {/* Candidate Comparison Metrics */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* CANDIDATE A */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
                    Candidate A
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Bet A</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Experience</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Education</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700/50">
                  <span className="text-xs text-slate-400">Policy Match</span>
                  <p className="text-2xl font-extrabold text-indigo-400 mt-0.5">78%</p>
                </div>
              </div>

              {/* CANDIDATE B */}
              <div className="space-y-4 border-l border-slate-700/50 pl-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                    Candidate B
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Bet B</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Experience</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-slate-400 h-full rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Education</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-slate-400 h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700/50">
                  <span className="text-xs text-slate-400">Policy Match</span>
                  <p className="text-2xl font-extrabold text-slate-300 mt-0.5">64%</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}