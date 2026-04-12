import Image from "next/image";
import Anim from "./Anim";

const steps = [
  {
    num: "01",
    label: "ヒアリング",
    desc: "目的・ターゲット・現状課題をオンラインでヒアリング",
  },
  {
    num: "02",
    label: "提案・見積もり",
    desc: "構成案と概算費用をご提示。小さく始めて改善していく進め方を推奨",
  },
  {
    num: "03",
    label: "制作・実装",
    desc: "Claude Code / Dify 等を活用し、スピード重視で実装",
  },
  {
    num: "04",
    label: "納品・改善",
    desc: "確認後に納品。その後の修正・改善もご相談いただけます",
  },
];

const stance = [
  "まずは「0→1」で小さく始めて、一緒に改善していく進め方を大事にしています",
  "専門用語をできるだけ使わず、分かりやすく状況を共有することを意識しています",
  "基本は夜・休日の対応ですが、進捗報告はこまめに行います",
];

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        <Anim>
          <div className="flex items-baseline gap-4 mb-2">
            <span
              className="text-xs font-bold tracking-[0.22em]"
              style={{ color: "var(--accent)" }}
            >
              § 04
            </span>
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              About
            </span>
          </div>
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            自己紹介
          </h2>
          <div className="doc-rule" />
        </Anim>

        <Anim delay={100}>
          <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
            <div className="flex-shrink-0 flex flex-col items-center gap-3 mx-auto md:mx-0">
              <Image
                src="/Character_left.png"
                alt="岩城智啓"
                width={160}
                height={200}
                className="h-auto"
              />
              <div
                className="text-center pt-3"
                style={{ borderTop: "1px solid var(--border)", width: "100%" }}
              >
                <p className="font-bold text-base" style={{ color: "var(--text)" }}>
                  岩城 智啓
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  SE副業 / LP制作・チャットボット構築
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>
                本業ではシステムエンジニアとして勤務しながら、副業で「LP実装」と「小さな業務自動化」のサポートをしています。
              </p>
              <p>
                業務では Cursor などのツールを使ってテスト仕様書の作成を半自動化するなど、
                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                  「AI／ノーコードツールをうまく活用して現場の負担を減らす」
                </span>
                ことに取り組んでいます。
              </p>
              <p>
                副業でも同じスタンスで、Dify を使ったチャットボット作成・Claude Code を使ったLP実装・問い合わせ情報の自動保存など、
                <span style={{ color: "var(--accent2)", fontWeight: 600 }}>
                  「現場の手間を軽くする仕組みづくり」
                </span>
                をお手伝いしています。
              </p>

              <div
                className="p-5 mt-2"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  Stance
                </p>
                <ul className="space-y-2">
                  {stance.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="flex-shrink-0 font-bold"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Anim>

        <Anim delay={150}>
          <h3
            className="text-base font-bold mb-2 tracking-wide"
            style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
          >
            WORKFLOW — 仕事の進め方
          </h3>
          <div
            style={{ borderBottom: "1px solid var(--border)", marginBottom: "32px" }}
          />
        </Anim>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <Anim key={step.num} delay={200 + i * 80}>
              <div
                className="p-6 h-full"
                style={{
                  borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                  borderRight: i === steps.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  className="text-2xl font-bold mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.num}
                </div>
                <div
                  className="font-bold text-sm mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {step.label}
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.desc}
                </p>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  );
}
