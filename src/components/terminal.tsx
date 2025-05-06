"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Command {
  command: string;
  output: string;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [commands, setCommands] = useState<Command[]>([]);
  const [mode, setMode] = useState<"normal" | "insert">("normal");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const links = {
    github: "https://github.com/omarfyi",
    linkedin: "https://linkedin.com/in/omarfyi",
    resume: "https://resume.omar.fyi",
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

  return (
    <div className="min-h-screen bg-black text-green-500 p-4">
      <div
        ref={terminalRef}
        className="max-w-3xl mx-auto h-[calc(100vh-2rem)] overflow-y-auto"
      >
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Hi I&apos;m Omar Alhait</h1>
          <p className="text-sm opacity-75">
            Type &apos;help&apos; for available commands
          </p>
        </div>

        {commands.map((cmd, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center">
              <span className="mr-2">$</span>
              <span>{cmd.command}</span>
            </div>
            <div className="whitespace-pre-line ml-4">{cmd.output}</div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-green-500"
            placeholder={mode === "normal" ? "Press i to insert" : ""}
            disabled={mode === "normal"}
            autoComplete="off"
            spellCheck="false"
          />
          {mode === "normal" && (
            <motion.div
              className="w-2 h-6 bg-green-500"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </form>
      </div>
    </div>
  );
}
