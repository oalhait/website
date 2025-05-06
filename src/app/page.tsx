"use client";

import { useState, useEffect } from "react";
import Terminal from "@/components/terminal";
import StaticView from "@/components/static-view";

export default function Home() {
  const [isTerminal, setIsTerminal] = useState(true);

  useEffect(() => {
    // Check if we're on a mobile device (viewport width <= 768px)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsTerminal(false);
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setIsTerminal(!isTerminal)}
        className="fixed top-4 right-4 bg-[#212121] text-[#82AAFF] border border-[#82AAFF] px-4 py-2 rounded hover:bg-[#82AAFF] hover:text-[#212121] transition-colors z-50 text-sm font-mono"
      >
        {isTerminal
          ? "I'm boring and want a static site"
          : "Take me to the terminal"}
      </button>
      {isTerminal ? (
        <Terminal onToggleView={() => setIsTerminal(false)} />
      ) : (
        <StaticView />
      )}
    </>
  );
}
