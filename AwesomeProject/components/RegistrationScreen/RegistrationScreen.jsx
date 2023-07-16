import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../../styles/styles';

export const RegistrationScreen = () => {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.title}>Реєстрація</Text>
			<TextInput
				style={{...globalStyles.input, marginBottom: 16 }}
				placeholderTextColor="#BDBDBD"
				placeholder="Логін"
			></TextInput>
			<TextInput
				style={{...globalStyles.input, marginBottom: 16 }}
				placeholderTextColor="#BDBDBD"
				placeholder="Адреса електронної пошти"
			></TextInput>
			<TextInput
				style={globalStyles.input}
				placeholderTextColor="#BDBDBD"
				placeholder="Пароль"
			></TextInput>
		</View>
	);
};
