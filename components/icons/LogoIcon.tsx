import { SVGProps } from "react";

export default function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect width="28" height="28" rx="6" fill="#C27B2C" />
      <path
        d="M7 8h14M7 12h10M7 16h12M7 20h8"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
