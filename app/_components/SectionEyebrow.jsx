export function SectionEyebrow({ children, className = "" }) {
  return (
    <p className={`font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] mb-3 ${className}`}>
      {children}
    </p>
  );
}
