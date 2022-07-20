import * as React from "react";
import { SVGProps } from "react";

const DocsFooter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.3999 4.00006V1.30005H6.29993C6.09993 0.700049 5.4999 0.300049 4.8999 0.300049H0.399902V14.3H17.3999V4.00006H16.3999ZM15.3999 4.00006H6.3999V2.30005H15.3999V4.00006ZM16.3999 13.4001H1.3999V1.40009H4.8999C5.1999 1.40009 5.3999 1.60009 5.3999 1.90009V5.10004H16.3999V13.4001Z"
      fill="#CFE2FF"
    />
    <path d="M15.3999 11.1001H6.3999V12.1001H15.3999V11.1001Z" fill="#CFE2FF" />
    <path d="M15.3999 9.1001H6.3999V10.1001H15.3999V9.1001Z" fill="#CFE2FF" />
  </svg>
);

export default DocsFooter;
