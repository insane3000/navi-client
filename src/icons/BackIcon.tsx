import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    viewBox="0 0 21 21"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(3 6)"
    >
      <path
        d="m1.378 1.376 4.243.003v4.242"
        transform="matrix(-.70710678 .70710678 .70710678 .70710678 3.500179 -1.449821)"
      />
      <path d="m5.5 9.49998326h5c2 .00089417 3-.99910025 3-2.99998326s-1-3.00088859-3-3.00001674h-10" />
    </g>
  </svg>
)

export default SvgComponent
