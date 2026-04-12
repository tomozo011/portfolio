import Hero from "./components/Hero";
import Services from "./components/Services";
import LpPortfolio from "./components/LpPortfolio";
import ChatbotPortfolio from "./components/ChatbotPortfolio";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <LpPortfolio />
      <ChatbotPortfolio />
      <About />
      <Contact />
      <footer
        className="py-8 px-6"
        style={{
          background: "var(--bg)",
          borderTop: "2px solid var(--text)",
        }}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xs font-bold tracking-[0.15em]" style={{ color: "var(--text)" }}>
            岩城 智啓 — Portfolio
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
