import {
	TextInput,
	Text,
	ScrollView,
	Button,
	TouchableOpacity,
	Image,
	View,
	ImageBackground,
	StyleSheet,
} from 'react-native';
import { Registration } from './registrationScreenStyles';
import BgrImage from '../../assets/Photo_BG.png';
import { useState } from 'react';

export const RegistrationScreen = () => {
	const [showPassword, setShowPassword] = useState(false);
	// const [onFocus, setOnFocus] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(prev => !prev);
	};

	// const handleOnFocus = () => {
	// 	setOnFocus(true);
	// };

	// const handleOnBlur = () => {
	// 	setOnFocus(false);
	// }

	return (
		<View>
			<ImageBackground style={Registration.container} source={BgrImage}>
				<View style={Registration.avatar}>
					<Image source={require('../../assets/add.png')} style={Registration.add} />
				</View>

				<View style={Registration.form}>
					<Text style={Registration.title}>Реєстрація</Text>

					<TextInput
						// style={onFocus ? Registration.inputFocus : Registration.input}
						style={Registration.input}
						placeholderTextColor="#BDBDBD"
						placeholder="Логін"
						// onFocus={handleOnFocus}
						// onBlur={handleOnBlur}
					/>
					<TextInput
						style={Registration.input}
						placeholderTextColor="#BDBDBD"
						placeholder="Адреса електронної пошти"
					/>
					<TextInput
						style={{ ...Registration.input, marginBottom: 45 }}
						placeholderTextColor="#BDBDBD"
						placeholder="Пароль"
						secureTextEntry={!showPassword}
					/>
					<TouchableOpacity onPress={handleShowPassword}>
						<Text style={Registration.showPasswordText}>
							{showPassword ? 'Приховати' : 'Показати'}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={Registration.button}>
						<Text style={Registration.btnDescr}>Зареєстуватися</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={Registration.linkToLogin}>Вже є акаунт? Увійти</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
