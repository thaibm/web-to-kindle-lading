import { SVGProps } from "react";

export default function DatabaseOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="14" cy="9" rx="8" ry="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 9v5c0 2.2 3.6 4 8 4s8-1.8 8-4V9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 14v5c0 2.2 3.6 4 8 4s8-1.8 8-4v-5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M18 20l4 4M22 20l-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
