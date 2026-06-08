interface TypeSpecRow {
  name: string;
  size: string;
  weight: string;
  lineHeight: string;
  tracking: string;
  sample: string;
  mono?: boolean;
}

const SANS_SPECS: TypeSpecRow[] = [
  {
    name: "H1 · Hero",
    size: "48px",
    weight: "800",
    lineHeight: "1.1",
    tracking: "-0.02em",
    sample: "Open. Secure. Free.",
  },
  {
    name: "H2 · Section",
    size: "32px",
    weight: "700",
    lineHeight: "1.2",
    tracking: "-0.01em",
    sample: "Privacy by Design",
  },
  {
    name: "H3 · Component",
    size: "20px",
    weight: "600",
    lineHeight: "1.3",
    tracking: "0",
    sample: "Cypher Encryption Layer",
  },
  {
    name: "Body · Regular",
    size: "16px",
    weight: "400",
    lineHeight: "1.6",
    tracking: "0",
    sample: "End-to-end encrypted communications for individuals and organizations who value digital sovereignty.",
  },
  {
    name: "Label · Medium",
    size: "14px",
    weight: "600",
    lineHeight: "1.4",
    tracking: "0.01em",
    sample: "Generate Invoice",
  },
];

const MONO_SPECS: TypeSpecRow[] = [
  {
    name: "Code Block",
    size: "14px",
    weight: "400",
    lineHeight: "1.5",
    tracking: "0",
    sample: "const key = await cypher.generateKey({ algorithm: 'AES-256-GCM' });",
    mono: true,
  },
  {
    name: "Metric Header",
    size: "12px",
    weight: "700",
    lineHeight: "1.4",
    tracking: "0.05em",
    sample: "INVOICE NO. · TOTAL AMOUNT · DUE DATE",
    mono: true,
  },
];

function SpecTag({ label, value }: { label: string; value: string }) {
  return (
    <span style={{
      display: "inline-flex",
      flexDirection: "column",
      gap: 1,
    }}>
      <span style={{
        fontSize: 9,
        fontWeight: 700,
        fontFamily: "var(--cypher-font-mono)",
        color: "var(--cypher-green)",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      }}>{label}</span>
      <span style={{
        fontSize: 11,
        fontFamily: "var(--cypher-font-mono)",
        color: "var(--cypher-text-secondary)",
      }}>{value}</span>
    </span>
  );
}

function TypeRow({ spec }: { spec: TypeSpecRow }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 24,
      alignItems: "start",
      padding: "20px 0",
      borderBottom: "1px solid var(--cypher-border-structural)",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <p style={{
          fontSize: spec.size,
          fontWeight: spec.weight,
          fontFamily: spec.mono ? "var(--cypher-font-mono)" : "var(--cypher-font-sans)",
          lineHeight: spec.lineHeight,
          letterSpacing: spec.tracking,
          color: "var(--cypher-text-primary)",
          margin: 0,
          textTransform: (spec.name === "Metric Header" ? "uppercase" : undefined) as any,
        }}>
          {spec.sample}
        </p>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        flexShrink: 0,
        alignItems: "flex-end",
        minWidth: 180,
      }}>
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          fontFamily: "var(--cypher-font-mono)",
          color: "var(--cypher-text-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}>{spec.name}</span>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <SpecTag label="size" value={spec.size} />
          <SpecTag label="weight" value={spec.weight} />
          <SpecTag label="lh" value={spec.lineHeight} />
          <SpecTag label="ls" value={spec.tracking || "0"} />
        </div>
      </div>
    </div>
  );
}

export function CypherTypographyScale() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
        paddingBottom: 12,
        borderBottom: "1px solid var(--cypher-border-structural)",
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
          Sans-Serif Stack — Inter · UI & Interface Tracking
        </p>
        <span style={{
          fontSize: 11,
          fontFamily: "var(--cypher-font-mono)",
          color: "var(--cypher-green)",
        }}>4px grid hierarchy</span>
      </div>
      {SANS_SPECS.map((s) => <TypeRow key={s.name} spec={s} />)}

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 8,
        paddingBottom: 12,
        borderBottom: "1px solid var(--cypher-border-structural)",
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
          Monospace Stack — JetBrains Mono · Data Tables & Cypher Labs
        </p>
        <span style={{
          fontSize: 11,
          fontFamily: "var(--cypher-font-mono)",
          color: "var(--cypher-green)",
        }}>code · metrics · invoices</span>
      </div>
      {MONO_SPECS.map((s) => <TypeRow key={s.name} spec={s} />)}
    </div>
  );
}
