"use client";

import { useState } from "react";
import clsx from "clsx";

interface LivePollCardProps {
  location: string;
  trendingLabel: string;
  question: string;
  options: string[];
  votesSuffix: string;
  rewardLabel: string;
  locale: "ar" | "en";
}

const BASE_VOTES = [1087, 774, 412, 146];

export default function LivePollCard({
  location,
  trendingLabel,
  question,
  options,
  votesSuffix,
  rewardLabel,
  locale,
}: LivePollCardProps) {
  const [votes, setVotes] = useState<number[]>(BASE_VOTES);
  const [chosen, setChosen] = useState<number | null>(null);

  const total = votes.reduce((a, b) => a + b, 0);
  const voted = chosen !== null;

  const handleVote = (i: number) => {
    if (voted) return;
    setVotes((prev) => prev.map((v, idx) => (idx === i ? v + 1 : v)));
    setChosen(i);
  };

  const formattedTotal = total.toLocaleString(
    locale === "ar" ? "ar-EG" : "en-US"
  );

  return (
    <aside
      className="bg-white rounded-3xl p-6 border border-black/[0.06] shadow-[0_30px_60px_-30px_rgba(27,37,89,.28)] w-full max-w-[440px]"
      aria-label="Live poll"
    >
      {/* Header */}
      <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono uppercase tracking-wider">
        <span className="inline-flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span>{location}</span>
        </span>
        <span>{trendingLabel}</span>
      </div>

      {/* Question */}
      <h3 className="text-[19px] leading-snug font-bold text-navy mt-3.5 mb-[18px]">
        {question}
      </h3>

      {/* Options */}
      <div className="flex flex-col gap-2">
        {options.map((label, i) => {
          const pct = voted ? Math.round((votes[i] / total) * 100) : null;
          const isChosen = chosen === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleVote(i)}
              disabled={voted}
              className={clsx(
                "relative flex items-center justify-between px-4 py-3 rounded-[14px] border bg-white overflow-hidden text-[15px] font-medium text-navy transition-colors duration-200",
                voted ? "cursor-default" : "cursor-pointer hover:border-green",
                isChosen ? "border-green" : "border-gray-200"
              )}
            >
              {/* Fill bar */}
              <span
                className={clsx(
                  "absolute inset-y-0 start-0 z-0 transition-[width] duration-700 ease-[cubic-bezier(.2,.7,.2,1)]",
                  isChosen
                    ? "bg-gradient-to-r from-green/25 to-green/10"
                    : "bg-green-light"
                )}
                style={{ width: voted ? `${pct}%` : "0%" }}
              />

              {/* Label + tick */}
              <span className="relative z-[1] flex items-center gap-2.5">
                <span
                  className={clsx(
                    "w-[18px] h-[18px] rounded-full border-[1.5px] inline-flex items-center justify-center transition-colors",
                    isChosen ? "bg-green border-green" : "border-gray-200"
                  )}
                >
                  {isChosen && (
                    <svg
                      viewBox="0 0 12 12"
                      className="w-2.5 h-2.5"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2.5,6.5 5,9 9.5,3.5" />
                    </svg>
                  )}
                </span>
                <span>{label}</span>
              </span>

              {/* Percent */}
              <span
                className={clsx(
                  "relative z-[1] font-mono text-[13px]",
                  voted ? "text-navy font-semibold" : "text-gray-400"
                )}
              >
                {voted ? `${pct}%` : "—"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3.5 pt-3.5 border-t border-black/[0.06] text-xs text-gray-400 font-mono tracking-wider">
        <span>
          {formattedTotal} {votesSuffix}
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-light text-green-hover font-semibold text-[11px] uppercase">
          +5 <span>{rewardLabel}</span>
        </span>
      </div>
    </aside>
  );
}
