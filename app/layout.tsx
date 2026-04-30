import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import ChatWidget from "./components/ChatWidget";
import FloatingNav from "./components/FloatingNav";

export const metadata: Metadata = {
  title: "岩城智啓 | LP制作・チャットボット・業務自動化",
  description:
    "SE副業として、LP制作・チャットボット構築・業務自動化をAIとノーコードを活用して提供しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">
        <Nav />
        {children}
        <FloatingNav />
        <ChatWidget />
      </body>
    </html>
  );
}
