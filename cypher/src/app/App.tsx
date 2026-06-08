import { useState, useEffect, useRef } from "react";
import { CypherCursor } from "./components/cypher-cursor";
import { CypherTokenMatrix } from "./components/cypher-tokens";
import { CypherTypographyScale } from "./components/cypher-typography";
import { CypherButtonLibrary } from "./components/cypher-buttons";
import { CypherInputLibrary } from "./components/cypher-inputs";
import { CypherBadgeLibrary } from "./components/cypher-badges";
import { CypherAssetContainers } from "./components/cypher-assets";

type SectionId =
  | "tokens"
  | "typography"
  | "buttons"
  | "inputs"
  | "badges"
  | "motion"
  | "cursor"
  | "assets";

const SECTIONS: { id: SectionId; label: string; mono?: boolean }[] = [
  { id: "tokens",     label: "Color Tokens",  mono: true },
  { id: "typography", label: "Typography",    mono: true },
  { id: "buttons",    label: "Buttons",       mono: true },
  { id: "inputs",     label: "Inputs",        mono: true },
  { id: "badges",     label: "Badges",        mono: true },
  { id: "motion",     label: "Motion",        mono: true },
  { id: "cursor",     label: "Cursor",        mono: true },
  { id: "assets",     label: "Assets",        mono: true },
];

function MotionShowcase() {
  const [clicked, setClicked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <p style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--cypher-text-secondary)",
        fontFamily: "var(--cypher-font-mono)",
        marginBottom: 4,
      }}>UI Motion Fluidity System — Micro-transaction Physics</p>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {/* Tactile click */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, minWidth: 240 }}>
          <p style={{
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "var(--cypher-font-mono)",
            color: "var(--cypher-text-secondary)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}>01 · Tactile Click</p>
          <button
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              backgroundColor: "var(--cypher-green)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "var(--cypher-font-sans)",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 4px 14px rgba(12,155,112,0.35)",
              transition: "transform 0.1s ease-out, box-shadow 0.15s ease",
              alignSelf: "flex-start",
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.96)"; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1.0)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1.0)"; }}
          >
            Press Me
          </button>
          <p style={{ fontSize: 11, fontFamily: "var(--cypher-font-mono)", color: "var(--cypher-text-secondary)" }}>
            :active → scale(0.96) @ 0.1s ease-out<br />
            release → scale(1.0) instant snap
          </p>
        </div>

        {/* Elevation lift */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, minWidth: 240 }}>
          <p style={{
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "var(--cypher-font-mono)",
            color: "var(--cypher-text-secondary)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}>02 · Elevation Lift</p>
          <div
            ref={cardRef}
            style={{
              padding: "16px 20px",
              borderRadius: 10,
              backgroundColor: "var(--cypher-bg-surface)",
              border: "1px solid var(--cypher-border-structural)",
              cursor: "pointer",
              transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              maxWidth: 280,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0px 12px 32px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 600, fontFamily: "var(--cypher-font-sans)", color: "var(--cypher-text-primary)", margin: 0 }}>
              Cypher Vault
            </p>
            <p style={{ fontSize: 12, fontFamily: "var(--cypher-font-sans)", color: "var(--cypher-text-secondary)", margin: "4px 0 0 0" }}>
              Hover to observe elevation lift animation
            </p>
          </div>
          <p style={{ fontSize: 11, fontFamily: "var(--cypher-font-mono)", color: "var(--cypher-text-secondary)" }}>
            :hover → translateY(-4px) + ambient shadow<br />
            0.2s cubic-bezier(0.4, 0, 0.2, 1)
          </p>
        </div>

        {/* View transition */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, minWidth: 240 }}>
          <p style={{
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "var(--cypher-font-mono)",
            color: "var(--cypher-text-secondary)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}>03 · View Entrance</p>
          <button
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              backgroundColor: "transparent",
              color: "var(--cypher-text-primary)",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "var(--cypher-font-sans)",
              border: "1px solid var(--cypher-border-structural)",
              cursor: "pointer",
              transition: "background-color 0.15s ease",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--cypher-bg-surface-hover)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
            onClick={() => {
              setClicked(false);
              setTimeout(() => setClicked(true), 50);
            }}
          >
            Replay Entrance
          </button>
          {clicked && (
            <div
              key={Date.now()}
              style={{
                padding: "12px 16px",
                borderRadius: 8,
                backgroundColor: "var(--cypher-bg-surface)",
                border: "1px solid var(--cypher-border-structural)",
                animation: "cypher-entrance 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              <p style={{ fontSize: 13, fontFamily: "var(--cypher-font-sans)", color: "var(--cypher-text-primary)", margin: 0 }}>
                View mounted ✓
              </p>
            </div>
          )}
          <p style={{ fontSize: 11, fontFamily: "var(--cypher-font-mono)", color: "var(--cypher-text-secondary)" }}>
            opacity:0 + translateY(12px) →<br />
            opacity:1 + translateY(0) @ 0.4s<br />
            cubic-bezier(0.16, 1, 0.3, 1)
          </p>
        </div>
      </div>

      <style>{`
        @keyframes cypher-entrance {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function CursorDocumentation() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <p style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--cypher-text-secondary)",
        fontFamily: "var(--cypher-font-mono)",
      }}>Custom Cursor System — Active on This Page</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {[
          {
            state: "Default Environment",
            dot: "6px solid · #0C9B70",
            ring: "24px outer · 1px stroke · 30% opacity",
            physics: "Elastic lag · cubic-bezier(0.25,1,0.5,1) · 0.15s",
            trigger: "All non-interactive areas",
          },
          {
            state: "Interactive Pointer",
            dot: "2px micro-anchor · #0C9B70",
            ring: "32px solid fill · 12% opacity tint",
            physics: "Expands to bounding box of target",
            trigger: "Buttons, links, toggles, labels",
          },
          {
            state: "Text / Code Selection",
            dot: "Morphs → vertical I-beam · 2px × 20px",
            ring: "Drops to opacity: 0",
            physics: "Breathing blink loop · ease-in-out",
            trigger: "Input fields, text areas, code blocks",
          },
        ].map((c) => (
          <div key={c.state} style={{
            padding: "16px",
            borderRadius: 8,
            border: "1px solid var(--cypher-border-structural)",
            backgroundColor: "var(--cypher-bg-surface)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}>
            <p style={{
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "var(--cypher-font-mono)",
              color: "var(--cypher-green)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              margin: 0,
            }}>{c.state}</p>
            {[
              { k: "Center dot", v: c.dot },
              { k: "Outer ring",  v: c.ring },
              { k: "Physics",     v: c.physics },
              { k: "Trigger",     v: c.trigger },
            ].map((row) => (
              <div key={row.k} style={{ display: "flex", gap: 8 }}>
                <span style={{
                  fontSize: 10,
                  fontFamily: "var(--cypher-font-mono)",
                  color: "var(--cypher-text-secondary)",
                  minWidth: 68,
                  flexShrink: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  paddingTop: 1,
                }}>{row.k}</span>
                <span style={{
                  fontSize: 11,
                  fontFamily: "var(--cypher-font-mono)",
                  color: "var(--cypher-text-primary)",
                  lineHeight: 1.5,
                }}>{row.v}</span>
              </div>
            ))}
            <div style={{
              marginTop: 4,
              padding: "8px 10px",
              borderRadius: 6,
              backgroundColor: "var(--cypher-bg-global)",
              border: "1px dashed var(--cypher-border-structural)",
            }}>
              {c.state === "Default Environment" && (
                <span style={{ fontSize: 11, fontFamily: "var(--cypher-font-sans)", color: "var(--cypher-text-secondary)" }}>
                  Move your cursor anywhere on this page
                </span>
              )}
              {c.state === "Interactive Pointer" && (
                <button style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontFamily: "var(--cypher-font-sans)",
                  color: "var(--cypher-green)",
                  padding: 0,
                }}>Hover over this link →</button>
              )}
              {c.state === "Text / Code Selection" && (
                <input
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: 11,
                    fontFamily: "var(--cypher-font-mono)",
                    color: "var(--cypher-text-primary)",
                    width: "100%",
                    outline: "none",
                    cursor: "text",
                  }}
                  defaultValue="Click inside this field"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      style={{
        padding: "48px 0",
        borderBottom: "1px solid var(--cypher-border-structural)",
        animation: "cypher-entrance 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
      }}
    >
      <h2 style={{
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "var(--cypher-font-mono)",
        color: "var(--cypher-green)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: 32,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <span style={{
          display: "inline-block",
          width: 20,
          height: 1,
          backgroundColor: "var(--cypher-green)",
          verticalAlign: "middle",
          flexShrink: 0,
        }} />
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState<SectionId>("tokens");

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "var(--cypher-bg-global)",
      fontFamily: "var(--cypher-font-sans)",
    }}>
      <CypherCursor />

      <style>{`
        @keyframes cypher-entrance {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>

      {/* Top header */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: isDark ? "rgba(5,11,20,0.90)" : "rgba(250,250,250,0.90)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--cypher-border-structural)",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              backgroundColor: "var(--cypher-navy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L12 4V7C12 10 9.5 12.5 7 13C4.5 12.5 2 10 2 7V4L7 1Z" stroke="#0C9B70" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M5 7L6.5 8.5L9 6" stroke="#0C9B70" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <span style={{
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "var(--cypher-font-sans)",
                color: "var(--cypher-text-primary)",
                letterSpacing: "-0.01em",
              }}>Cypher</span>
              <span style={{
                fontSize: 9,
                fontWeight: 700,
                fontFamily: "var(--cypher-font-mono)",
                color: "var(--cypher-text-secondary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>Design System v1.0</span>
            </div>
          </div>

          <nav style={{ display: "flex", alignItems: "center", gap: 4, overflow: "auto" }}>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  padding: "5px 10px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: activeSection === s.id ? "rgba(12,155,112,0.12)" : "transparent",
                  color: activeSection === s.id ? "var(--cypher-green)" : "var(--cypher-text-secondary)",
                  fontSize: 11,
                  fontWeight: activeSection === s.id ? 700 : 500,
                  fontFamily: "var(--cypher-font-mono)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background-color 0.15s ease, color 0.15s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              borderRadius: 8,
              border: "1px solid var(--cypher-border-structural)",
              backgroundColor: "var(--cypher-bg-surface)",
              color: "var(--cypher-text-primary)",
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--cypher-font-mono)",
              cursor: "pointer",
              flexShrink: 0,
              transition: "background-color 0.15s ease",
            }}
          >
            {isDark ? (
              <>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M6 1V0M6 12V11M11 6H12M0 6H1M9.5 2.5L10.2 1.8M1.8 10.2L2.5 9.5M9.5 9.5L10.2 10.2M1.8 1.8L2.5 2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                LIGHT
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6.5C10 8.7 8.2 10.5 6 10.5C3.8 10.5 2 8.7 2 6.5C2 4.4 3.6 2.7 5.7 2.5C4.9 3.3 4.5 4.4 4.5 5.5C4.5 7.7 6.3 9.5 8.5 9.5C9.1 9.5 9.6 9.4 10.1 9.1C10 8.6 10 7.6 10 6.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                DARK
              </>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 32px",
      }}>
        <div style={{
          padding: "64px 0 48px",
          borderBottom: "1px solid var(--cypher-border-structural)",
          animation: "cypher-entrance 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "3px 10px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(12,155,112,0.10)",
                  color: "var(--cypher-green)",
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "var(--cypher-font-mono)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "var(--cypher-green)" }} />
                  Open Source · FOSS
                </span>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "3px 10px",
                  borderRadius: 9999,
                  backgroundColor: "rgba(4,36,68,0.10)",
                  color: isDark ? "#94A3B8" : "#042444",
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "var(--cypher-font-mono)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  Atomic Design System v1.0
                </span>
              </div>
              <h1 style={{
                fontSize: 48,
                fontWeight: 800,
                fontFamily: "var(--cypher-font-sans)",
                color: "var(--cypher-text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}>
                Clinical. Secure.<br />
                <span style={{ color: "var(--cypher-green)" }}>Ultra-Minimal.</span>
              </h1>
              <p style={{
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "var(--cypher-font-sans)",
                color: "var(--cypher-text-secondary)",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 520,
              }}>
                Production-grade design token matrix, responsive typography scale, atomic interaction primitives, and unified motion physics for the Cypher platform ecosystem.
              </p>
            </div>
            <div style={{
              padding: "20px",
              borderRadius: 10,
              border: "1px solid var(--cypher-border-structural)",
              backgroundColor: "var(--cypher-bg-surface)",
              minWidth: 260,
            }}>
              {[
                { label: "Color Tokens",     value: "14 semantic" },
                { label: "Typography Scale", value: "7 variants" },
                { label: "Font Families",    value: "Inter + JetBrains Mono" },
                { label: "Button States",    value: "5 per variant" },
                { label: "Badge Variants",   value: "6 status chips" },
                { label: "Motion Curves",    value: "3 easing tokens" },
                { label: "Cursor Modes",     value: "3 context states" },
                { label: "Asset Containers", value: "6 brand marks" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "7px 0",
                  borderBottom: "1px solid var(--cypher-border-structural)",
                }}>
                  <span style={{ fontSize: 12, fontFamily: "var(--cypher-font-mono)", color: "var(--cypher-text-secondary)" }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: 12, fontFamily: "var(--cypher-font-mono)", color: "var(--cypher-green)", fontWeight: 700 }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main layout with sidebar */}
        <div style={{ display: "flex", gap: 0 }}>
          {/* Sticky sidebar */}
          <aside style={{
            width: 200,
            flexShrink: 0,
            position: "sticky",
            top: 56,
            height: "calc(100vh - 56px)",
            overflowY: "auto",
            borderRight: "1px solid var(--cypher-border-structural)",
            padding: "32px 24px 32px 0",
          }}>
            <p style={{
              fontSize: 9,
              fontWeight: 700,
              fontFamily: "var(--cypher-font-mono)",
              color: "var(--cypher-text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 12,
            }}>Sections</p>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  width: "100%",
                  padding: "7px 10px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: activeSection === s.id ? "rgba(12,155,112,0.10)" : "transparent",
                  color: activeSection === s.id ? "var(--cypher-green)" : "var(--cypher-text-secondary)",
                  fontSize: 12,
                  fontWeight: activeSection === s.id ? 700 : 500,
                  fontFamily: "var(--cypher-font-mono)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.15s ease, color 0.15s ease",
                  marginBottom: 2,
                }}
              >
                {activeSection === s.id && (
                  <span style={{ width: 3, height: 12, borderRadius: 2, backgroundColor: "var(--cypher-green)", flexShrink: 0 }} />
                )}
                {s.label}
              </button>
            ))}
          </aside>

          {/* Content */}
          <main style={{ flex: 1, padding: "0 0 0 48px", minWidth: 0 }}>
            <Section id="tokens" title="Color Token Matrix">
              <CypherTokenMatrix isDark={isDark} />
            </Section>

            <Section id="typography" title="Typography Scale">
              <CypherTypographyScale />
            </Section>

            <Section id="buttons" title="Button Primitives">
              <CypherButtonLibrary />
            </Section>

            <Section id="inputs" title="Input Field Primitives">
              <CypherInputLibrary />
            </Section>

            <Section id="badges" title="System Badges & Status Chips">
              <CypherBadgeLibrary />
            </Section>

            <Section id="motion" title="Motion Fluidity System">
              <MotionShowcase />
            </Section>

            <Section id="cursor" title="Custom Cursor System">
              <CursorDocumentation />
            </Section>

            <Section id="assets" title="Brand Asset Containers">
              <CypherAssetContainers />
            </Section>

            <div style={{ height: 80 }} />
          </main>
        </div>
      </div>
    </div>
  );
}
