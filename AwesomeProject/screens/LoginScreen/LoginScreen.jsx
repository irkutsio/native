import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Login } from './loginScreenStyles';
import BgrImage from '../../assets/Photo_BG.png';
import { useState } from 'react';
import { CustomInput } from '../../components/CustomComponents/CustomInput';
import { CustomPasswordInput } from '../../components/CustomComponents/CustomPasswordInput';
import { OrangeSubmitBtn } from '../../components/CustomComponents/OrangeSubmitBtn';

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
					<CustomInput
						placeholder="Адреса електронної пошти"
						onFocus={handleOnFocus}
						handleOnBlur={handleOnBlur}
						handleOnFocus={handleOnFocus}
					/>
					<CustomPasswordInput
						placeholder="Пароль"
						handleOnBlur={handleOnBlur}
						onFocus={onFocus}
						handleOnFocus={handleOnFocus}
						showPassword={showPassword}
						handleShowPassword={handleShowPassword}
					/>
					<OrangeSubmitBtn text="Увійти" />
					<TouchableOpacity>
						<Text style={Login.linkToLogin}>Немає акаунту? Зареєструватися</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
