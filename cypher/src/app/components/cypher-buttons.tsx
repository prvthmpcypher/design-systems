import { useState } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonState = "default" | "hover" | "active" | "focus" | "disabled";

interface CypherButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function CypherButton({ variant = "primary", children, disabled = false, onClick }: CypherButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "var(--cypher-font-sans)",
    letterSpacing: "0.01em",
    lineHeight: 1.4,
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "box-shadow 0.15s ease, background-color 0.15s ease, transform 0.1s ease-out, border-color 0.15s ease",
    outline: "none",
    position: "relative",
  };

  const primaryStyle: React.CSSProperties = {
    ...base,
    backgroundColor: disabled ? "rgba(12,155,112,0.35)" : "var(--cypher-green)",
    color: "#FFFFFF",
    boxShadow: disabled ? "none" : "0px 4px 14px rgba(12,155,112,0.35)",
    opacity: disabled ? 0.5 : 1,
  };

  const secondaryStyle: React.CSSProperties = {
    ...base,
    backgroundColor: "transparent",
    color: disabled ? "var(--cypher-text-secondary)" : "var(--cypher-text-primary)",
    border: "1px solid var(--cypher-border-structural)",
    boxShadow: "none",
    opacity: disabled ? 0.4 : 1,
  };

  const style = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={style}
      onMouseEnter={(e) => {
        if (disabled) return;
        const el = e.currentTarget;
        if (variant === "primary") {
          el.style.boxShadow = "0px 6px 20px rgba(12,155,112,0.5)";
          el.style.backgroundColor = "#0aad7d";
        } else {
          el.style.backgroundColor = "var(--cypher-bg-surface-hover)";
        }
        el.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        const el = e.currentTarget;
        if (variant === "primary") {
          el.style.boxShadow = "0px 4px 14px rgba(12,155,112,0.35)";
          el.style.backgroundColor = "var(--cypher-green)";
        } else {
          el.style.backgroundColor = "transparent";
        }
        el.style.transform = "translateY(0)";
        el.style.outline = "none";
      }}
      onMouseDown={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "scale(0.96)";
      }}
      onMouseUp={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onFocus={(e) => {
        if (disabled) return;
        e.currentTarget.style.outline = `2px solid var(--cypher-green)`;
        e.currentTarget.style.outlineOffset = "3px";
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
      }}
    >
      {children}
    </button>
  );
}

interface StateRowProps {
  label: string;
  variant: ButtonVariant;
}

function StateRow({ label, variant }: StateRowProps) {
  const states: { label: string; props: Partial<CypherButtonProps> }[] = [
    { label: "Default", props: {} },
    { label: "Disabled", props: { disabled: true } },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <p style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--cypher-text-secondary)",
        fontFamily: "var(--cypher-font-mono)",
      }}>
        {label}
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        {states.map((s) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <CypherButton variant={variant} {...s.props}>
              {s.label === "Default" ? (variant === "primary" ? "Primary Action" : "Secondary Action") : "Disabled"}
            </CypherButton>
            <span style={{
              fontSize: 11,
              color: "var(--cypher-text-secondary)",
              fontFamily: "var(--cypher-font-mono)",
            }}>{s.label}</span>
          </div>
        ))}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <CypherButton variant={variant}>Hover / Active</CypherButton>
          <span style={{
            fontSize: 11,
            color: "var(--cypher-text-secondary)",
            fontFamily: "var(--cypher-font-mono)",
          }}>Hover · Active · Focus</span>
        </div>
      </div>
    </div>
  );
}

export function CypherButtonLibrary() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <StateRow label="Primary Button — Border-Radius: 8px" variant="primary" />
      <StateRow label="Secondary Button — Border-Radius: 8px" variant="secondary" />
    </div>
  );
}
