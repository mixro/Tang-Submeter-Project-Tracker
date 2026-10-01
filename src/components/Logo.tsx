interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 72, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tang Tech logo"
    >
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      {/* Inner subtle ring */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
        fill="none"
      />
      {/* Stylized T */}
      <path
        d="M32 32 H68 M50 32 V72"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
