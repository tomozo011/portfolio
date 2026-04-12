import Image from "next/image";
import Anim from "./Anim";

const bots = [
  {
    id: 1,
    title: "美容室の自動予約・電話対応",
    image: "/電話対応.webp",
    imagePosition: "center",
    url: "https://udify.app/chat/9YGiOREpvufR588R",
    tags: ["美容室", "予約対応", "24時間"],
    issue: "営業時間外の予約対応ができず、電話対応で業務が中断される。",
    solution: "LINEで24時間365日、AIが予約受付や変更対応を代行。スタッフは接客に集中できます。",
    result: "電話対応が1日平均8件減り、スタッフの残業時間が大幅に削減。",
  },
  {
    id: 2,
    title: "SNS投稿文の作成サポート",
    image: "/SNS_Soport.webp",
    imagePosition: "center",
    url: "https://udify.app/chat/hzvCMRU6ri6g00eV",
    tags: ["SNS運用", "投稿文作成"],
    issue: "SNS投稿のネタ探しや文章作成に時間がかかり、集客に繋がらない。",
    solution: "AIが美容室のSNS投稿をサポート。魅力的なキャプションやハッシュタグを自動生成し、集客効果を高めます。",
    result: "投稿作成時間が半分に！新規顧客からの予約が月15件以上増加。",
  },
  {
    id: 3,
    title: "地域の家賃相場を相談",
    image: "/家賃.webp",
    imagePosition: "top",
    url: "https://udify.app/chat/AIqSzzn8vs3MWbme",
    tags: ["不動産", "家賃相場"],
    issue: "家賃相場に関する問い合わせが多く、対応に時間がかかり、来店に繋がりにくい。",
    solution: "AIが地域の家賃相場や物件情報を即座に提供。お客様の疑問を解消し、来店意欲を高めます。",
    result: "家賃相場問い合わせ対応時間が30%削減。来店予約率が12%向上。",
  },
  {
    id: 4,
    title: "ECサイトの購入前サポート",
    image: "/EC_Site.webp",
    imagePosition: "top",
    url: "https://udify.app/chat/Hpde3EYkxl4OQyIo",
    tags: ["EC・通販", "購入サポート"],
    issue: "お客様からのよくある質問への対応に追われ、購入機会を逃している。",
    solution: "AIがお客様の購入前の疑問にリアルタイムで回答。不安を解消し、スムーズな購入を促します。",
    result: "お客様の疑問が即座に解決され、CVRが18%改善。",
  },
];

export default function ChatbotPortfolio() {
  return (
    <section
      id="chatbot-portfolio"
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
              § 03
            </span>
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Chatbot Portfolio
            </span>
          </div>
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            チャットボットの事例
          </h2>
          <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>
            リンクから実際のデモをお試しいただけます。
          </p>
          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            ※ 導入後の変化はイメージです。
          </p>
          <div className="doc-rule" />
        </Anim>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bots.map((bot, i) => (
            <Anim key={bot.id} delay={i * 80}>
              <div
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                }}
              >
                <div
                  className="overflow-hidden"
                  style={{
                    background: "var(--bg-card)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <Image
                    src={bot.image}
                    alt={bot.title}
                    width={600}
                    height={280}
                    className="w-full h-40 object-cover"
                    style={{ objectPosition: bot.imagePosition }}
                  />
                </div>

                <div className="p-5">
                  <h3
                    className="font-bold text-base mb-4"
                    style={{ color: "var(--text)" }}
                  >
                    {bot.title}
                  </h3>

                  <div className="mb-3">
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      課題
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {bot.issue}
                    </p>
                  </div>

                  <div
                    className="mb-3 p-3"
                    style={{ background: "var(--bg-card)", borderLeft: "3px solid var(--accent)" }}
                  >
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "var(--accent)" }}
                    >
                      解決方法
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                      {bot.solution}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      導入後の変化
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {bot.result}
                    </p>
                  </div>

                  <div
                    className="flex items-center justify-between pt-3"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <div className="flex gap-2 flex-wrap">
                      {bot.tags.map((tag) => (
                        <span key={tag} className="doc-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={bot.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold flex items-center gap-1 transition-opacity hover:opacity-70 flex-shrink-0 ml-4"
                      style={{ color: "var(--accent2)" }}
                    >
                      デモを試す
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  );
}
