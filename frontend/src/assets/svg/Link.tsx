import * as React from "react";
import { SVGProps } from "react";

const Link = (props: SVGProps<SVGSVGElement>) => (
  <svg width={27} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m15.5 12 10-10m-6.667 0H25.5v6.667m0 8v6.666A2.667 2.667 0 0 1 22.833 26H4.167A2.667 2.667 0 0 1 1.5 23.333V4.667A2.667 2.667 0 0 1 4.167 2h6.666"
      stroke="#1988F7"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Link;
