import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';

export const styles = StyleSheet.create({
	iconWrapper: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	focusedIcon: {
		backgroundColor: COLORS.mainOrange,
		width: 70,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabBarStyle: {
		height: 83,
		paddingTop: 9,
		paddingLeft: 82,
		paddingRight: 82,
		// position: 'absolute',
		bottom: 0,
		reght: 0,
		left: 0,
elevation: 0,
		height: 70,
	},
});
