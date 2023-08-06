import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './screens/RegistrationScreen/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home/Home';
import { COLORS } from './constants/constants';
import { HeaderLogOutBtn } from './components/CustomComponents/HeaderLogoutBtn';

export default function App() {
	const [fontsLoaded] = useFonts({
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}
	const MainStack = createStackNavigator();
	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Registration">
				<MainStack.Screen
					name="Home"
					component={Home}
					options={{
						headerStyle: {
							width: 375,
							paddingHorizontal: 16,
							borderBottomColor: COLORS.darkGrey,
							borderBottomWidth: 1,
						},
						headerTitle: 'Публікації',
						headerTitleStyle: {
							color: COLORS.titleDarkBlue,
							fontFamily: 'roboto-medium',
							fontSize: 17,
							backgroundColor: 'white',
						},
						headerTitleAlign: 'center',
						headerRight: () => <HeaderLogOutBtn />,
					}}
				/>
				<MainStack.Screen
					name="Registration"
					component={RegistrationScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
}

{
	/* <ScrollView>
<RegistrationScreen />
<LoginScreen /> 
 </ScrollView>  */
}
