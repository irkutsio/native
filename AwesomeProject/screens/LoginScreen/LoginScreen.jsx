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
import { Login } from './loginScreenStyles';
import BgrImage from '../../assets/Photo_BG.png';
import { useState } from 'react';

export const LoginScreen = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [onFocus, setOnFocus] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(prev => !prev);
	};

	const handleOnFocus = () => {
		setOnFocus(true);
	};

	const handleOnBlur = () => {
		setOnFocus(false);
	};

	return (
		<View>

<ImageBackground style={Login.container} source={BgrImage}>

<View style={Login.form}>
	<Text style={Login.title}>Увійти</Text>

	<TextInput
		style={onFocus ? Login.inputFocus : Login.input}
		// style={Login.input}
		placeholderTextColor="#BDBDBD"
		placeholder="Адреса електронної пошти"
		onFocus={handleOnFocus}
		onBlur={handleOnBlur}
	/>
	<TextInput
		style={
			onFocus
				? { ...Login.inputFocus, marginBottom: 45 }
				: { ...Login.input, marginBottom: 45 }
		}
		// style={{ ...Login.input, marginBottom: 45 }}
		placeholderTextColor="#BDBDBD"
		placeholder="Пароль"
		secureTextEntry={!showPassword}
		onFocus={handleOnFocus}
		onBlur={handleOnBlur}
	/>
	<TouchableOpacity onPress={handleShowPassword}>
		<Text style={Login.showPasswordText}>{showPassword ? 'Приховати' : 'Показати'}</Text>
	</TouchableOpacity>
	<TouchableOpacity style={Login.button}>
		<Text style={Login.btnDescr}>Увійти</Text>
	</TouchableOpacity>
	<TouchableOpacity>
		<Text style={Login.linkToLogin}>Немає акаунту? Зареєструватися</Text>
	</TouchableOpacity>
</View>
</ImageBackground>
		</View>
	
	);
};
