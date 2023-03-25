import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
  isActive: boolean;
}

const MainFilledIcon = ({isActive}: IconProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M21 20c0 .265-.293.707-.293.707S20.265 21 20 21H4a1 1 0 0 1-1-1V9.49c0-.092.037-.233.066-.33a.705.705 0 0 1 .1-.205c.059-.083.147-.199.22-.255l8-6.222a1 1 0 0 1 1.228 0l8 6.222c.12.093.284.35.284.35s.102.287.102.44V20Z"
      fill={isActive ? '#0082BA' : '#C2C9D6'}
    />
  </Svg>
);

export default MainFilledIcon;
