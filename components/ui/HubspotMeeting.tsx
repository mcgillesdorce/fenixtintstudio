"use client";

import { useEffect, useRef } from "react";

interface HubspotMeetingProps {
  meetingUrl?: string; // kept for API compat but ignored — URL is baked into the embed
  className?: string;
}

export function HubspotMeeting({ className = "" }: HubspotMeetingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Insert the HubSpot meetings embed div
    const embedDiv = document.createElement("div");
    embedDiv.className = "meetings-iframe-container";
    embedDiv.setAttribute("data-src", "https://meetings-na2.hubspot.com/will-m?embed=true");
    container.appendChild(embedDiv);

    // Inject the HubSpot embed script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    container.appendChild(script);

    return () => {
      // Clean up on unmount
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-[700px] ${className}`}
      aria-label="Book a free estimate scheduler"
    />
  );
}
