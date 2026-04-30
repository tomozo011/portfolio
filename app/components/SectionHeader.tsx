import Anim from "./Anim";

interface Props {
  en: string;
  ja: string;
}

export default function SectionHeader({ en, ja }: Props) {
  return (
    <Anim>
      <div style={{ marginBottom: "56px" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "16px",
          }}
        >
          {en}
        </p>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "var(--text)",
            letterSpacing: "-0.01em",
            marginBottom: "24px",
          }}
        >
          {ja}
        </h2>
        <div style={{ borderBottom: "1px solid var(--border)" }} />
      </div>
    </Anim>
  );
}
