"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "SERVICES", href: "#services" },
  { label: "WORKS", href: "#lp-portfolio" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text)",
            textDecoration: "none",
          }}
        >
          Iwaki Tomohiro
        </a>

        {/* Desktop */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "28px" }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#fff",
              background: "var(--accent)",
              padding: "8px 18px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            無料相談
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--text)",
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  i === 0 && open
                    ? "translateY(6px) rotate(45deg)"
                    : i === 2 && open
                    ? "translateY(-6px) rotate(-45deg)"
                    : "none",
                opacity: i === 1 && open ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          background: "rgba(8,8,8,0.98)",
          borderTop: open ? "1px solid var(--border)" : "none",
          overflow: "hidden",
          maxHeight: open ? "280px" : "0",
          transition: "max-height 0.3s ease",
        }}
      >
        {links.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              padding: "16px 24px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
              textDecoration: "none",
              borderBottom: i < links.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
