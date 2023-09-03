import {
	Text,
	TouchableOpacity,
	Image,
	View,
	ImageBackground,
	ActivityIndicator,
} from 'react-native';
import { Registration } from './registrationScreenStyles';
import BgrImage from '../../assets/images/Photo_BG.png';
import { useState } from 'react';
import { CustomInput } from '../../components/CustomComponents/CustomInput';
import { CustomPasswordInput } from '../../components/CustomComponents/CustomPasswordInput';
import { OrangeSubmitBtn } from '../../components/CustomComponents/OrangeSubmitBtn';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../constants/constants';
import { createAccount } from '../../redux/userSlise';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const RegistrationScreen = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [login, setLogin] = useState('');

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const auth = FIREBASE_AUTH;

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();


	const handleRegistrationPress = async data => {
		setIsLoading(true);
		const { email, login, password } = data;
		setLogin(login);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, {
				displayName: login,
			});
			dispatch(createAccount({ email, password }));
			navigation.navigate('Home');
		} catch (error) {
			alert('Registration failed: ' + error.message);
		}
	
		setIsLoading(false);
	};

	const handleShowPassword = () => {
		setShowPassword(prev => !prev);
	};

	return (
		<>
			{isLoading ? (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" color={COLORS.mainOrange} />
				</View>
			) : (
				<View>
					<ImageBackground style={Registration.container} source={BgrImage}>
						<View style={Registration.avatar}>
							<Image source={require('../../assets/images/add.png')} style={Registration.add} />
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

							<OrangeSubmitBtn
								text="Зареєстуватися"
								onPress={handleSubmit(handleRegistrationPress)}
							/>

							<TouchableOpacity
								onPress={() => navigation.navigate('Login', { sessionId: 45, userId: '22e24' })}
							>
								<Text style={Registration.linkToLogin}>Вже є акаунт? Увійти</Text>
							</TouchableOpacity>
						</View>
					</ImageBackground>
				</View>
			)}
		</>
	);
};









	// const handleRegistrationPress = data => {
	// 	setIsLoading(true);
	// 	const { email, login, password } = data;
	// 	setLogin(login);
	// 	createUserWithEmailAndPassword(auth, email, password)
	// 		.then(response => {
	// 			const user = response.user;
	// 			updateUserProfile(user);
	// 			console.log('>>>>>', user);
	// 			dispatch(createAccount({ email, password }));
	// 		})
	// 		.catch(error => {
	// 			alert('Registration failed: ' + error.message);
	// 		});

	// 	navigation.navigate('Home');

	// 	setIsLoading(false);
	// };

	// const updateUserProfile = async (user) => {
	// 	if (user) {
	// 		try {
	// 			await updateProfile(user,{ displayName: login });
	// 		} catch (error) {
	// 			throw error;
	// 		}
	// 	}
	// };