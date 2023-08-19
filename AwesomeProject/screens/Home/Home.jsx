import { View } from 'react-native';
import { PostsScreen } from '../PostsScreen/PostsScreen';
import { CreatePostScreen } from '../CreatePostScreen/CreatePostScreen';
import { BottomNavLeftIcon } from '../../components/SvgIcons/BottomNavLeftIcon';
import { BottomNavCenterIcon } from '../../components/SvgIcons/BottomNavCenterIcon';
import { BottomNavRightIcon } from '../../components/SvgIcons/BottomNavRightIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';
import { styles } from './HomeStyles';
import { HeaderLogOutBtn } from '../../components/CustomComponents/HeaderLogoutBtn';
import { COLORS } from '../../constants/constants';
import { GoBackBtn } from '../../components/CustomComponents/GoBackBtn';

const Tabs = createBottomTabNavigator();

export const Home = () => {
	return (
		<Tabs.Navigator
			initialRouteName="PostsScreen"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					if (route.name === 'PostsScreen') {
						return (
							<View style={focused ? styles.focusedIcon : styles.iconWrapper}>
								<BottomNavLeftIcon stroke={focused ? 'white' : 'black'} />
							</View>
						);
					} else if (route.name === 'CreatePostScreen') {
						return (
							
							<View style={focused ? styles.focusedIcon : styles.iconWrapper}>
								<BottomNavCenterIcon fill={focused ? 'white' : 'black'} />
							</View>
						);
					} else if (route.name === 'ProfileScreen') {
						return (
							<View style={focused ? styles.focusedIcon : styles.iconWrapper}>
								<BottomNavRightIcon stroke={focused ? 'white' : 'black'} />
							</View>
						);
					}
				},

				tabBarShowLabel: false,
				tabBarStyle: { ...styles.tabBarStyle },
				headerShown: true,
				headerStyle: {
					borderBottomWidth: 1,
				},
			})}
		>
			<Tabs.Screen
				name="PostsScreen"
				component={PostsScreen}
				options={{
					title: 'Публікації',
					headerRight: () => <HeaderLogOutBtn />,
					headerTitleStyle: {
						color: COLORS.titleDarkBlue,
						fontFamily: 'roboto-medium',
						fontSize: 17,
						backgroundColor: 'white',
					},
					headerTitleAlign: 'center',
				}}
			/>

			<Tabs.Screen
				name="CreatePostScreen"
				component={CreatePostScreen}
				
				options={{
					title: 'Створити публікацію',
					headerTitleStyle: {
						color: COLORS.titleDarkBlue,
						fontFamily: 'roboto-medium',
						fontSize: 17,
						backgroundColor: 'white',
					},
					tabBarStyle: { display: "none" },
					headerTitleAlign: 'center',
					headerLeft: () => <GoBackBtn />,
				}}
			/>
			<Tabs.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Tabs.Navigator>
	);
};
