import { useState } from "react";

interface CypherInputProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  type?: string;
}

export function CypherInput({ placeholder = "Enter value…", label, disabled = false, type = "text" }: CypherInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "var(--cypher-font-sans)",
          color: "var(--cypher-text-primary)",
          letterSpacing: "0.01em",
        }}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 8,
            border: focused
              ? "1px solid var(--cypher-green)"
              : "1px solid var(--cypher-border-structural)",
            backgroundColor: "var(--cypher-bg-surface)",
            color: disabled ? "var(--cypher-text-secondary)" : "var(--cypher-text-primary)",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "var(--cypher-font-sans)",
            lineHeight: 1.6,
            outline: "none",
            boxShadow: focused
              ? "0 0 0 3px rgba(12,155,112,0.15)"
              : "none",
            transition: "border-color 0.15s ease, box-shadow 0.15s ease",
            opacity: disabled ? 0.45 : 1,
            cursor: disabled ? "not-allowed" : "text",
          }}
        />
      </div>
    </div>
  );
}

export function CypherInputLibrary() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 480 }}>
      <p style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--cypher-text-secondary)",
        fontFamily: "var(--cypher-font-mono)",
        marginBottom: 4,
      }}>
        Input Field Primitives — Border-Radius: 8px
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <CypherInput label="Default State" placeholder="Default input field…" />
          <p style={{ fontSize: 11, color: "var(--cypher-text-secondary)", fontFamily: "var(--cypher-font-mono)", marginTop: 6 }}>
            1px solid --cypher-border-structural
          </p>
        </div>
        <div>
          <CypherInput label="Focus State (click to trigger)" placeholder="Click to activate focus ring…" />
          <p style={{ fontSize: 11, color: "var(--cypher-text-secondary)", fontFamily: "var(--cypher-font-mono)", marginTop: 6 }}>
            1px solid --cypher-green · glow: rgba(12,155,112,0.15)
          </p>
        </div>
        <div>
          <CypherInput label="Disabled State" placeholder="Unavailable field…" disabled />
          <p style={{ fontSize: 11, color: "var(--cypher-text-secondary)", fontFamily: "var(--cypher-font-mono)", marginTop: 6 }}>
            opacity: 0.45 · cursor: not-allowed
          </p>
        </div>
        <div>
          <CypherInput label="Mono / Data Entry" placeholder="0x00000000…" type="text" />
          <p style={{ fontSize: 11, color: "var(--cypher-text-secondary)", fontFamily: "var(--cypher-font-mono)", marginTop: 6 }}>
            Standard input · JetBrains Mono used for code/data contexts
          </p>
        </div>
      </div>
    </div>
  );
}
