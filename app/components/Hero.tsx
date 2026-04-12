import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ドキュメントヘッダー */}
        <div
          className="flex justify-between items-center pb-5 mb-12"
          style={{
            borderBottom: "2px solid var(--text)",
            animation: "heroFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Portfolio Document
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            2026 — 岩城 智啓
          </span>
        </div>

        {/* メインコンテンツ */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* テキスト */}
          <div
            className="flex-1"
            style={{
              animation: "heroFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s both",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.28em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              § 00 &nbsp; Introduction
            </p>

            <h1
              className="text-4xl md:text-[56px] font-bold leading-tight mb-5"
              style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
            >
              LP制作 × チャットボットで
              <br />
              <span style={{ color: "var(--accent2)" }}>オンライン集客</span>
              をサポート
            </h1>

            <div
              style={{
                width: "48px",
                height: "3px",
                background: "var(--accent)",
                marginBottom: "24px",
              }}
            />

            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              SE副業として、ノーコード・ローコードを活用した
              <br className="hidden md:inline" />
              LP実装・チャットボット構築をお手伝いしています。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#lp-portfolio"
                className="px-8 py-4 font-semibold text-sm tracking-wide text-center transition-opacity duration-200 hover:opacity-80"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                }}
              >
                LP制作の詳細を見る →
              </a>
              <a
                href="#contact"
                className="px-8 py-4 font-semibold text-sm tracking-wide text-center transition-colors duration-200"
                style={{
                  border: "2px solid var(--accent)",
                  color: "var(--accent)",
                  background: "transparent",
                }}
              >
                お問い合わせ
              </a>
            </div>
          </div>

          {/* キャラクター画像 */}
          <div
            className="flex-shrink-0 w-44 md:w-60"
            style={{
              animation: "heroFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.25s both",
            }}
          >
            <Image
              src="/Character_left.png"
              alt="岩城智啓"
              width={240}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
