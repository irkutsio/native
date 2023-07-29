import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { globalStyles } from './screens/RegistrationScreen/registrationScreenStyles';
import { RegistrationScreen } from './screens/RegistrationScreen/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';
import { CustomInput } from './components/CustomComponents/CustomInput';

export default function App() {
	const [fontsLoaded] = useFonts({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ScrollView>
			<RegistrationScreen />
			<LoginScreen />
	
		</ScrollView>
	);
}
