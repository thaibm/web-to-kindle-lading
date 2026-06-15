import { SVGProps } from "react";

export default function LockKeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect x="6" y="12" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M10 12V9a4 4 0 018 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="14" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}
