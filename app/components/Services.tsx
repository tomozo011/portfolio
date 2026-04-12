import Anim from "./Anim";

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
    label: "LP＋チャットボット",
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
      "いただいたデザイン（Figma・画像・既存サイト）をもとに実装。デザインがない場合もシンプルな構成からたたき台を作成します。",
  },
  {
    num: "02",
    title: "LP × チャットボット導線設計",
    description:
      "LPとチャットボットを組み合わせ、訪問者が問い合わせしやすい導線を設計・実装します。",
  },
  {
    num: "03",
    title: "チャットボット構築",
    description:
      "Dify等のノーコードツールを使い、FAQ対応・問い合わせボットを素早く構築します。フルスクラッチ不要で低コスト対応。",
  },
  {
    num: "04",
    title: "小さな業務自動化",
    description:
      "問い合わせ→スプレッドシート自動保存、チャットボット→メール通知など、手作業をちょっとだけ自動化します。",
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
        <Anim>
          <div className="flex items-baseline gap-4 mb-2">
            <span
              className="text-xs font-bold tracking-[0.22em]"
              style={{ color: "var(--accent)" }}
            >
              § 01
            </span>
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Services
            </span>
          </div>
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            提供サービス
          </h2>
          <div className="doc-rule" />
        </Anim>

        <div>
          {services.map((s, i) => (
            <Anim key={s.num} delay={i * 90}>
              <div
                className="flex gap-8 py-8"
                style={{
                  borderBottom:
                    i < services.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="flex-shrink-0 w-10 pt-1">
                  <span
                    className="text-xl font-bold"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.num}
                  </span>
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.description}
                  </p>
                </div>
                <div
                  className="hidden md:block flex-shrink-0 w-1 self-stretch"
                  style={{ background: "var(--border)" }}
                />
              </div>
            </Anim>
          ))}
        </div>

        {/* 料金目安 */}
        <Anim delay={100}>
          <div
            className="mt-14 pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              料金目安
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
                      className="absolute top-0 left-0 right-0 text-center text-[10px] font-bold tracking-widest"
                      style={{
                        background: "var(--accent)",
                        color: "#fff",
                        padding: "2px 0",
                        fontSize: "10px",
                      }}
                    >
                      おすすめ
                    </span>
                  )}
                  <div style={{ paddingTop: p.highlight ? "14px" : "0" }}>
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
                      style={{ color: p.highlight ? "var(--accent2)" : "var(--text)" }}
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
            <p
              className="text-xs mt-4"
              style={{ color: "var(--text-muted)" }}
            >
              ※ 規模・内容によって異なります。まずはお気軽にご相談ください。
            </p>
          </div>
        </Anim>
      </div>
    </section>
  );
}
