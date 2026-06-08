import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgCypher            from "../../imports/Cypher.png";
import imgLabs              from "../../imports/Cypher_Labs.png";
import imgMail              from "../../imports/Cypher_Mail.png";
import imgFocus             from "../../imports/Cypher_Focus.png";
import imgInvoice           from "../../imports/Cypher_Invoice_Generator.png";
import imgPortfolio         from "../../imports/Cypher_Porfolio_Generator.png";

interface AssetCardProps {
  src: string;
  filename: string;
  description: string;
  tag: string;
}

function AssetCard({ src, filename, description, tag }: AssetCardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        borderRadius: 10,
        border: "1px solid var(--cypher-border-structural)",
        backgroundColor: "var(--cypher-bg-surface)",
        overflow: "hidden",
        transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0px 12px 32px rgba(0,0,0,0.10)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image mount zone */}
      <div style={{
        width: "100%",
        aspectRatio: "16/7",
        backgroundColor: "var(--cypher-bg-global)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 32px",
        borderBottom: "1px solid var(--cypher-border-structural)",
        position: "relative",
        overflow: "hidden",
      }}>
        <ImageWithFallback
          src={src}
          alt={filename}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
        {/* Asset linked indicator */}
        <span style={{
          position: "absolute",
          top: 8,
          right: 10,
          fontSize: 9,
          fontWeight: 700,
          fontFamily: "var(--cypher-font-mono)",
          color: "var(--cypher-green)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          padding: "2px 6px",
          borderRadius: 4,
          backgroundColor: "rgba(12,155,112,0.10)",
        }}>PNG · Linked</span>
      </div>

      {/* Metadata strip */}
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            fontFamily: "var(--cypher-font-mono)",
            color: "var(--cypher-text-primary)",
          }}>{filename}</span>
          <span style={{
            fontSize: 9,
            fontWeight: 700,
            fontFamily: "var(--cypher-font-mono)",
            color: "var(--cypher-text-secondary)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            backgroundColor: "var(--cypher-bg-surface-hover)",
            padding: "2px 6px",
            borderRadius: 4,
            flexShrink: 0,
          }}>{tag}</span>
        </div>
        <span style={{
          fontSize: 11,
          fontFamily: "var(--cypher-font-sans)",
          color: "var(--cypher-text-secondary)",
          lineHeight: 1.5,
        }}>{description}</span>
      </div>
    </div>
  );
}

const ASSETS: AssetCardProps[] = [
  {
    src: imgCypher,
    filename: "Cypher.png",
    description: "Platform root logotype — primary brand identity mark",
    tag: "Root",
  },
  {
    src: imgLabs,
    filename: "Cypher Labs.png",
    description: "Developer tools & utilities suite logotype",
    tag: "App",
  },
  {
    src: imgMail,
    filename: "Cypher Mail.png",
    description: "End-to-end encrypted mail client logotype",
    tag: "App",
  },
  {
    src: imgFocus,
    filename: "Cypher Focus.png",
    description: "Privacy-first deep focus mode logotype",
    tag: "App",
  },
  {
    src: imgInvoice,
    filename: "Cypher Invoice Generator.png",
    description: "Secure invoice & billing generator logotype",
    tag: "Tool",
  },
  {
    src: imgPortfolio,
    filename: "Cypher Portfolio Generator.png",
    description: "Privacy-respecting portfolio builder logotype",
    tag: "Tool",
  },
];

export function CypherAssetContainers() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Section header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 16,
        borderBottom: "1px solid var(--cypher-border-structural)",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <p style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--cypher-text-secondary)",
            fontFamily: "var(--cypher-font-mono)",
            margin: 0,
          }}>
            Brand Asset Registry — Cypher Platform Ecosystem
          </p>
          <p style={{
            fontSize: 11,
            fontFamily: "var(--cypher-font-sans)",
            color: "var(--cypher-text-secondary)",
            margin: 0,
          }}>
            All 6 logotype assets linked from <code style={{ fontFamily: "var(--cypher-font-mono)", fontSize: 11, color: "var(--cypher-green)" }}>src/imports/</code> — PNG raster, object-contain mount
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          {["1 Root", "3 Apps", "2 Tools"].map((label) => (
            <span key={label} style={{
              fontSize: 10,
              fontWeight: 700,
              fontFamily: "var(--cypher-font-mono)",
              color: "var(--cypher-text-secondary)",
              backgroundColor: "var(--cypher-bg-surface-hover)",
              padding: "3px 8px",
              borderRadius: 4,
              letterSpacing: "0.04em",
            }}>{label}</span>
          ))}
        </div>
      </div>

      {/* Asset grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 16,
      }}>
        {ASSETS.map((a) => (
          <AssetCard key={a.filename} {...a} />
        ))}
      </div>

      {/* Spec footer */}
      <div style={{
        padding: "14px 16px",
        borderRadius: 8,
        border: "1px solid var(--cypher-border-structural)",
        backgroundColor: "var(--cypher-bg-surface)",
        display: "flex",
        gap: 32,
        flexWrap: "wrap",
      }}>
        {[
          { k: "Format",    v: "PNG (raster)" },
          { k: "Mount",     v: "object-contain · aspect-ratio 16/7" },
          { k: "Import",    v: "ES module · src/imports/" },
          { k: "Renderer",  v: "ImageWithFallback · graceful error state" },
          { k: "Hover",     v: "translateY(-4px) · 0.2s cubic-bezier(0.4,0,0.2,1)" },
        ].map((row) => (
          <div key={row.k} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{
              fontSize: 9,
              fontWeight: 700,
              fontFamily: "var(--cypher-font-mono)",
              color: "var(--cypher-green)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>{row.k}</span>
            <span style={{
              fontSize: 11,
              fontFamily: "var(--cypher-font-mono)",
              color: "var(--cypher-text-secondary)",
            }}>{row.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
