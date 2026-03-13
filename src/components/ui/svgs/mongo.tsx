import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 48 48">
    <path
      fill="url(#mongo-a)"
      d="M26.24 44.12c-.52 2.36-1.72 2.36-2.24 0-1.88-8.56-8.48-15.68-8.48-24.84 0-10.68 6.56-15.16 8.52-16.12.32-.16.68-.16 1 0 1.96.96 8.52 5.44 8.52 16.12 0 9.16-6.6 16.28-8.48 24.84z"
    />
    <path
      fill="url(#mongo-b)"
      d="M24.88 43.12c-.2 1.32-1.04 1.32-1.24 0-1.4-8.88-6.12-14.88-6.12-23.24 0-8.68 4.44-12.84 6.2-13.8.12-.08.28-.08.4 0 1.76.96 6.2 5.12 6.2 13.8 0 8.36-4.72 14.36-6.12 23.24z"
    />
    <path
      fill="#AFDBB3"
      d="M24.28 4.52c-.12-.08-.28-.08-.4 0-1.76.96-6.2 5.12-6.2 13.8 0 1.16.12 2.28.28 3.36 1.32-6.56 4.32-10.64 6.32-11.84V4.52z"
    />
    <defs>
      <linearGradient
        id="mongo-a"
        x1="15.52"
        x2="32.48"
        y1="3.16"
        y2="44.12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41A247" />
        <stop offset="1" stopColor="#3FA045" />
      </linearGradient>
      <linearGradient
        id="mongo-b"
        x1="17.52"
        x2="30.48"
        y1="6.08"
        y2="43.12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4DB33D" />
        <stop offset="1" stopColor="#3F9142" />
      </linearGradient>
    </defs>
  </svg>
);

export { MongoDB };