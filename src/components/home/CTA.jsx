// src/components/home/CTA.jsx
import React from "react";

const CTA = ({
  title = "Are you interested\nwork with us?",
  ctaText = "Let's Talk",
}) => {
  // title supports newline \n to force a break (keeps it simple)
  const parts = title.split("\n");

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: heading */}
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
            {parts.map((p, i) => (
              <span key={i} className="block">
                {p}
              </span>
            ))}
          </h3>
        </div>

        {/* Right: CTA button */}
        <div>
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-emerald-700 text-white px-4 py-2 rounded shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            aria-label={ctaText}
          >
            <span className="text-sm font-medium">{ctaText}</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* thin divider line */}
      <div className="mt-6">
        <hr className="border-t border-gray-200/70" />
      </div>
    </section>
  );
};

export default CTA;
