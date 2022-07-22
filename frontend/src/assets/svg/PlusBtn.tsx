import * as React from "react";
import { SVGProps } from "react";

const PlusBtn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="87"
    height="87"
    viewBox="0 0 87 87"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="43.5" cy="43.5" r="41" fill="#73ABFF" strokeWidth="5" />
    <rect x="38.0625" y="19.0312" width="10.875" height="48.9375" rx="5" fill="white" />
    <rect
      x="67.9688"
      y="38.0625"
      width="10.875"
      height="48.9375"
      rx="5"
      transform="rotate(90 67.9688 38.0625)"
      fill="white"
    />
  </svg>
);

export default PlusBtn;
