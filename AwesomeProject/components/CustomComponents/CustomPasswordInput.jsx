import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../../constants/constants';

export const CustomPasswordInput = ({
	placeholder,
	handleOnBlur,
	handleOnFocus,
	handleShowPassword,
	showPassword,
	onFocus,
  
}) => {
	return (
		<View>
			<TextInput
				// style={onFocus ? styles.inputFocus : styles.input}
				style={styles.input}
				placeholderTextColor="#BDBDBD"
				placeholder={placeholder}
				// onFocus={handleOnFocus}
				// onBlur={handleOnBlur}
				secureTextEntry={!showPassword}
			/>
			<TouchableOpacity onPress={handleShowPassword}>
				<Text style={styles.showPasswordText}>{showPassword ? 'Приховати' : 'Показати'}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
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
		marginBottom: 45,
	},
	showPasswordText: {
		position: 'absolute',
		top: -78,
		right: 16,
		fontFamily: 'roboto-regular',
		fontSize: 16,
		color: COLORS.linkDarkBlue,
        
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
});
