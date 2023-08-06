import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Logout = props => {
	return (
	
			<Svg 
            width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
				<Path
					d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
					stroke="#BDBDBD"
				/>
				<Path d="M17 16L21 12L17 8" stroke="#BDBDBD" />
				<Path d="M21 12H9" stroke="#BDBDBD" />
			</Svg>
	
	);
};
