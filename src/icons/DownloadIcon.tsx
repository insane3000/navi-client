import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(2 5)"
    >
      <path d="m6.5 10.5h-4c-1.15200478-.4188699-2-1.70322102-2-3 0-1.65685425 1.34314575-3 3-3 .03335948 0 .06659179.00054449.09968852.00162508.46264217-2.28304993 2.48077946-4.00162508 4.90031148-4.00162508 2.7614237 0 5 2.23857625 5 5 0 .48543539-.0691781.95471338-.1982137 1.39851335.3339576-.25026476.748773-.39851335 1.1982137-.39851335 1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2h-4" />
      <path d="m6.5 12.5 2 2 2-2" />
      <path d="m8.5 4.5v10" />
    </g>
  </svg>
);

export default SvgComponent;
