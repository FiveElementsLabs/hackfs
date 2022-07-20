import React from "react";
import { SVGProps } from "react";

const TideLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={72} height={72} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M35.745 0a35.745 35.745 0 1 0 0 71.49 35.745 35.745 0 0 0 0-71.49Zm0 57.837a22.092 22.092 0 1 1 0-44.183 22.092 22.092 0 0 1 0 44.183Z"
      fill="url(#a)"
    />
    <path
      d="M35.746 13.65a22.091 22.091 0 1 0 0 44.183 22.091 22.091 0 0 0 0-44.183Zm0 30.53a8.44 8.44 0 1 1 7.798-5.208 8.44 8.44 0 0 1-7.798 5.213v-.004Z"
      fill="url(#b)"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(35.745 35.745) scale(35.7453)"
      >
        <stop offset={0.65} stopColor="#1988F7" stopOpacity={0} />
        <stop offset={1} stopColor="#1988F7" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(35.746 35.745) scale(22.0913)"
      >
        <stop offset={0.5} stopColor="#6AB0F8" stopOpacity={0} />
        <stop offset={1} stopColor="#6AB0F8" />
      </radialGradient>
    </defs>
  </svg>
);

export default TideLogo;
