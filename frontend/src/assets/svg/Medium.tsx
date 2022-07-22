import * as React from "react";
import { SVGProps } from "react";

const MediumFooter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={38} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21.205 11C21.205 5.104 16.532.325 10.77.325 5.009.325.333 5.108.333 11s4.673 10.675 10.434 10.675c5.762 0 10.438-4.78 10.438-10.675ZM32.654 11c0-5.55-2.337-10.048-5.22-10.048-2.882 0-5.218 4.498-5.218 10.048s2.336 10.048 5.219 10.048c2.882 0 5.219-4.498 5.219-10.048ZM37.333 11c0-4.97-.822-9-1.836-9-1.014 0-1.837 4.03-1.837 9s.823 9 1.837 9c1.017.004 1.836-4.026 1.836-9Z"
      fill="#CFE2FF"
    />
  </svg>
);

export default MediumFooter;
