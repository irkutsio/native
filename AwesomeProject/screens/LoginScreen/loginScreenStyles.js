import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';

export const Login = StyleSheet.create({
	container: {
		// width: 375,
		paddingTop: 279,
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	form: {
		height:'100%',
		paddingTop: 32,
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

	add: {
		top: 81,
		left: 107,
	},
});
