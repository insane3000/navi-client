import * as React from "react";

const SvgComponent = (props: any) => (
  <svg height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(3 6)"
    >
      <path d="m2.72727273 5.03333352c2.78085705-2.26478038 6.81913659-2.26478038 9.60000027 0m-12.04090936-2.36666667c4.12260033-3.55320047 10.30465946-3.55320047 14.42727306 0m-9.57954579 4.74000005c1.41874807-.9855538 3.31988897-.9855538 4.7386367 0" />
      <circle cx={7.5} cy={9.5} fill="currentColor" r={1} />
    </g>
  </svg>
);

export default SvgComponent;
