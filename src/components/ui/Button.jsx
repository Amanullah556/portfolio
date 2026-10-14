import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  ...props
}) {
  const base =
    "rounded-xl px-8 py-3 text-sm font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-gradient-to-r from-[#9F7B21] via-[#FFF0B3] to-[#D4AF37] text-black hover:scale-105",
    secondary:
      "border border-white/15 bg-white/[0.04] text-white hover:border-[#D4AF37]/50",
  };

  // 👉 Internal routing
  if (to) {
    return (
      <Link to={to} className={`${base} ${styles[variant]}`} {...props}>
        {children}
      </Link>
    );
  }

  // 👉 External link
  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]}`} {...props}>
        {children}
      </a>
    );
  }

  // fallback
  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
