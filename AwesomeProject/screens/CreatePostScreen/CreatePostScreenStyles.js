import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';

export const styles = StyleSheet.create({
	container: {
		paddingVertical: 32,
		paddingHorizontal: 16,
		width: 375,
		height: '100%',

		backgroundColor: 'white',
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	camera: {
		width: '100%',
		height: 240,
		// justifyContent: "center",
		// alignItems: "center",
		borderWidth: 1,
		borderColor: COLORS.middleGrey,
		borderRadius: 8,
	},

	cameraBtn: {
		width: 60,
		height: 60,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		borderRadius: 50,
		backgroundColor: COLORS.lightGrey,
		left: 141,
		top: 90,
	},
	imgDescr: {
		fontFamily: 'roboto-regular',
		fontSize: 16,
		color: COLORS.darkGrey,
		marginTop: 8,
	},
	nameInput: {
		width: 343,
		height: 50,
		marginTop: 32,
		borderBottomColor: COLORS.middleGrey,
		borderBottomWidth: 1,
		fontFamily: 'roboto-regular',
		fontSize: 16,
		paddingBottom: 15,
	},

	button: {
		backgroundColor: COLORS.lightGrey,
		borderRadius: 100,
		paddingVertical: 16,
		marginTop: 32,
	},
	btnDescr: {
		color: COLORS.darkGrey,
		textAlign: 'center',
		fontFamily: 'roboto-regular',
	},
	location: {
		position: 'relative',
	},
	locationInput: {
		width: 343,
		height: 50,
		marginTop: 32,
		borderBottomColor: COLORS.middleGrey,
		borderBottomWidth: 1,
		fontFamily: 'roboto-regular',
		fontSize: 16,
		paddingBottom: 15,
		paddingLeft: 28,
	},

	mapIcon: {
		position: 'absolute',
		top: 38,
		left: 0,
	},

	binBtn: {
		width: 70,
		height: 40,
		backgroundColor: COLORS.lightGrey,
		marginTop: 120,
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 20,
		paddingHorizontal: 23,
		paddingVertical: 8,
	},
});
