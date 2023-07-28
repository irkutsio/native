import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/constants';

export const CustomInput = ({ placeholder, handleOnBlur, handleOnFocus, value, setValue }) => {
	return (
		<View>
			<TextInput
				// style={onFocus ? styles.inputFocus : styles.input}
				style={styles.input}
				placeholderTextColor="#BDBDBD"
				placeholder={placeholder}
				// onFocus={handleOnFocus}
				// onBlur={handleOnBlur}
				value={value}
				onChangeText={setValue}
			/>
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
});
