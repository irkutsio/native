import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		gap: 8,
		width: 375,
		// height: '100%',
		paddingHorizontal: 16,
		paddingTop: 32,
		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: 'white',
	},
	containerPost :{
		width: 375,
		paddingHorizontal: 16,
		paddingTop: 32,
		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: 'white',
	},
	avatar: {
		width: 60,
	},
	userInfo: {
		marginTop: 8,
	},

	userName: {
		color: COLORS.titleDarkBlue,
		fontFamily: 'roboto-bold',
		fontSize: 13,
	},

	userEmail: {
		fontFamily: 'roboto-regular',
		color: 'rgba(33, 33, 33, 0.8)',
	},
});
