import * as React from "react";
import { SVGProps } from "react";

const Lens = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={26} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.528 16.534c-.247 0-6.125-.051-10.62-4.55-.096-.094-.188-.19-.28-.286C.688 10.706.24 9.525.336 8.284c.084-1.095.59-2.156 1.42-2.988.829-.832 1.893-1.336 2.987-1.42 1.147-.083 2.243.289 3.187 1.09.102-1.234.61-2.275 1.483-3.023.833-.716 1.938-1.109 3.117-1.109 1.18 0 2.284.393 3.117 1.109.872.748 1.382 1.789 1.484 3.022.944-.8 2.04-1.18 3.186-1.088 1.096.084 2.156.59 2.988 1.42.831.829 1.337 1.893 1.419 2.987.095 1.241-.352 2.422-1.293 3.416-.091.096-.184.192-.279.287-4.497 4.496-10.374 4.547-10.623 4.547ZM5.068 4.798c-1.02 0-1.977.474-2.658 1.154-1.223 1.224-1.779 3.345-.108 5.111.086.09.173.18.262.269 4.227 4.226 9.909 4.275 9.965 4.275.057 0 5.75-.059 9.967-4.275.089-.09.176-.179.26-.269 1.672-1.769 1.116-3.887-.107-5.111-1.223-1.224-3.345-1.78-5.114-.108a10.647 10.647 0 0 0-.47.469l-.878.932.034-1.28c0-.097.006-.194.006-.292 0-.127 0-.253-.005-.375-.067-2.43-1.96-3.538-3.691-3.538-1.731 0-3.622 1.107-3.69 3.538 0 .124-.006.253-.006.375 0 .096 0 .19.005.285l.035 1.287-.88-.927a11.829 11.829 0 0 0-.471-.473c-.788-.747-1.643-1.047-2.457-1.047Z"
      fill={props?.color || "#CFE2FF"}
    />
    <path
      d="M11.934 11.626h-.674c0-1.003-.977-1.82-2.177-1.82-1.2 0-2.177.817-2.177 1.82h-.674c0-1.375 1.28-2.494 2.851-2.494 1.572 0 2.85 1.119 2.85 2.494ZM18.786 11.598h-.674c0-1.003-.976-1.82-2.176-1.82-1.2 0-2.177.817-2.177 1.82h-.674c0-1.375 1.279-2.494 2.85-2.494 1.573 0 2.851 1.12 2.851 2.494Z"
      fill={props?.color || "#CFE2FF"}
    />
    <path
      d="M9.86 11.64a.97.97 0 1 0 0-1.939.97.97 0 0 0 0 1.94ZM16.666 11.64a.97.97 0 1 0 0-1.939.97.97 0 0 0 0 1.94ZM12.526 14.103c-.795 0-1.53-.408-1.875-1.04l.59-.322c.228.421.731.689 1.283.689.552 0 1.056-.271 1.283-.689l.59.322c-.34.632-1.074 1.04-1.871 1.04ZM24.603 23.445a8.414 8.414 0 0 1-5.411.59 8.269 8.269 0 0 1-3.992-2.161c.699.289 1.448.436 2.203.433a6.298 6.298 0 0 0 3.647-1.163l-.54-.753c-1.459 1.05-3.465 1.302-5.048.587-1.562-.703-2.443-2.209-2.5-4.25v-.658h-.926v.653c-.054 2.044-.936 3.55-2.5 4.255-1.583.714-3.592.464-5.047-.59l-.54.754a6.296 6.296 0 0 0 3.645 1.164 5.678 5.678 0 0 0 2.203-.433 8.266 8.266 0 0 1-3.99 2.16 8.414 8.414 0 0 1-5.412-.59l-.395.84a9.307 9.307 0 0 0 3.964.881c.688 0 1.374-.076 2.046-.227a9.206 9.206 0 0 0 5.214-3.262l.006-.008c.308-.404.579-.835.808-1.289v4.77h.927v-4.763c.229.451.498.88.805 1.283l.006.008a9.207 9.207 0 0 0 5.213 3.262c.672.151 1.358.227 2.047.227 1.37.001 2.723-.3 3.964-.882l-.397-.838Z"
      fill={props?.color || "#CFE2FF"}
    />
  </svg>
);

export default Lens;
