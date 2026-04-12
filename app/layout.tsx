import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";
import FloatingNav from "./components/FloatingNav";

export const metadata: Metadata = {
  title: "岩城智啓 | LP制作・チャットボット構築",
  description:
    "LP制作 × チャットボットでオンライン集客をサポートします。システムエンジニアの副業実績をご紹介。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">
        {children}
        <FloatingNav />
        <ChatWidget />
      </body>
    </html>
  );
}
