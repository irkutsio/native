import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';

export const styles = StyleSheet.create({
	container: {
		width: 375,
		height: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: 'white',
		paddingHorizontal: 16,
		paddingTop: 32,
	},

	image: {
		marginBottom: 32,
		width: 343,
		height: 240,
		borderRadius: 8,
		borderWidth: 2,
		borderColor: COLORS.darkGrey,
	},
	message: {
		width: 299,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 16,
		backgroundColor: COLORS.lightGrey,
		borderRadius: 6,
	},
	messageContent: {
		fontFamily: 'roboto-regular',
		fontSize: 13,
		color: COLORS.titleDarkBlue,
		marginBottom: 8,
	},
	time: {
		fontFamily: 'roboto-regular',
		fontSize: 10,
		color: COLORS.titleDarkBlue,
		marginLeft: 'auto',
		color: COLORS.darkGrey,
	},
	input: {
        marginTop: 'auto',
		backgroundColor: COLORS.lightGrey,
		height: 50,
		padding: 16,
		borderRadius: 100,
	},
	btn: {
		width: 34,
		height: 34,
		backgroundColor: COLORS.mainOrange,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		position: 'absolute',
		top: 8,
		left: 301,
	},
});
