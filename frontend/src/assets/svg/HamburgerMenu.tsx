import * as React from "react";
import { SVGProps } from "react";

const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.411.5H23.75a.911.911 0 1 1 0 1.823H1.411a.911.911 0 0 1 0-1.823ZM1.411 15.177H23.75a.911.911 0 1 1 0 1.823H1.411a.911.911 0 0 1 0-1.823ZM1.411 7.839H23.75a.911.911 0 1 1 0 1.822H1.411a.911.911 0 0 1 0-1.822Z"
      fill={props?.color || "#1988F7"}
      stroke={props?.color || "#1988F7"}
    />
  </svg>
);

export default HamburgerMenu;
