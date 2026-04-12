"use client";

import { useEffect, useState } from "react";

export default function FloatingNav() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setShowScrollTop(y > 300);
      // ヒーローセクションを過ぎたら表示（約600px）
      setShowCta(y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* スティッキーCTA — 左下 */}
      <a
        href="#contact"
        aria-label="お問い合わせはこちら"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 18px",
          background: "var(--accent)",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.05em",
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          zIndex: 999,
          textDecoration: "none",
          opacity: showCta ? 1 : 0,
          transform: showCta ? "translateY(0)" : "translateY(12px)",
          pointerEvents: showCta ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = showCta ? "1" : "0")}
      >
        まずは無料相談
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>

      {/* トップへ戻るボタン — ChatWidgetの真上 */}
      <button
        onClick={scrollToTop}
        aria-label="ページトップへ戻る"
        style={{
          position: "fixed",
          bottom: "92px",
          right: "24px",
          width: "44px",
          height: "44px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          zIndex: 999,
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "translateY(0)" : "translateY(12px)",
          pointerEvents: showScrollTop ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease, background 0.15s, color 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--accent)";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderColor = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--bg-card)";
          e.currentTarget.style.color = "var(--text-muted)";
          e.currentTarget.style.borderColor = "var(--border)";
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
