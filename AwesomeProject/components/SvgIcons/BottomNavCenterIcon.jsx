import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BottomNavCenterIcon = props => {
	return (
		<Svg width={13} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z" />
		</Svg>
	);
};
