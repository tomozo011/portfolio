"use client";

import { useState } from "react";
import Anim from "./Anim";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/work.mail7530@gmail.com", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    outline: "none",
    width: "100%",
    padding: "12px 16px",
    fontSize: "14px",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader en="Contact" ja="お問い合わせ" />

        <div className="flex flex-col md:flex-row gap-12">
          <Anim delay={100} className="md:w-72 flex-shrink-0">
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-muted)", lineHeight: 1.9 }}
            >
              「まずは相談から」大歓迎です。
              <br />
              ざっくりしたご相談でも、具体的な形に落とし込むお手伝いをします。
            </p>
            <div
              className="p-5 space-y-3"
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg)",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Response Time
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                2〜3営業日以内にご返信します。
                <br />
                ※ 基本は夜・休日の対応となります。
              </p>
            </div>
          </Anim>

          <Anim delay={200} className="flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="ポートフォリオサイトからのお問い合わせ"
              />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div>
                <label
                  className="block text-xs font-bold mb-2"
                  style={{
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  お名前 <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="山田 太郎"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-bold mb-2"
                  style={{
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  メールアドレス <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-bold mb-2"
                  style={{
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  お問い合わせ内容 <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="ご相談内容をご記入ください。「LP制作について相談したい」「チャットボットを試してみたい」など、ざっくりした内容でも構いません。"
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "done"}
                className="px-8 py-4 font-bold text-sm tracking-wide transition-opacity duration-200 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  alignSelf: "flex-start",
                  letterSpacing: "0.05em",
                }}
              >
                {status === "sending"
                  ? "送信中..."
                  : status === "done"
                  ? "送信しました ✓"
                  : "送信する →"}
              </button>

              {status === "done" && (
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  お問い合わせありがとうございます。2〜3営業日以内にご返信します。
                </p>
              )}
              {status === "error" && (
                <p className="text-sm" style={{ color: "var(--accent)" }}>
                  送信に失敗しました。直接メールにてご連絡ください：
                  work.mail7530@gmail.com
                </p>
              )}
            </form>
          </Anim>
        </div>
      </div>
    </section>
  );
}
