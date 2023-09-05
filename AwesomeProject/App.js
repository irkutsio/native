import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './screens/RegistrationScreen/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home/Home';
import { CommentsScreen } from './screens/CommentsScreen/CommentsScreen';
import { COLORS } from './constants/constants';
import { HeaderLogOutBtn } from './components/CustomComponents/HeaderLogoutBtn';
import { MapScreen } from './screens/MapScreen/MapScreen';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';



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
		<Provider store={store}>
			  {/* <PersistGate loading={null} persistor={persistor}> */}
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Registration">
				<MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<MainStack.Screen
					name="Registration"
					component={RegistrationScreen}
					options={{ headerShown: false }}
				/>

				<MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
				<MainStack.Screen
					name="Comments"
					component={CommentsScreen}
					// component={MapScreen}
					options={{
						title: 'Коментарі',

						headerTitleStyle: {
							color: COLORS.titleDarkBlue,
							fontFamily: 'roboto-medium',
							fontSize: 17,
							backgroundColor: 'white',
						},
						headerTitleAlign: 'center',
					}}
				/>
				<MainStack.Screen
					name="MapScreen"
					component={MapScreen}
					options={{
						title: 'Мапа',

						headerTitleStyle: {
							color: COLORS.titleDarkBlue,
							fontFamily: 'roboto-medium',
							fontSize: 17,
							backgroundColor: 'white',
						},
						headerTitleAlign: 'center',
					}}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
		      {/* </PersistGate> */}
		</Provider>
	);
}
