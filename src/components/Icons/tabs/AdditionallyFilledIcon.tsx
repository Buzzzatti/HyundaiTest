import React from 'react';
import Svg, { Circle, Path } from "react-native-svg";

interface IconProps {
  isActive: boolean;
}

const AdditionallyFilledIcon = ({isActive}: IconProps) => (
  <>
    <Svg width={22} height={21} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.5 10.5C21.5 16.299 16.799 21 11 21S.5 16.299.5 10.5 5.201 0 11 0s10.5 4.701 10.5 10.5Z"
        fill={isActive ? '#0082BA' : '#C2C9D6'}
      />
      <Path
        d="M7.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="#fff"
      />
    </Svg>
  </>
);

export default AdditionallyFilledIcon;
