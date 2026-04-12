import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `あなたは岩城智啓のポートフォリオサイトに設置されたAIアシスタントです。
訪問者からの問い合わせや質問に、丁寧かつ簡潔に答えてください。

【岩城智啓について】
- 本業: システムエンジニア（AI・ノーコードツールを業務活用中）
- 副業: LP制作・チャットボット構築
- 使用技術: Claude Code（LP実装）、Dify（チャットボット）、ノーコード・ローコードツール全般

【提供サービス】
1. LP制作 / 改善
   - Figma・画像・既存サイトをもとに実装
   - デザインがない場合もたたき台を作成可能
2. LP × チャットボット導線設計
   - LPとチャットボットを組み合わせた集客導線の設計・実装
3. チャットボット構築
   - Dify等のノーコードツールを使ったFAQ・問い合わせボット
4. 小さな業務自動化
   - 問い合わせ→スプレッドシート保存、チャットボット→メール通知など

【料金・納期】
- 規模や内容によって異なるため、まずはヒアリングのうえお見積もりをご提示します
- 小さく始めて改善していくアプローチを推奨しています

【対応時間・進め方】
- 基本は夜・休日対応（本業との兼業のため）
- 返信は2〜3営業日以内
- ヒアリング → 提案・見積 → 制作・実装 → 納品・改善 の流れ

【スタンス】
- 「まず0→1で動くものを作り、一緒に改善していく」進め方を大切にしています
- 専門用語を使わず、わかりやすい言葉で状況を共有します

【回答ルール】
- 回答は150文字以内を目安に、端的に答えてください
- 具体的な相談には、問い合わせフォームへ自然に誘導してください（「まずはお気軽にお問い合わせください」等）
- 答えられない質問（個人情報、契約内容など）は「詳細はお問い合わせください」と案内してください
- 日本語で回答してください`;

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as { messages: Message[] };

  const stream = client.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
