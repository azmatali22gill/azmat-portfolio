"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
};

const suggestions = [
  "What are your skills?",
  "Tell me about your projects",
  "How much experience do you have?",
  "How can I contact you?",
];

const responses: { keys: string[]; reply: string }[] = [
  {
    keys: [
      "skill",
      "tech",
      "stack",
      "technolog",
      "language",
      "framework",
      "what do you know",
      "tool",
    ],
    reply: `My core stack is React, Next.js, and Node.js with TypeScript. I also work with Express, REST APIs, JWT auth, RBAC, MongoDB/Mongoose, and tools like Git, Postman, and Vercel. On the media side I use Python, FastAPI, FFmpeg, and GStreamer for video streaming pipelines.`,
  },
  {
    keys: ["project", "work", "build", "portfolio", "made", "built"],
    reply: `Here are a few things I've built end to end:\n\n\u2022 Readlink - full-stack user management system (Next.js, MongoDB, JWT, RBAC)\n\u2022 AI Support SaaS Platform - AI-powered customer support (Next.js, Node, Express, MongoDB)\n\u2022 Beloz Language Services - language interpretation & translation website\n\nCheck the Projects section above for more detail.`,
  },
  {
    keys: ["experience", "exp", "year", "how long", "background", "resume"],
    reply: `I have 2+ years of experience building production software - mainly dashboards, admin panels, and web apps across React, Next.js, and Node.`,
  },
  {
    keys: [
      "contact",
      "email",
      "reach",
      "hire",
      "connect",
      "github",
      "talk",
      "get in touch",
    ],
    reply: `The fastest way to reach me is through the Contact section below, or via my GitHub at github.com/azmatali22gill. I usually reply within a few hours.`,
  },
  {
    keys: ["about", "who", "yourself", "profile"],
    reply: `I'm Azmat Ali, a full-stack developer who cares about the boring stuff - clean architecture, secure auth, and code that stays maintainable long after launch.`,
  },
  {
    keys: ["process", "how do you work", "method", "approach", "timeline", "cost"],
    reply: `I follow a clean process: understand the problem, design the architecture, build with reusable components, and test before it reaches production. I can give you a straight answer on timeline and cost within a few hours.`,
  },
  {
    keys: ["available", "availability", "freelance", "free"],
    reply: `Yes - I'm currently available for new projects. Reach out through the Contact section and we can talk details.`,
  },
  {
    keys: ["hello", "hi", "hey", "salam", "good morning", "good evening"],
    reply: `Hey there! I'm the azmat.dev assistant. Ask me about my skills, projects, experience, or how to get in touch.`,
  },
];

const fallback = `I'm a demo assistant, so I know about Azmat's skills, projects, experience, and contact info - but that one's beyond me. Try asking something like "What are your skills?" or "Tell me about your projects".`;

function getReply(input: string): string {
  const q = input.toLowerCase();
  for (const item of responses) {
    if (item.keys.some((k) => q.includes(k))) return item.reply;
  }
  return fallback;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! I'm the azmat.dev assistant. Ask me about skills, projects, experience, or getting in touch.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    const delay = 700 + Math.min(trimmed.length * 20, 1200);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: getReply(trimmed) },
      ]);
    }, delay);
  }

  if (!mounted) return null;

  return (
    <div className={`chatbot ${open ? "open" : ""}`}>
      {open && (
        <div className="chat-window">
          <div className="chat-head">
            <span>
              <span className="chat-status"></span>
              azmat.dev assistant
            </span>
            <button
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              title="Close chat"
            >
              &times;
            </button>
          </div>

          <div className="chat-body" ref={scrollRef}>
            {messages.map((msg, i) => (
              <div className={`chat-msg ${msg.from}`} key={i}>
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <span className="chat-typing">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </div>
            )}
          </div>

          <div className="chat-suggestions">
            {suggestions.map((s) => (
              <button key={s} onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>

          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my work..."
              aria-label="Chat message"
            />
            <button type="submit" aria-label="Send message">
              &rarr;
            </button>
          </form>
        </div>
      )}

      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        title={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          "\u2715"
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.7 1.4 5.1 3.6 6.7-.1.9-.5 2.1-1.3 2.8 0 0 2.2.1 3.9-1 .8.2 1.7.3 2.6.3H12c5.5 0 10-3.9 10-8.8S17.5 3 12 3z" />
          </svg>
        )}
      </button>
    </div>
  );
}