import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

export const Calendar = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} {...props}>
      <G opacity={0.3}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3H6zm0 2a1 1 0 00-1 1v12a1 1 0 001 1h8.992C17.012 20 19 18.011 19 16V7a1 1 0 00-1-1H6z"
          fill="#252A31"
        />
        <Path
          d="M5.5 9.5h13"
          stroke="#252A31"
          strokeWidth={2}
          strokeLinecap="square"
        />
        <Path
          opacity={0.3}
          d="M7.5 2v2.5M16.5 2v2.5"
          stroke="#252A31"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
