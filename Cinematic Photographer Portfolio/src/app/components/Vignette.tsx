export default function Vignette() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background:
          'radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 100%)',
      }}
    />
  );
}
