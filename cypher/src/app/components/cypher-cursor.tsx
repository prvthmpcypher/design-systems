import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "pointer" | "text";

export function CypherCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textCursorRef = useRef<HTMLDivElement>(null);

  const ringPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const [mode, setMode] = useState<CursorMode>("default");
  const modeRef = useRef<CursorMode>("default");

  useEffect(() => {
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      dotPos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (textCursorRef.current) {
        textCursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let next: CursorMode = "default";
      if (
        target.closest("a, button, [role='button'], input[type='checkbox'], input[type='radio'], label, select, [data-cursor='pointer']")
      ) {
        next = "pointer";
      } else if (
        target.closest("input:not([type='checkbox']):not([type='radio']), textarea, [contenteditable], [data-cursor='text']")
      ) {
        next = "text";
      }
      if (next !== modeRef.current) {
        modeRef.current = next;
        setMode(next);
      }
    };

    let animating = true;
    const animate = () => {
      if (!animating) return;
      ringPos.current.x += (dotPos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (dotPos.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      animating = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.style.cursor = "";
    };
  }, []);

  const isText = mode === "text";
  const isPointer = mode === "pointer";

  return (
    <>
      {/* Outer ring — elastic-lag follower */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isPointer ? 32 : 24,
          height: isPointer ? 32 : 24,
          borderRadius: "50%",
          border: `1px solid rgba(12,155,112,0.30)`,
          backgroundColor: isPointer ? "rgba(12,155,112,0.12)" : "transparent",
          pointerEvents: "none",
          zIndex: 99999,
          marginLeft: isPointer ? -16 : -12,
          marginTop: isPointer ? -16 : -12,
          opacity: isText ? 0 : 1,
          transition: "width 0.2s ease, height 0.2s ease, margin 0.2s ease, opacity 0.2s ease, background-color 0.2s ease",
          willChange: "transform",
        }}
      />

      {/* Center dot */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isPointer ? 2 : 6,
          height: isPointer ? 2 : 6,
          borderRadius: "50%",
          backgroundColor: "#0C9B70",
          pointerEvents: "none",
          zIndex: 100000,
          marginLeft: isPointer ? -1 : -3,
          marginTop: isPointer ? -1 : -3,
          opacity: isText ? 0 : 1,
          transition: "width 0.15s ease, height 0.15s ease, margin 0.15s ease, opacity 0.15s ease",
          willChange: "transform",
        }}
      />

      {/* Text cursor — I-beam */}
      <div
        ref={textCursorRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 2,
          height: 20,
          marginLeft: -1,
          marginTop: -10,
          backgroundColor: "#0C9B70",
          borderRadius: 1,
          pointerEvents: "none",
          zIndex: 100000,
          opacity: isText ? 1 : 0,
          animation: isText ? "cypher-blink 1.1s ease-in-out infinite" : "none",
          transition: "opacity 0.15s ease",
          willChange: "transform",
        }}
      />

      <style>{`
        @keyframes cypher-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </>
  );
}
