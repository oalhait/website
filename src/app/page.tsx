"use client";

import { useState } from "react";
import Terminal from "@/components/terminal";
import StaticView from "@/components/static-view";

export default function Home() {
  const [isTerminal, setIsTerminal] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsTerminal(!isTerminal)}
        className="fixed top-4 right-4 bg-black text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition-colors z-50"
      >
        {isTerminal
          ? "I'm boring and want a static site featuring Omar's links"
          : "Take me back to the terminal"}
      </button>
      {isTerminal ? <Terminal /> : <StaticView />}
    </>
  );
}
