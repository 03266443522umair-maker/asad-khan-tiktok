interface StatCardProps {
  label: string;
  value: string;
  variant: "pink" | "cyan" | "neutral";
}

const VARIANT_STYLES = {
  pink: {
    valueColor: "oklch(0.65 0.25 330)",
    textShadow:
      "0 0 16px oklch(0.65 0.25 330 / 0.8), 0 0 32px oklch(0.65 0.25 330 / 0.4)",
    borderColor: "oklch(0.65 0.25 330 / 0.3)",
    bg: "oklch(0.65 0.25 330 / 0.05)",
    hoverBorder: "oklch(0.65 0.25 330 / 0.6)",
    hoverShadow:
      "0 0 20px oklch(0.65 0.25 330 / 0.3), 0 0 40px oklch(0.65 0.25 330 / 0.1)",
  },
  cyan: {
    valueColor: "oklch(0.68 0.28 186)",
    textShadow:
      "0 0 16px oklch(0.68 0.28 186 / 0.8), 0 0 32px oklch(0.68 0.28 186 / 0.4)",
    borderColor: "oklch(0.68 0.28 186 / 0.3)",
    bg: "oklch(0.68 0.28 186 / 0.05)",
    hoverBorder: "oklch(0.68 0.28 186 / 0.6)",
    hoverShadow:
      "0 0 20px oklch(0.68 0.28 186 / 0.3), 0 0 40px oklch(0.68 0.28 186 / 0.1)",
  },
  neutral: {
    valueColor: "oklch(0.92 0 0)",
    textShadow: "none",
    borderColor: "oklch(0.25 0 0)",
    bg: "oklch(0.14 0 0)",
    hoverBorder: "oklch(0.35 0 0)",
    hoverShadow: "0 0 16px oklch(0.68 0.28 186 / 0.15)",
  },
};

export default function StatCard({ label, value, variant }: StatCardProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className="flex flex-col items-center justify-center py-4 px-3 rounded-xl cursor-default transition-smooth"
      style={{
        background: styles.bg,
        border: `1px solid ${styles.borderColor}`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = styles.hoverBorder;
        el.style.boxShadow = styles.hoverShadow;
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = styles.borderColor;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
      data-ocid={`profile.stat.${label.toLowerCase()}`}
    >
      <span
        className="font-display font-bold text-2xl leading-none mb-1"
        style={{ color: styles.valueColor, textShadow: styles.textShadow }}
      >
        {value}
      </span>
      <span
        className="font-body text-xs tracking-wide uppercase"
        style={{ color: "oklch(0.55 0 0)" }}
      >
        {label}
      </span>
    </div>
  );
}
