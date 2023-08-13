import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BottomNavLeftIcon = props => {
	return (
		<Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path d="M3 3H10V10H3V3Z" />
			<Path d="M14 3H21V10H14V3Z" />
			<Path d="M14 14H21V21H14V14Z" />
			<Path d="M3 14H10V21H3V14Z" />
		</Svg>
	);
};
