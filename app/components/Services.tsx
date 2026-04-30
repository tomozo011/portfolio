import Anim from "./Anim";
import SectionHeader from "./SectionHeader";

const pricing = [
  {
    label: "LP実装",
    sub: "デザインあり",
    price: "¥30,000〜",
    note: "Figma・画像・既存サイトから実装",
  },
  {
    label: "LP実装",
    sub: "デザインなし",
    price: "¥50,000〜",
    note: "構成のたたき台から作成",
  },
  {
    label: "チャットボット",
    sub: "シンプル",
    price: "¥10,000〜",
    note: "FAQ・問い合わせボット",
  },
  {
    label: "チャットボット",
    sub: "中程度",
    price: "¥30,000〜",
    note: "複数フロー・外部連携あり",
  },
  {
    label: "LP＋ボット",
    sub: "セット",
    price: "¥60,000〜",
    note: "まとめてご依頼の場合",
    highlight: true,
  },
];

const services = [
  {
    num: "01",
    title: "LP制作 / 改善",
    description:
      "Figma・既存サイト・参考画像から、成果につながるLPを実装します。デザインのたたき台作成も対応。Claude Codeを活用した高速実装で、修正サイクルも迅速に回します。",
  },
  {
    num: "02",
    title: "LP × チャットボット導線設計",
    description:
      "LPにチャットボットを組み込み、訪問者が問い合わせしやすい導線を設計。ファーストビューから問い合わせまでの離脱を減らし、CVRの改善を目指します。",
  },
  {
    num: "03",
    title: "チャットボット構築",
    description:
      "Dify等のノーコードツールで、FAQ・予約対応・問い合わせボットを素早く構築します。フルスクラッチ不要で低コスト対応。既存の業務フローに合わせた設計が可能です。",
  },
  {
    num: "04",
    title: "業務自動化 / AI活用",
    description:
      "問い合わせ→スプレッドシート自動保存、フォーム送信→メール通知など、繰り返しの手作業をAIとAPIで自動化。現場の「小さな手間」を積み上げて解消します。",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader en="Services" ja="提供サービス" />

        <div>
          {services.map((s, i) => (
            <Anim key={s.num} delay={i * 90}>
              <div
                className="flex gap-8 py-9"
                style={{
                  borderBottom:
                    i < services.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="flex-shrink-0 w-10 pt-1">
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: "var(--accent)",
                    }}
                  >
                    {s.num}
                  </span>
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ color: "var(--text)", letterSpacing: "-0.01em" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)", lineHeight: 1.8 }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            </Anim>
          ))}
        </div>

        {/* 料金目安 */}
        <Anim delay={100}>
          <div
            className="mt-16 pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "24px",
              }}
            >
              Pricing
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
              {pricing.map((p, i) => (
                <div
                  key={i}
                  className="p-5"
                  style={{
                    borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                    borderTop: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    borderRight: i === pricing.length - 1 ? "1px solid var(--border)" : "none",
                    background: p.highlight ? "var(--bg)" : "transparent",
                    position: "relative",
                  }}
                >
                  {p.highlight && (
                    <span
                      className="absolute top-0 left-0 right-0 text-center"
                      style={{
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        background: "var(--accent)",
                        color: "#fff",
                        padding: "3px 0",
                        textTransform: "uppercase",
                      }}
                    >
                      BEST
                    </span>
                  )}
                  <div style={{ paddingTop: p.highlight ? "18px" : "0" }}>
                    <p
                      className="text-xs font-bold mb-0.5"
                      style={{ color: "var(--text)" }}
                    >
                      {p.label}
                    </p>
                    <p
                      className="text-xs mb-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {p.sub}
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{
                        color: p.highlight ? "var(--accent)" : "var(--text)",
                      }}
                    >
                      {p.price}
                    </p>
                    <p
                      className="text-xs mt-2 leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {p.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
              ※ 規模・内容によって異なります。まずはお気軽にご相談ください。
            </p>
          </div>
        </Anim>
      </div>
    </section>
  );
}
