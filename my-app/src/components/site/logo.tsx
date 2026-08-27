interface LogoProps {
  size?: number;
  className?: string;
}

export function OmLogo({ size = 28, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="12" fill="#050505" />
      <text
        x="32"
        y="44"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="30"
        fill="#FF4D00"
        letterSpacing="2"
      >
        OM
      </text>
    </svg>
  );
}