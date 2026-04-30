"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", background: "var(--bg)" }}
    >
      {/* 右側の人物画像 */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "42%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.65 }}
        />
        {/* 左フェード */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #080808 0%, rgba(8,8,8,0.4) 35%, rgba(8,8,8,0) 100%)",
          }}
        />
        {/* 下フェード */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to top, #080808, transparent)",
          }}
        />
      </div>

      {/* コンテンツ */}
      <div
        className="relative flex items-center"
        style={{
          minHeight: "100vh",
          padding: "88px 24px 64px",
          maxWidth: "1024px",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "560px",
            animation: "heroFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "32px",
            }}
          >
            SE Freelance Portfolio
          </p>

          <h1
            style={{
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontSize: "clamp(2.75rem, 7vw, 5rem)",
              color: "var(--text)",
              marginBottom: "24px",
            }}
          >
            仕組みが、
            <br />
            <span style={{ color: "var(--accent)", whiteSpace: "nowrap" }}>ビジネスを変える。</span>
          </h1>

          <div
            style={{
              width: "40px",
              height: "2px",
              background: "var(--accent)",
              marginBottom: "28px",
            }}
          />

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--text-muted)",
              marginBottom: "40px",
            }}
          >
            LP制作 / チャットボット / 業務自動化
            <br />
            AIとノーコードを活用した実装で、
            <br />
            現場の課題を解決します。
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#services"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "var(--accent)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              サービスを見る →
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                border: "1px solid var(--text-muted)",
                color: "var(--text-muted)",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.borderColor = "var(--text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--text-muted)";
              }}
            >
              まずは無料相談
            </a>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "heroFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.8s both",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "0.35em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--text-muted), transparent)",
          }}
        />
      </div>
    </section>
  );
}
