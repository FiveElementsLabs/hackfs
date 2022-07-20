import * as React from "react";
import { SVGProps } from "react";

const Upload = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L11 4.414V14a1 1 0 1 1-2 0V4.414L6.707 6.707a1 1 0 0 1-1.414-1.414l4-4ZM2 13a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1Z"
      fill="#73ABFF"
    />
  </svg>
);

export default Upload;
