import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
  isActive: boolean;
}

const ShoppingCartFilledIcon = ({isActive}: IconProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6Zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill={isActive ? '#0082BA' : '#C2C9D6'}
    />
  </Svg>
);

export default ShoppingCartFilledIcon;
