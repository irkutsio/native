import { Text, TouchableOpacity, Image, View, ImageBackground } from 'react-native';
import { Registration } from './registrationScreenStyles';
import BgrImage from '../../assets/Photo_BG.png';
import { useState } from 'react';
import { CustomInput } from '../../components/CustomComponents/CustomInput';
import { CustomPasswordInput } from '../../components/CustomComponents/CustomPasswordInput';
import { OrangeSubmitBtn } from '../../components/CustomComponents/OrangeSubmitBtn';

export const RegistrationScreen = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [onFocus, setOnFocus] = useState(false);
	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleShowPassword = () => {
		setShowPassword(prev => !prev);
	};

	const handleOnFocus = () => {
		setOnFocus(true);
	};

	const handleOnBlur = () => {
		setOnFocus(false);
	};

	const handleRegistrationPress = () => {
		console.log('Кнопка нажата!');
	};

	return (
		<View>
			<ImageBackground style={Registration.container} source={BgrImage}>
				<View style={Registration.avatar}>
					<Image source={require('../../assets/add.png')} style={Registration.add} />
				</View>

				<View style={Registration.form}>
					<Text style={Registration.title}>Реєстрація</Text>

					<CustomInput
						placeholder="Логін"
						onFocus={handleOnFocus}
						handleOnBlur={handleOnBlur}
						handleOnFocus={handleOnFocus}
						value={login}
						setValue={setLogin}
					/>

					<CustomInput
						placeholder="Адреса електронної пошти"
						onFocus={handleOnFocus}
						handleOnBlur={handleOnBlur}
						handleOnFocus={handleOnFocus}
						value={email}
						setValue={setEmail}
					/>
					<CustomPasswordInput
						placeholder="Пароль"
						handleOnBlur={handleOnBlur}
						onFocus={onFocus}
						handleOnFocus={handleOnFocus}
						showPassword={showPassword}
						handleShowPassword={handleShowPassword}
						value={password}
						setValue={setPassword}
					/>

					<OrangeSubmitBtn
						text="Зареєстуватися"
						handlePress={handleRegistrationPress}
					/>

					<TouchableOpacity>
						<Text style={Registration.linkToLogin}>Вже є акаунт? Увійти</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
