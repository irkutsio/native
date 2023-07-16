import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { globalStyles } from './styles/styles';
import { RegistrationScreen } from './components/RegistrationScreen/RegistrationScreen';

export default function App() {
	const [fontsLoaded] = useFonts({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
	});
	
	if (!fontsLoaded) {
		return null;
	  }
	
	  return (
		<View >
			<RegistrationScreen/>
		</View>
	  );
	}



