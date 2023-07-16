import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		width: 375,
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: 16,
		paddingRight: 16,
	},

	title: {
		textAlign: 'center',
		marginBottom: 32,
		color: '#212121',
		fontSize: 30,
		fontFamily: 'roboto-medium',
	},
	button: {
		textAlign: 'center',
		color: 'white',
		backgroundColor: '#FF6C00',
		borderRadius: 100,
		paddingTop: 16,
		paddingBottom: 16,
		fontFamily: 'roboto-regular',
	},

	input: {
		width: 343,
		height: 50,
		backgroundColor: '#F6F6F6',
		padding: 16,
		fontSize: 16,
		borderRadius: 8,
		fontFamily: 'roboto-regular',
		borderWidth: 1,
		borderColor: '#E8E8E8',
	},
});
