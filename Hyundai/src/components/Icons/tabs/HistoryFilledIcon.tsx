import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
  isActive: boolean;
}

const HistoryFilledIcon = ({isActive}: IconProps) => (
  <Svg width={20} height={20} fill="none">
    <Path
      d="M10 .251C4.615.251.25 4.617.25 10.001c0 5.385 4.365 9.75 9.75 9.75 5.384 0 9.75-4.365 9.75-9.75 0-5.384-4.366-9.75-9.75-9.75Zm4.5 11.25H10a.75.75 0 0 1-.75-.75v-6.75a.75.75 0 1 1 1.5 0v6h3.75a.75.75 0 1 1 0 1.5Z"
      fill={isActive ? '#0082BA' : '#C2C9D6'}
    />
  </Svg>
);

export default HistoryFilledIcon;
