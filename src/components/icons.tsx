export function Spark({ className }: { className?: string }) {
  return (
    <svg className={`spark ${className ?? ""}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.6 3.6 1.8 5.6 5 6-3.2.4-4.4 2.4-5 6-.6-3.6-1.8-5.6-5-6 3.2-.4 4.4-2.4 5-6z" />
    </svg>
  );
}

export function InstagramGlyph({
  className,
  strokeWidth = 1.75,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
