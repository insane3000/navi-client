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
      transform="translate(1 2)"
    >
      <path d="m16.5 12.5v-10c0-1.1045695-.8954305-2-2-2h-8c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z" />
      <path d="m4.30542777 2.93478874-2.00419132.72946598c-1.03795581.37778502-1.57312998 1.52546972-1.19534496 2.56342553l3.42020143 9.39692625c.37778502 1.0379558 1.52546972 1.5731299 2.56342553 1.1953449l5.56843115-2.1980811" />
      <path d="m7.5 5.5h5" />
      <path d="m7.5 7.5h6" />
      <path d="m7.5 9.5h3" />
    </g>
  </svg>
)

export default SvgComponent
