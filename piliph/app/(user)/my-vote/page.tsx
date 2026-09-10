    "use client";

    import React, { useState } from "react";
    import {
    CheckCircle2,
    Trash2,
    Share2,
    Printer,
    Plus,
    AlertCircle,
    HelpCircle,
    Sparkles,
    ChevronRight,
    UserCheck,
    } from "lucide-react";

    interface Candidate {
    id: string;
    ballotNumber?: number;
    name: string;
    party: string;
    avatar: string;
    matchScore?: number;
    }

    interface PositionCategory {
    id: string;
    title: string;
    maxSeats: number;
    description: string;
    selectedCandidates: Candidate[];
    }

    export default function MyVotePage() {
    const [selectedElection, setSelectedElection] = useState("2025-midterms");

    // Initial state for sample ballot
    const [ballot, setBallot] = useState<PositionCategory[]>([
        {
        id: "president",
        title: "President",
        maxSeats: 1,
        description: "Select 1 candidate for Chief Executive.",
        selectedCandidates: [
            {
            id: "pres-1",
            ballotNumber: 1,
            name: "Maria Leonor Robredo",
            party: "Liberal Party",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
            matchScore: 94,
            },
        ],
        },
        {
        id: "vice-president",
        title: "Vice President",
        maxSeats: 1,
        description: "Select 1 candidate for Vice President.",
        selectedCandidates: [],
        },
        {
        id: "senators",
        title: "Senators",
        maxSeats: 12,
        description: "Select up to 12 candidates for the Senate.",
        selectedCandidates: [
            {
            id: "sen-1",
            ballotNumber: 15,
            name: "Risa Hontiveros",
            party: "Akbayan",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
            matchScore: 88,
            },
            {
            id: "sen-2",
            ballotNumber: 3,
            name: "Bam Aquino",
            party: "KNP",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
            matchScore: 85,
            },
            {
            id: "sen-3",
            ballotNumber: 8,
            name: "Chel Diokno",
            party: "Akbayan",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
            matchScore: 91,
            },
        ],
        },
        {
        id: "party-list",
        title: "Party-List Representative",
        maxSeats: 1,
        description: "Select 1 registered Party-List group.",
        selectedCandidates: [],
        },
        {
        id: "mayor",
        title: "City Mayor",
        maxSeats: 1,
        description: "Select 1 candidate for local chief executive.",
        selectedCandidates: [
            {
            id: "may-1",
            ballotNumber: 2,
            name: "Vico Sotto",
            party: "Independent",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
            matchScore: 96,
            },
        ],
        },
    ]);

    const removeCandidate = (positionId: string, candidateId: string) => {
        setBallot((prev) =>
        prev.map((pos) => {
            if (pos.id === positionId) {
            return {
                ...pos,
                selectedCandidates: pos.selectedCandidates.filter((c) => c.id !== candidateId),
            };
            }
            return pos;
        })
        );
    };

    const totalSlotsFilled = ballot.reduce((acc, curr) => acc + curr.selectedCandidates.length, 0);
    const totalMaxSlots = ballot.reduce((acc, curr) => acc + curr.maxSeats, 0);
    const totalPositionsComplete = ballot.filter(
        (b) => b.selectedCandidates.length === b.maxSeats
    ).length;

    return (
        <main className="flex-1 overflow-y-auto p-6 md:p-8 min-h-screen text-slate-800 font-sans print:p-2 print:bg-white print:text-black">
        {/* Printable CSS override to force single-page layout rules */}
        <style>{`
            @media print {
            @page {
                size: A4 portrait;
                margin: 12mm;
            }
            body {
                background: white !important;
                color: black !important;
            }
            }
        `}</style>

        {/* Printable Sheet Compact Header */}
        <div className="hidden print:block border-b-2 border-slate-900 pb-3 mb-4">
            <div className="flex justify-between items-end">
            <div>
                <h1 className="text-xl font-bold uppercase tracking-tight text-black">
                VOTER'S SAMPLE BALLOT / CHEAT SHEET
                </h1>
                <p className="text-xs text-slate-600">2025 National & Local Elections</p>
            </div>
            <div className="text-right text-xs text-slate-500">
                <span>Personal Reference Guide</span>
            </div>
            </div>
        </div>

        {/* Screen-Only Top Banner & Header */}
        <div className="print:hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-slate-200 pb-6">
            <div>
            <div className="flex items-center gap-3 mb-2">
                <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200 flex items-center gap-1.5">
                <UserCheck size={14} /> Personal Slate Builder
                </span>
                <span className="text-xs text-slate-500">Private to your account</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">MY SAMPLE BALLOT</h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
                Curate your preferred candidates for the upcoming election. Use this list as a voting guide on Election Day or share your endorsement slate.
            </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
            <select
                value={selectedElection}
                onChange={(e) => setSelectedElection(e.target.value)}
                className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer shadow-sm"
            >
                <option value="2025-midterms">2025 National & Local Midterms</option>
                <option value="2025-barmm">2025 BARMM Elections</option>
            </select>

            <button
                onClick={() => window.print()}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm rounded-xl transition-all border border-slate-200 flex items-center gap-2 shadow-sm"
            >
                <Printer size={16} /> Print Cheat Sheet
            </button>

            <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-2 shadow-md">
                <Share2 size={16} /> Share Slate
            </button>
            </div>
        </div>

        {/* Screen-Only Progress Bar */}
        <div className="print:hidden grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1 ">
                Overall Selection Progress
            </span>
            <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-2xl font-extrabold text-slate-900">
                {totalSlotsFilled} / {totalMaxSlots}
                </span>
                <span className="text-xs text-slate-500">total candidate slots filled</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                <div
                className="bg-indigo-600 h-full transition-all duration-500"
                style={{ width: `${(totalSlotsFilled / totalMaxSlots) * 100}%` }}
                />
            </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">
                Positions Completed
            </span>
            <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-2xl font-extrabold text-emerald-600">
                {totalPositionsComplete} / {ballot.length}
                </span>
                <span className="text-xs text-slate-500">races fully decided</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
                {ballot.length - totalPositionsComplete} positions still require selection.
            </p>
            </div>

            <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-5 flex items-center justify-between shadow-sm flex-wrap gap-5">
            <div>
                <span className="text-xs text-indigo-700 font-bold uppercase tracking-wider block mb-1">
                Need Help Deciding?
                </span>
                <p className="text-xs text-slate-600">
                Compare candidates side-by-side based on platform, track record, and voting history.
                </p>
            </div>
            <button className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 shadow-sm">
                Compare <ChevronRight size={14} />
            </button>
            </div>
        </div>

        {/* Main Ballot Sections (Converts to 2 columns when printing) */}
        <div className="space-y-6 print:space-y-0 print:grid print:grid-cols-2 print:gap-4 print:items-start">
            {ballot.map((position) => {
            const isFull = position.selectedCandidates.length === position.maxSeats;
            const isEmpty = position.selectedCandidates.length === 0;

            return (
                <div
                key={position.id}
                className={`rounded-2xl border transition-all bg-white shadow-sm print:shadow-none print:border-slate-300 print:rounded-lg print:p-2.5 print:break-inside-avoid ${
                    isFull
                    ? "border-slate-200"
                    : isEmpty
                    ? "border-amber-200/80 bg-amber-50/20 print:bg-white"
                    : "border-indigo-200/80"
                }`}
                >
                {/* Position Header */}
                <div className="p-5 print:p-0 border-b border-slate-100 print:border-b-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                    <div className="flex items-center gap-3 print:gap-2">
                        <h2 className="text-lg print:text-xs font-bold text-slate-900 print:uppercase print:tracking-wide">
                        {position.title}
                        </h2>
                        <span
                        className={`text-xs print:text-[10px] px-2.5 print:px-1.5 py-0.5 rounded-full font-semibold border ${
                            isFull
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200 print:bg-transparent print:border-none print:p-0 print:text-slate-500"
                            : isEmpty
                            ? "bg-amber-50 text-amber-700 border-amber-200 print:bg-transparent print:border-none print:p-0 print:text-slate-400"
                            : "bg-indigo-50 text-indigo-700 border-indigo-200 print:bg-transparent print:border-none print:p-0 print:text-slate-500"
                        }`}
                        >
                        ({position.selectedCandidates.length}/{position.maxSeats})
                        </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 print:hidden">{position.description}</p>
                    </div>

                    {!isFull && (
                    <button className="print:hidden self-start sm:self-auto px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border border-indigo-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5">
                        <Plus size={14} /> Add {position.title}
                    </button>
                    )}
                </div>

                {/* Selected Candidates List */}
                <div className="p-5 print:p-0 print:mt-1.5">
                    {isEmpty ? (
                    <>
                        <div className="print:hidden p-6 rounded-xl border border-dashed border-slate-200 text-center flex flex-col items-center justify-center bg-slate-50/50">
                        <AlertCircle size={24} className="text-amber-500 mb-2" />
                        <p className="text-sm font-bold text-slate-700">No candidate selected yet</p>
                        <p className="text-xs text-slate-500 mt-0.5 mb-3">
                            Browse candidates from the Compare or Elections page to add them to your slate.
                        </p>
                        <button className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 shadow-sm">
                            Browse {position.title} Candidates <ChevronRight size={14} />
                        </button>
                        </div>
                        {/* Compact Print Fallback */}
                        <p className="hidden print:block text-[11px] text-slate-400 italic">
                        [ Unselected ]
                        </p>
                    </>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-1 gap-4 print:gap-1">
                        {position.selectedCandidates.map((candidate) => (
                        <div
                            key={candidate.id}
                            className="bg-slate-50/80 border border-slate-200 hover:border-slate-300 rounded-xl p-4 print:p-1 print:bg-transparent print:border-none flex items-center justify-between gap-3 group transition-all"
                        >
                            <div className="flex items-center gap-3 print:gap-2 overflow-hidden">
                            {/* Avatar - hidden on print */}
                            <img
                                src={candidate.avatar}
                                alt={candidate.name}
                                className="print:hidden w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0"
                            />

                            {/* Ballot Number Badge for Print */}
                            {candidate.ballotNumber && (
                                <span className="hidden print:inline-flex items-center justify-center w-5 h-5 rounded border border-black font-bold text-[11px] shrink-0 text-black">
                                #{candidate.ballotNumber}
                                </span>
                            )}

                            <div className="truncate">
                                <h3 className="text-sm print:text-[12px] font-bold text-slate-900 print:text-black truncate">
                                {candidate.name}
                                </h3>
                                <p className="text-xs print:text-[10px] text-slate-500 print:text-slate-600 truncate">
                                {candidate.party}
                                </p>
                                {candidate.matchScore && (
                                <span className="print:hidden inline-flex items-center gap-1 text-[10px] text-emerald-600 mt-1 font-semibold">
                                    <Sparkles size={10} /> {candidate.matchScore}% Platform Match
                                </span>
                                )}
                            </div>
                            </div>

                            {/* Trash Button - hidden on print */}
                            <button
                            onClick={() => removeCandidate(position.id, candidate.id)}
                            className="print:hidden p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                            title="Remove candidate from ballot"
                            >
                            <Trash2 size={16} />
                            </button>
                        </div>
                        ))}

                        {!isFull && (
                        <div className="print:hidden p-4 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs font-medium bg-slate-50/30">
                            +{position.maxSeats - position.selectedCandidates.length} slot(s) remaining
                        </div>
                        )}
                    </div>
                    )}
                </div>
                </div>
            );
            })}
        </div>

        {/* Print-Only Footer */}
        <div className="hidden print:block mt-6 pt-3 border-t border-slate-300 text-[10px] text-slate-500 text-center">
            Informational cheat sheet for personal reference only. Not an official ballot or vote submission.
        </div>

        {/* Screen-Only Footer / Disclaimer Notice */}
        <div className="print:hidden mt-12 p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 text-xs text-slate-500 shadow-sm">
            <HelpCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
            <p>
            <strong>Notice:</strong> This sample ballot is purely an informational personal planning tool. It does not constitute an official vote or electronic ballot submission. Official voting must be conducted at your designated polling place on Election Day.
            </p>
        </div>
        </main>
    );
    }