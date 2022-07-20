import * as React from "react";
import { SVGProps } from "react";

const Coins = (props: SVGProps<SVGSVGElement>) => (
  <svg width={43} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M31.533 9.018V8c0-4.564-6.772-8-15.766-8S0 3.436 0 8v7.273c0 3.8 4.694 6.818 11.467 7.727v1c0 4.564 6.772 8 15.766 8S43 28.564 43 24v-7.273c0-3.763-4.55-6.782-11.467-7.709Zm8.6 7.71c0 2.4-5.518 5.09-12.9 5.09-.663 0-1.326-.018-1.988-.073 3.87-1.418 6.288-3.745 6.288-6.472v-3.328c5.357.819 8.6 3.019 8.6 4.782Zm-28.666 3.308v-4.309c1.426.186 2.862.277 4.3.273a32.51 32.51 0 0 0 4.3-.273v4.31c-1.423.224-2.86.334-4.3.327a26.69 26.69 0 0 1-4.3-.328Zm17.2-7.327v2.564c0 1.527-2.222 3.163-5.734 4.163v-4.254c2.312-.564 4.265-1.418 5.734-2.473Zm-12.9-9.8c7.381 0 12.9 2.691 12.9 5.091 0 2.4-5.519 5.09-12.9 5.09-7.382 0-12.9-2.69-12.9-5.09s5.518-5.09 12.9-5.09Zm-12.9 12.364v-2.564c1.469 1.055 3.422 1.91 5.733 2.473v4.254c-3.512-1-5.733-2.636-5.733-4.163ZM14.333 24v-.764l1.434.037c.704 0 1.385-.018 2.042-.055.717.255 1.47.473 2.258.673v4.273c-3.512-1-5.734-2.637-5.734-4.164Zm8.6 4.764v-4.328a33.27 33.27 0 0 0 4.3.291 32.491 32.491 0 0 0 4.3-.273v4.31a28.41 28.41 0 0 1-8.6 0Zm11.467-.6v-4.255c2.311-.563 4.264-1.418 5.733-2.473V24c0 1.527-2.221 3.164-5.733 4.164Z"
      fill="#fff"
    />
  </svg>
);

export default Coins;
