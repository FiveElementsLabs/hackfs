import * as React from "react";
import { SVGProps } from "react";

const CloseMenuCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m2.828 1.414 14.848 14.848a1 1 0 1 1-1.414 1.414L1.414 2.828a1 1 0 1 1 1.414-1.414Z"
      fill={props?.color || "#E8EEF9"}
      stroke={props?.color || "#E8EEF9"}
    />
    <path
      d="M1.414 16.262 16.262 1.414a1 1 0 0 1 1.414 1.414L2.828 17.676a1 1 0 1 1-1.414-1.414Z"
      fill={props?.color || "#E8EEF9"}
      stroke={props?.color || "#E8EEF9"}
    />
  </svg>
);

export default CloseMenuCross;
