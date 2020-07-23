import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <mask
        id="prefix__a"
        width={40}
        height={40}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <rect
          width={39}
          height={39}
          x={-0.5}
          y={0.5}
          fill="#fff"
          stroke="#D7DFE9"
          rx={19.5}
          transform="matrix(-1 0 0 1 39 0)"
        />
      </mask>
      <g mask="url(#prefix__a)">
        <rect
          width={40}
          height={40}
          fill="#D7DFE9"
          rx={20}
          transform="matrix(-1 0 0 1 40 0)"
        />
        <path fill="url(#prefix__prefix__pattern0)" d="M0 0h40v60H0z" />
      </g>
      <defs>
        <pattern
          id="prefix__prefix__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="scale(.00107 .00071)"
            xlinkHref="#prefix__prefix__image0"
          />
        </pattern>
      </defs>
    </svg>
  )
}

export default SvgComponent
