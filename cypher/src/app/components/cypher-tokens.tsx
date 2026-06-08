interface TokenSwatchProps {
  token: string;
  hex: string;
  label: string;
  light?: boolean;
}

function TokenSwatch({ token, hex, label, light = false }: TokenSwatchProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{
        width: "100%",
        height: 56,
        borderRadius: 6,
        backgroundColor: hex,
        border: light ? "1px solid var(--cypher-border-structural)" : "none",
        position: "relative",
        overflow: "hidden",
      }}>
        {light && (
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)",
          }} />
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{
          fontSize: 11,
          fontWeight: 600,
          fontFamily: "var(--cypher-font-mono)",
          color: "var(--cypher-text-primary)",
        }}>{token}</span>
        <span style={{
          fontSize: 11,
          fontFamily: "var(--cypher-font-mono)",
          color: "var(--cypher-text-secondary)",
        }}>{hex}</span>
        <span style={{
          fontSize: 10,
          fontFamily: "var(--cypher-font-sans)",
          color: "var(--cypher-text-secondary)",
        }}>{label}</span>
      </div>
    </div>
  );
}

interface SurfaceRowProps {
  token: string;
  hex: string;
  label: string;
  textPreview?: boolean;
  dark?: boolean;
}

function SurfaceRow({ token, hex, label, textPreview = false, dark = false }: SurfaceRowProps) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "10px 0",
      borderBottom: "1px solid var(--cypher-border-structural)",
    }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: hex,
        flexShrink: 0,
        border: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid var(--cypher-border-structural)",
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontSize: 11,
          fontWeight: 600,
          fontFamily: "var(--cypher-font-mono)",
          color: "var(--cypher-text-primary)",
          margin: 0,
        }}>{token}</p>
        <p style={{
          fontSize: 11,
          fontFamily: "var(--cypher-font-mono)",
          color: "var(--cypher-text-secondary)",
          margin: "2px 0 0 0",
        }}>{hex} · {label}</p>
      </div>
    </div>
  );
}

export function CypherTokenMatrix({ isDark }: { isDark: boolean }) {
  const lightSurfaces = [
    { token: "--cypher-bg-global",        hex: "#FAFAFA",  label: "Neutral canvas backdrop" },
    { token: "--cypher-bg-surface",       hex: "#FFFFFF",  label: "Card containers, inputs, menus" },
    { token: "--cypher-bg-surface-hover", hex: "#F1F5F9",  label: "List tile hover state" },
    { token: "--cypher-text-primary",     hex: "#1E293B",  label: "Headings — maximum legibility" },
    { token: "--cypher-text-secondary",   hex: "#64748B",  label: "Captions and descriptions" },
    { token: "--cypher-border-structural",hex: "#E2E8F0",  label: "Data/content separation strokes" },
  ];

  const darkSurfaces = [
    { token: "--cypher-bg-global",        hex: "#050B14",  label: "Pure midnight canvas" },
    { token: "--cypher-bg-surface",       hex: "#0B1324",  label: "Floating element tiles" },
    { token: "--cypher-bg-surface-hover", hex: "#131E36",  label: "Active list item fill" },
    { token: "--cypher-text-primary",     hex: "#F8FAFC",  label: "Off-white readable text" },
    { token: "--cypher-text-secondary",   hex: "#94A3B8",  label: "Dimmed slate for secondary" },
    { token: "--cypher-border-structural",hex: "#1E293B",  label: "Low-contrast boundaries" },
  ];

  const surfaces = isDark ? darkSurfaces : lightSurfaces;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* Brand Core */}
      <div>
        <p style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--cypher-text-secondary)",
          fontFamily: "var(--cypher-font-mono)",
          marginBottom: 16,
        }}>Brand Core Tokens</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <TokenSwatch
            token="--cypher-navy"
            hex="#042444"
            label="Base Foundation: Deep secure navy for dominant backgrounds & headers"
          />
          <TokenSwatch
            token="--cypher-green"
            hex="#0C9B70"
            label="Active Accent: Clinical safety green for links, toggles, & states"
          />
        </div>
      </div>

      {/* Surface System */}
      <div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}>
          <p style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--cypher-text-secondary)",
            fontFamily: "var(--cypher-font-mono)",
            margin: 0,
          }}>
            {isDark ? "Dark Mode" : "Light Mode"} Surface System
          </p>
          <span style={{
            fontSize: 10,
            fontFamily: "var(--cypher-font-mono)",
            color: "var(--cypher-green)",
          }}>6 semantic tokens</span>
        </div>
        <div>
          {surfaces.map((s) => (
            <SurfaceRow key={s.token} {...s} dark={isDark} />
          ))}
        </div>
      </div>

      {/* Motion tokens */}
      <div>
        <p style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--cypher-text-secondary)",
          fontFamily: "var(--cypher-font-mono)",
          marginBottom: 12,
        }}>Motion Timing Tokens</p>
        {[
          { token: "--cypher-ease-tactile", value: "cubic-bezier(0.4, 0, 0.2, 1)", label: "Elevation lift · 0.2s" },
          { token: "--cypher-ease-entrance", value: "cubic-bezier(0.16, 1, 0.3, 1)", label: "View entrance · 0.4s" },
          { token: "--cypher-ease-cursor",   value: "cubic-bezier(0.25, 1, 0.5, 1)", label: "Cursor inertia · 0.15s" },
        ].map((m) => (
          <div key={m.token} style={{
            padding: "10px 0",
            borderBottom: "1px solid var(--cypher-border-structural)",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}>
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "var(--cypher-font-mono)",
                color: "var(--cypher-text-primary)",
                margin: 0,
              }}>{m.token}</p>
              <p style={{
                fontSize: 11,
                fontFamily: "var(--cypher-font-mono)",
                color: "var(--cypher-green)",
                margin: "2px 0 0 0",
              }}>{m.value}</p>
              <p style={{
                fontSize: 10,
                fontFamily: "var(--cypher-font-sans)",
                color: "var(--cypher-text-secondary)",
                margin: "2px 0 0 0",
              }}>{m.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
