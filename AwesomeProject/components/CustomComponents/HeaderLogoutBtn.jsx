import { TouchableOpacity } from 'react-native';
import { Logout } from './logOut';

export const HeaderLogOutBtn = () => {
	const handleLogOut = () => {};
	return (
		<TouchableOpacity onPress={handleLogOut}>
			<Logout style={{ marginRight: 20 }} />
		</TouchableOpacity>
	);
};
