import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className ?? ""}`}
      aria-label="Skill Tree AI Solutions — Home"
    >
      <LogoMark />
      <span className="text-base font-semibold tracking-tight text-text-primary">
        Skill Tree<span className="text-accent"> AI</span>
      </span>
    </Link>
  );
}

function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="6" r="3" fill="#0d9488" />
      <circle cx="8" cy="16" r="2.5" fill="#0d9488" />
      <circle cx="24" cy="16" r="2.5" fill="#0d9488" />
      <circle cx="6" cy="26" r="2" fill="#0d9488" />
      <circle cx="16" cy="26" r="2" fill="#0d9488" />
      <circle cx="26" cy="26" r="2" fill="#0d9488" />
      <path
        d="M16 9L8 14M16 9L24 14M8 18L6 24M8 18L16 24M24 18L26 24M24 18L16 24"
        stroke="#0d9488"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
