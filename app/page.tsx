import Hero from "./components/Hero";
import Services from "./components/Services";
import LpPortfolio from "./components/LpPortfolio";
import ChatbotPortfolio from "./components/ChatbotPortfolio";
import About from "./components/About";
import Contact from "./components/Contact";

const footerLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "WORKS", href: "#lp-portfolio" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

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
        className="py-10 px-6"
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text)",
            }}
          >
            Iwaki Tomohiro
          </span>
          <div className="flex gap-6">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
            © 2026 Iwaki Tomohiro. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
