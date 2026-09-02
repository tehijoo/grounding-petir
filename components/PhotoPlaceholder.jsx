import React from "react";

export default function PhotoPlaceholder({ className = "", dark = false, label = "Foto Segera Hadir" }) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-2 ${
        dark ? "bg-white/5 text-white/25" : "bg-primary/5 text-primary/25"
      } ${className}`}
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
      {label && (
        <span className="text-[10px] font-medium tracking-wide uppercase">{label}</span>
      )}
    </div>
  );
}
