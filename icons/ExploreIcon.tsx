import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function ExploreIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 512 512"
      width={props.size}
      height={props.size}
    >
      <Rect
        x={64}
        y={176}
        width={384}
        height={256}
        rx={28.87}
        ry={28.87}
        fill="none"
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M144 80h224m-256 48h288"
      />
    </Svg>
  )
}

export default ExploreIcon
