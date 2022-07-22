import * as React from "react";
import { SVGProps } from "react";

const CaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={10} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m5.44 7.27 4.38-5.5a.804.804 0 0 0 .168-.381.892.892 0 0 0-.035-.43.732.732 0 0 0-.225-.333.541.541 0 0 0-.34-.126H.625A.538.538 0 0 0 .28.62a.727.727 0 0 0-.231.333.89.89 0 0 0-.038.432c.023.146.082.28.168.384l4.382 5.5a.617.617 0 0 0 .2.17.513.513 0 0 0 .478 0 .617.617 0 0 0 .2-.17Z"
      fill={props?.color || "#1988F7"}
    />
  </svg>
);

export default CaretDown;
