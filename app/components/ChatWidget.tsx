"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const GREETING = "こんにちは！LP制作やチャットボット構築についてお気軽にご質問ください。";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages([...nextMessages, assistantMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) throw new Error("API error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: accumulated,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "申し訳ありません、エラーが発生しました。しばらくしてから再度お試しください。",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* チャットパネル */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "88px",
            right: "24px",
            width: "360px",
            maxHeight: "520px",
            display: "flex",
            flexDirection: "column",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            zIndex: 1000,
            overflow: "hidden",
          }}
        >
          {/* ヘッダー */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
              borderBottom: "1px solid var(--border)",
              background: "var(--bg)",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "var(--text)",
                }}
              >
                お問い合わせ AI
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                padding: "4px",
                lineHeight: 1,
                fontSize: "18px",
              }}
              aria-label="閉じる"
            >
              ✕
            </button>
          </div>

          {/* メッセージエリア */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: msg.role === "user" ? "#fff" : "var(--text)",
                    background:
                      msg.role === "user"
                        ? "var(--accent)"
                        : "var(--bg)",
                    border: msg.role === "assistant"
                      ? "1px solid var(--border)"
                      : "none",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.content}
                  {loading && i === messages.length - 1 && msg.role === "assistant" && msg.content === "" && (
                    <span style={{ color: "var(--text-muted)" }}>▋</span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* 入力エリア */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "flex-end",
              gap: "8px",
              padding: "12px",
              background: "var(--bg)",
              flexShrink: 0,
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="メッセージを入力…"
              rows={1}
              style={{
                flex: 1,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                fontSize: "13px",
                padding: "8px 12px",
                resize: "none",
                outline: "none",
                fontFamily: "inherit",
                lineHeight: "1.5",
                maxHeight: "96px",
                overflowY: "auto",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{
                background: input.trim() && !loading ? "var(--accent)" : "var(--border)",
                color: input.trim() && !loading ? "#fff" : "var(--text-muted)",
                border: "none",
                cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                padding: "8px 14px",
                fontSize: "13px",
                fontWeight: 700,
                fontFamily: "inherit",
                transition: "background 0.15s",
                flexShrink: 0,
                alignSelf: "flex-end",
              }}
            >
              送信
            </button>
          </div>
        </div>
      )}

      {/* トグルボタン */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "チャットを閉じる" : "チャットを開く"}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "var(--accent)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          zIndex: 1001,
          transition: "transform 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
