import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
  isActive: boolean;
}

const ChatScreenIcon = ({isActive}: IconProps) => (
  <Svg
    width={19}
    height={18}
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M2.209 14.365c.051-.19-.063-.453-.171-.643a1.946 1.946 0 00-.11-.164A8.646 8.646 0 01.5 8.798C.485 3.941 4.512 0 9.493 0c4.343 0 7.969 3.009 8.816 7.003.127.592.19 1.196.191 1.802 0 4.864-3.872 8.867-8.852 8.867-.792 0-1.861-.199-2.444-.362a16.411 16.411 0 01-1.315-.438 1.346 1.346 0 00-1.004.016l-2.935 1.06a.693.693 0 01-.202.052.415.415 0 01-.414-.421.685.685 0 01.026-.143l.849-3.07z"
      fill={isActive ? '#0082BA' : '#C2C9D6'}
    />
  </Svg>
);

export default ChatScreenIcon;
