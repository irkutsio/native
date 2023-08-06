import { Text, TouchableOpacity, Image, View, ImageBackground, TextInput } from 'react-native';
import { Registration } from './registrationScreenStyles';
import BgrImage from '../../assets/Photo_BG.png';
import { useState } from 'react';
import { CustomInput } from '../../components/CustomComponents/CustomInput';
import { CustomPasswordInput } from '../../components/CustomComponents/CustomPasswordInput';
import { OrangeSubmitBtn } from '../../components/CustomComponents/OrangeSubmitBtn';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const RegistrationScreen = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigation = useNavigation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleRegistrationPress = data => {
		console.log(data);

		navigation.navigate('Home')
	};

	const handleShowPassword = () => {
		setShowPassword(prev => !prev);
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
						name="login"
						placeholder="Логін"
						control={control}
						rules={{
							required: 'login is required',
							minLength: { value: 4, message: 'Should be minimum 4 symbols long' },
						}}
					/>

					<CustomInput
						name="email"
						placeholder="Адреса електронної пошти"
						control={control}
						rules={{
							required: 'email is required',
							minLength: { value: 4, message: 'Should be minimum 4 symbols long' },
							pattern: { value: emailRegex, message: 'email is invalid' },
						}}
					/>

					<CustomPasswordInput
						name="password"
						placeholder="Пароль"
						showPassword={showPassword}
						handleShowPassword={handleShowPassword}
						control={control}
						rules={{
							required: 'password is required',
							minLength: { value: 4, message: 'Should be minimum 4 symbols long' },
						}}
					/>

					<OrangeSubmitBtn text="Зареєстуватися" onPress={handleSubmit(handleRegistrationPress)} />

					<TouchableOpacity
						onPress={() => navigation.navigate('Login', { sessionId: 45, userId: '22e24' })}
					>
						<Text style={Registration.linkToLogin}>Вже є акаунт? Увійти</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
