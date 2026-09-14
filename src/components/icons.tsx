export function Spark({ className }: { className?: string }) {
  return (
    <svg className={`spark ${className ?? ""}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.6 3.6 1.8 5.6 5 6-3.2.4-4.4 2.4-5 6-.6-3.6-1.8-5.6-5-6 3.2-.4 4.4-2.4 5-6z" />
    </svg>
  );
}
