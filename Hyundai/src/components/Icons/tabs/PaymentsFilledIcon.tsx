import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface IconProps {
  isActive: boolean;
}

const PaymentsFilledIcon = ({isActive}: IconProps) => (
  <Svg width={24} height={24} fill="none">
    <Rect
      x={2}
      y={8.666}
      width={13.333}
      height={6.667}
      rx={2}
      fill={isActive ? '#0082BA' : '#C2C9D6'}
    />
    <Path
      d="M21.419 11.306a1 1 0 0 1-.006 1.53l-9.322 7.792a1 1 0 0 1-1.641-.767V4.16a1 1 0 0 1 1.646-.763l9.323 7.91Z"
      fill={isActive ? '#0082BA' : '#C2C9D6'}
    />
  </Svg>
);

export default PaymentsFilledIcon;
