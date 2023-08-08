import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Login } from './loginScreenStyles';
import BgrImage from '../../assets/Photo_BG.png';
import { useState } from 'react';
import { CustomInput } from '../../components/CustomComponents/CustomInput';
import { CustomPasswordInput } from '../../components/CustomComponents/CustomPasswordInput';
import { OrangeSubmitBtn } from '../../components/CustomComponents/OrangeSubmitBtn';
import { useForm } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const LoginScreen = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigation = useNavigation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleLoginPress = data => {
		console.log(data);

		navigation.navigate('Home');
		// navigation.navigate('CreatePostScreen');
	};

	const handleShowPassword = () => {
		setShowPassword(prev => !prev);
	};

	return (
		<View>
			<ImageBackground style={Login.container} source={BgrImage}>
				<View style={Login.form}>
					<Text style={Login.title}>Увійти</Text>
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
					<OrangeSubmitBtn text="Увійти" onPress={handleSubmit(handleLoginPress)} />
					<TouchableOpacity onPress={() => navigation.navigate('Registration')}>
						<Text style={Login.linkToLogin}>Немає акаунту? Зареєструватися</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
