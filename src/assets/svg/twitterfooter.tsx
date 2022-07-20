import * as React from "react";
import { SVGProps } from "react";

const TwitterFooter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={23} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.4 3.451v.5c0 4.7-3.5 10-10 10-1.9 0-3.8-.5-5.4-1.6.3 0 .6.1.8.1 1.6 0 3.1-.5 4.4-1.5-1.5 0-2.8-1-3.3-2.4.5.1 1.1.1 1.6-.1-1.6-.3-2.8-1.8-2.8-3.5.5.3 1 .4 1.6.4-1.5-1-2-3.1-1.1-4.7 1.8 2.2 4.4 3.5 7.3 3.7-.3-1.2.1-2.5 1-3.4 1.4-1.3 3.7-1.3 5 .2.8-.2 1.5-.4 2.2-.9-.3.8-.8 1.5-1.5 1.9.7-.1 1.4-.3 2-.6-.5.7-1.1 1.4-1.8 1.9Z"
      fill="#CFE2FF"
    />
  </svg>
);

export default TwitterFooter;
