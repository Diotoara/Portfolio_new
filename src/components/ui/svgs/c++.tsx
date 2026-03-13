import type { SVGProps } from "react";

const CPlusPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 48 48">
    <path
      fill="url(#cpp-a)"
      d="M44 21h-3V11.232l-17-9.815L7 11.232V30.86l17 9.815 6.138-3.544c.48.835 1.157 1.54 1.986 2.054L24 44 2 31.296V10.796L24 4 44 15.547V21z"
    />
    <path
      fill="url(#cpp-b)"
      d="M26 14h-4v6h-6v4h6v6h4v-6h6v-4h-6v-6zM42 25h-4v6h-6v4h6v6h4v-6h6v-4h-6v-6z"
    />
    <defs>
      <linearGradient
        id="cpp-a"
        x1="5.161"
        x2="41.77"
        y1="6.812"
        y2="40.758"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00599C" />
        <stop offset="1" stopColor="#004482" />
      </linearGradient>
      <linearGradient
        id="cpp-b"
        x1="16"
        x2="48"
        y1="28"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#659AD2" />
        <stop offset="1" stopColor="#00599C" />
      </linearGradient>
    </defs>
  </svg>
);

export { CPlusPlus };