import { SVGProps } from "react";

export default function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M14 4L5 8v7c0 5 3.9 9.7 9 11 5.1-1.3 9-6 9-11V8L14 4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 14l3 3 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
