import React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';
export const Alarm = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G opacity={0.3} stroke="#252A31" strokeWidth={2}>
        <Path d="M20 13a8 8 0 11-16 0 8 8 0 0116 0z" />
        <Path d="M12 9v4M15 13h-3" strokeLinecap="round" />
        <Path
          opacity={0.3}
          d="M21 6.5l-2.206-2.206M3 6.5l2.206-2.206"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
