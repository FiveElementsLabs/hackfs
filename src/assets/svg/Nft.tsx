import * as React from "react";
import { SVGProps } from "react";

const Nft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.663 30a4.29 4.29 0 0 1-2.225-.625L2.05 24.01A4.254 4.254 0 0 1 0 20.375V9.662C0 8.096.795 6.7 2.2 5.9L11.475.599a4.284 4.284 0 0 1 4.37 0l9.275 5.298a4.251 4.251 0 0 1 2.203 3.763v10.727a4.244 4.244 0 0 1-2.047 3.623l-9.387 5.365A4.319 4.319 0 0 1 13.66 30h.002Zm-.625-26.684L3.606 8.704a1.117 1.117 0 0 0-.473.958V20.5a1.2 1.2 0 0 0 .467.794l9.45 5.395c.333.215.83.262 1.231 0l9.398-5.37a1.153 1.153 0 0 0 .512-.818V9.662a1.154 1.154 0 0 0-.47-.957l-9.433-5.39a1.134 1.134 0 0 0-1.25.001Z"
      fill={props?.color || "#0A3576"}
    />
  </svg>
);

export default Nft;
