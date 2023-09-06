import { View, TextInput, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/constants';
import { Controller } from 'react-hook-form';

export const CustomInput = ({ control, name, placeholder, rules = {} }) => {
	return (
		<View>
			<Controller
				control={control}
				name={name}
				rules={rules}
				render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
					<>
						<TextInput
							style={[styles.input, { borderColor: error ? 'red' : COLORS.middleGrey }]}
							placeholderTextColor="#BDBDBD"
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholder={placeholder}
						/>
						{error && (
							<Text
								style={{
									color: 'red',

									position: 'absolute',

									top: 47,
								}}
							>
								{error.message || 'Error'}
							</Text>
						)}
					</>
				)}
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
