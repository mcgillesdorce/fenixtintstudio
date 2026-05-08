"use client";

import { useState } from "react";

interface HubspotMeetingProps {
  meetingUrl: string;
  className?: string;
}

export function HubspotMeeting({ meetingUrl, className = "" }: HubspotMeetingProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full min-h-[700px] ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02] rounded-2xl border border-white/[0.08]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-6 h-6 border border-white/20 border-t-white/60 rounded-full animate-spin" />
            <span className="text-xs text-zinc-500 uppercase tracking-widest">
              Loading scheduler…
            </span>
          </div>
        </div>
      )}
      <iframe
        src={meetingUrl}
        title="Book a free estimate with Fenix Tint Studio"
        loading="lazy"
        className={`w-full min-h-[700px] border-0 rounded-2xl transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
