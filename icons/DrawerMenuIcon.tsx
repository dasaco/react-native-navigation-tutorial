import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function DrawerMenuIcon(props: Props) {
  return (
    <Svg
      viewBox="0 0 512 512"
      width={props.size}
      height={props.size}
    >
      <Path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M80 160h352M80 256h352M80 352h352"
      />
    </Svg>
  )
}

export default DrawerMenuIcon
