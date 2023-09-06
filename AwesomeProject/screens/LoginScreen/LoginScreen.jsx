import { Text, TouchableOpacity, View, ImageBackground, ActivityIndicator } from 'react-native';
import { Login } from './loginScreenStyles';
import BgrImage from '../../assets/images/Photo_BG.png';
import { useEffect, useState } from 'react';
import { CustomInput } from '../../components/CustomComponents/CustomInput';
import { CustomPasswordInput } from '../../components/CustomComponents/CustomPasswordInput';
import { OrangeSubmitBtn } from '../../components/CustomComponents/OrangeSubmitBtn';
import { useForm } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/userSlise';
import { COLORS } from '../../constants/constants';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const LoginScreen = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const auth = FIREBASE_AUTH;

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setIsLoading(false);
			if (user) {
			
				navigation.navigate('Home');
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const handleShowPassword = () => {
		setShowPassword(prev => !prev);
	};

	const handleLoginPress = async data => {
		const { email, password } = data;
		setIsLoading(true);
		try {
			const response = await signInWithEmailAndPassword(auth, email, password);
		
			dispatch(userLogin({ email, password }));
			navigation.navigate('Home');
			return response.user;
		} catch (error) {
			alert('SignIn failed: ' + error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			{isLoading ? (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" color={COLORS.mainOrange}/>
				</View>
			) : (
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
			)}
		</>
	);
};
