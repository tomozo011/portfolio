import Image from "next/image";
import Anim from "./Anim";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    num: "01",
    label: "ヒアリング",
    desc: "目的・ターゲット・現状課題をオンラインで整理します",
  },
  {
    num: "02",
    label: "提案・見積もり",
    desc: "構成案と概算費用をご提示。小さく始める進め方を推奨",
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
  "まず小さく動くものを作り、一緒に改善していくスタンスで進めます",
  "専門用語を使わず、状況をこまめに共有します",
  "基本は夜・休日の対応ですが、レスポンスは迅速に行います",
];

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader en="About" ja="自己紹介" />

        <Anim delay={100}>
          <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
            <div className="flex-shrink-0 flex flex-col items-center gap-3 mx-auto md:mx-0">
              <Image
                src="/hero.jpg"
                alt="岩城智啓"
                width={160}
                height={200}
                className="object-cover object-top"
                style={{ width: "160px", height: "200px", filter: "grayscale(20%)" }}
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

            <div
              className="flex-1 space-y-4 text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                システムエンジニアとして業務改善・開発に取り組みながら、
                副業でLP制作・チャットボット構築・業務自動化の支援をしています。
              </p>
              <p>
                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                  「AIとノーコードツールを活用して、現場の負担を減らす仕組みをつくる」
                </span>
                が一貫したテーマです。本業でも Cursor・Claude Codeを使って手作業を半自動化し、
                その実践から得た知見を副業に活かしています。
              </p>
              <p>
                スピードと透明性を大切に、
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                  「小さく始めて一緒に改善する」
                </span>
                スタンスで取り組みます。
                専門用語を使わず、状況をこまめに共有しながら進めます。
              </p>

              <div
                className="p-5 mt-2"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "14px",
                  }}
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
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "16px",
            }}
          >
            Workflow
          </p>
          <div style={{ borderBottom: "1px solid var(--border)", marginBottom: "32px" }} />
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
                  style={{ color: "var(--accent)", letterSpacing: "0.05em" }}
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
