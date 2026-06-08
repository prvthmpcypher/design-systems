type BadgeVariant = "green" | "navy" | "slate" | "amber" | "red" | "violet";

interface CypherBadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  dot?: boolean;
}

const BADGE_CONFIG: Record<BadgeVariant, { bg: string; text: string; dot: string; label: string }> = {
  green:  { bg: "rgba(12,155,112,0.10)",  text: "#0C9B70", dot: "#0C9B70",  label: "Active / Success" },
  navy:   { bg: "rgba(4,36,68,0.10)",     text: "#042444", dot: "#042444",  label: "Primary / Brand" },
  slate:  { bg: "rgba(100,116,139,0.10)", text: "#64748B", dot: "#64748B",  label: "Neutral / Default" },
  amber:  { bg: "rgba(245,158,11,0.10)",  text: "#B45309", dot: "#F59E0B",  label: "Warning / Pending" },
  red:    { bg: "rgba(220,38,38,0.10)",   text: "#DC2626", dot: "#DC2626",  label: "Error / Destructive" },
  violet: { bg: "rgba(139,92,246,0.10)",  text: "#7C3AED", dot: "#8B5CF6",  label: "Info / Beta" },
};

export function CypherBadge({ variant = "green", children, dot = false }: CypherBadgeProps) {
  const cfg = BADGE_CONFIG[variant];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      borderRadius: 9999,
      backgroundColor: cfg.bg,
      color: cfg.text,
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "var(--cypher-font-sans)",
      letterSpacing: "0.01em",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
    }}>
      {dot && (
        <span style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: cfg.dot,
          flexShrink: 0,
        }} />
      )}
      {children}
    </span>
  );
}

export function CypherBadgeLibrary() {
  const rows: { variant: BadgeVariant; label: string; status: string }[] = [
    { variant: "green",  label: "Active",    status: "System online · end-to-end encrypted" },
    { variant: "navy",   label: "Core",      status: "Brand primary · Cypher Navy #042444" },
    { variant: "slate",  label: "Inactive",  status: "Neutral state · muted secondary" },
    { variant: "amber",  label: "Pending",   status: "Awaiting verification · caution" },
    { variant: "red",    label: "Revoked",   status: "Access denied · destructive action" },
    { variant: "violet", label: "Beta",      status: "Experimental feature · labs build" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <p style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--cypher-text-secondary)",
        fontFamily: "var(--cypher-font-mono)",
        marginBottom: 4,
      }}>
        System Badges / Status Chips — Pill Shape · 10% Opacity Fill
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {rows.map((r) => (
          <div key={r.variant} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 120, flexShrink: 0 }}>
              <CypherBadge variant={r.variant} dot>{r.label}</CypherBadge>
            </div>
            <div style={{ width: 100, flexShrink: 0 }}>
              <CypherBadge variant={r.variant}>{r.label}</CypherBadge>
            </div>
            <span style={{
              fontSize: 12,
              color: "var(--cypher-text-secondary)",
              fontFamily: "var(--cypher-font-mono)",
            }}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
