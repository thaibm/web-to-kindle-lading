import { SVGProps } from "react";

export default function StarFillIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.88l-3.09 1.63L4.5 7.07 2 4.635l3.455-.505L7 1z" />
    </svg>
  );
}
