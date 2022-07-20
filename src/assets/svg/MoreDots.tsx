import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={6} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={17} cy={3} r={2.5} fill="#fff" />
    <circle cx={10} cy={3} r={2.5} fill="#fff" />
    <circle cx={3} cy={3} r={2.5} fill="#fff" />
  </svg>
);

export default SvgComponent;
