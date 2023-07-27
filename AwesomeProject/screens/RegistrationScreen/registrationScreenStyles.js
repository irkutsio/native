import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';

export const Registration = StyleSheet.create({
	container: {
		// width: 375,
		paddingTop: 219,
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	form: {
		paddingTop: 92,
		backgroundColor: 'white',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingHorizontal: 16,
		paddingBottom: 78,
	},

	title: {
		textAlign: 'center',
		marginBottom: 32,
		color: COLORS.titleDarkBlue,
		fontSize: 30,
		fontFamily: 'roboto-medium',
	},
	button: {
		backgroundColor: COLORS.mainOrange,
		borderRadius: 100,
		paddingVertical: 16,
		marginBottom: 14,
	},

	btnDescr: {
		color: 'white',
		textAlign: 'center',
		fontFamily: 'roboto-regular',
	},

	input: {
		width: 343,
		height: 50,
		backgroundColor: COLORS.lightGrey,
		padding: 16,
		fontSize: 16,
		borderRadius: 8,
		fontFamily: 'roboto-regular',
		borderWidth: 1,
		borderColor: COLORS.middleGrey,
		marginBottom: 16,
	},

	inputFocus: {
		borderColor: 'red',
		width: 343,
		height: 50,
		backgroundColor: COLORS.lightGrey,
		padding: 16,
		fontSize: 16,
		borderRadius: 8,
		fontFamily: 'roboto-regular',
		borderWidth: 1,
		borderColor: COLORS.mainOrange,
		marginBottom: 16,
	},

	showPasswordText: {
		position: 'absolute',
		top: -84,
		right: 16,
		fontFamily: 'roboto-regular',
		fontSize: 16,
		color: COLORS.linkDarkBlue,
	},

	linkToLogin: {
		textAlign: 'center',
		fontFamily: 'roboto-regular',
		fontSize: 16,
		color: COLORS.linkDarkBlue,
	},

	avatar: {
		position: 'absolute',
		top: 159,
		left: 128,
		width: 120,
		height: 120,
		backgroundColor: COLORS.lightGrey,
		borderRadius: 16,
		zIndex: 1000,
	},

	add:{
		top: 81,
		left: 107,
	}
});