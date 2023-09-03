import { TouchableOpacity } from 'react-native';
import { Logout } from '../SvgIcons/LogOutIcon';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/userSlise';
import { FIREBASE_AUTH } from '../../firebaseConfig';

export const HeaderLogOutBtn = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const auth = FIREBASE_AUTH;

	const handleLogOut = () => {
	  auth
		.signOut()
		.then(() => {
		  dispatch(logOut());
		  navigation.navigate("Login");
		})
		.catch((error) => {
		  alert(error.message);
		});
	};

	return (
		<TouchableOpacity onPress={handleLogOut}>
			<Logout style={{ marginRight: 16 }} />
		</TouchableOpacity>
	);
};
