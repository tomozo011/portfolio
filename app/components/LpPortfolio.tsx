import Image from "next/image";
import Anim from "./Anim";
import SectionHeader from "./SectionHeader";

const works = [
  {
    id: "01",
    title: "銀河果実いちごジャム",
    description:
      "女子高生をターゲットにしたいちごジャムのLP。「銀河果実」というブランド名から宇宙・銀河をビジュアルモチーフに採用し、SNSでシェアしたくなる没入感のある世界観を構築。購入ボタンへ自然に流れる導線を意識した構成にしました。",
    image: "/glaxly.png",
    url: "https://galaxy-jam-lp.vercel.app/",
    tags: ["LP制作", "SNS映え", "食品・ギフト"],
  },
  {
    id: "02",
    title: "AURUM WHEY",
    description:
      "ボディメイク志向の20〜30代向けプロテインのLP。NOIRとBLANCの2フレーバーを左右で対比させた構成で選ぶ楽しさを演出。高級感のある世界観を一貫させながら、商品画像の見せ方にこだわりました。",
    image: "/protin.png",
    url: "https://aurum-whey-n2k4dbxmz-tomozo011s-projects.vercel.app/",
    tags: ["LP制作", "高級感", "フィットネス"],
  },
];

export default function LpPortfolio() {
  return (
    <section
      id="lp-portfolio"
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader en="LP Portfolio" ja="制作実績・デモ作品" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, i) => (
            <Anim key={work.id} delay={i * 150}>
              <div style={{ border: "1px solid var(--border)" }}>
                <div
                  className="overflow-hidden"
                  style={{ background: "var(--bg-card)" }}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={600}
                    height={360}
                    className="w-full h-52 object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6" style={{ background: "var(--bg)" }}>
                  <div
                    className="flex items-start justify-between mb-3"
                    style={{
                      borderBottom: "1px solid var(--border)",
                      paddingBottom: "12px",
                    }}
                  >
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "var(--text)" }}
                    >
                      {work.title}
                    </h3>
                    <span
                      className="text-xs font-bold mt-1"
                      style={{ color: "var(--text-muted)", letterSpacing: "0.05em" }}
                    >
                      No.{work.id}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--text-muted)", lineHeight: 1.8 }}
                  >
                    {work.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {work.tags.map((tag) => (
                        <span key={tag} className="doc-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold flex items-center gap-1 transition-opacity hover:opacity-70 flex-shrink-0 ml-4"
                      style={{ color: "var(--accent)" }}
                    >
                      サイトを見る
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

        <p
          className="text-xs mt-8 text-right"
          style={{ color: "var(--text-muted)" }}
        >
          ※ 実績は順次追加予定です。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
