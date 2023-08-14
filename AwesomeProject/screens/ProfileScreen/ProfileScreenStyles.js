import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';

export const styles = StyleSheet.create({
	container: {
		width: 375,
        height: '100%',
		paddingTop: 147,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
    avatar: {
		position: 'absolute',
		top: -60,
		left: 128,
		width: 120,
		height: 120,
		backgroundColor: COLORS.lightGrey,
		borderRadius: 16,
		zIndex: 9000,
	},

    content: {
		height:'100%',
		paddingTop: 92,
		backgroundColor: 'white',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingHorizontal: 16,
		paddingBottom: 78,
	},

	deleteBtn:{
		width: 25,
		height: 25,
		borderRadius: 50,
		backgroundColor:'white',
		borderColor: '#BDBDBD',
		borderWidth: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position:'absolute',
		left: 235,
		top:20,
		zIndex: 1000000
	},
    userName : {
        textAlign: 'center',
		marginBottom: 32,
		color: COLORS.titleDarkBlue,
		fontSize: 30,
		fontFamily: 'roboto-medium',
    }
});
