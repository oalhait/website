"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Command {
  command: string;
  output: string;
}

interface TerminalProps {
  onToggleView?: () => void;
}

export default function Terminal({}: TerminalProps) {
  const [input, setInput] = useState("");
  const [commands, setCommands] = useState<Command[]>([]);
  const [mode, setMode] = useState<"normal" | "insert">("normal");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const validCommands = [
    "github",
    "linkedin",
    "resume",
    "email",
    "help",
    "clear",
  ];

  const links = {
    github: "https://github.com/oalhait",
    linkedin: "https://linkedin.com/in/oalhait",
    resume: "https://omar.fyi/resume",
    email: "mailto:mail@omar.fyi",
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "i" && mode === "normal") {
        e.preventDefault();
        setMode("insert");
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      } else if (e.key === "Escape") {
        setMode("normal");
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mode]);

  const openLink = (url: string) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    let output = "";
    const command = input.toLowerCase();

    switch (command) {
      case "github":
        openLink(links.github);
        output = "Opening GitHub profile...";
        break;
      case "linkedin":
        openLink(links.linkedin);
        output = "Opening LinkedIn profile...";
        break;
      case "resume":
        openLink(links.resume);
        output = "Opening resume...";
        break;
      case "email":
        openLink(links.email);
        output = "Opening email client...";
        break;
      case "help":
        output =
          "Available commands:\n- github\n- linkedin\n- resume\n- email\n- help\n- clear";
        break;
      case "clear":
        setCommands([]);
        setInput("");
        return;
      default:
        output = `Command not found: ${command}\nType 'help' for available commands`;
    }

    setCommands([...commands, { command, output }]);
    setInput("");
  };

  const isInputValidCommand = validCommands.includes(input.toLowerCase());

  return (
    <div className="min-h-screen bg-[#212121] text-[#EEFFFF] p-4">
      <div
        ref={terminalRef}
        className="max-w-3xl mx-auto h-[calc(100vh-2rem)] overflow-y-auto"
      >
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#89DDFF]">
              Omar Alhait&apos;s website
            </h1>
            <p className="text-sm opacity-75">
              Type &apos;help&apos; for available commands
            </p>
          </div>
        </div>

        {commands.map((cmd, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center">
              <span className="mr-2 text-[#C3E88D]">$</span>
              <span
                className={
                  validCommands.includes(cmd.command) ? "text-[#C3E88D]" : ""
                }
              >
                {cmd.command}
              </span>
            </div>
            <div className="whitespace-pre-line ml-4">{cmd.output}</div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="mr-2 text-[#C3E88D]">$</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-[#EEFFFF]"
              placeholder={mode === "normal" ? "Press i to insert" : ""}
              disabled={mode === "normal"}
              autoComplete="off"
              spellCheck="false"
            />
            {mode === "insert" && isInputValidCommand && (
              <div className="absolute inset-0 pointer-events-none">
                <span className="text-[#C3E88D]">{input}</span>
              </div>
            )}
          </div>
          {mode === "normal" && (
            <motion.div
              className="w-2 h-6 bg-[#C3E88D]"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </form>
      </div>
    </div>
  );
}
