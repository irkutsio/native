import { TouchableOpacity } from 'react-native';
import { Logout } from '../SvgIcons/LogOutIcon';

export const HeaderLogOutBtn = () => {
	const handleLogOut = () => {};
	return (
		<TouchableOpacity onPress={handleLogOut}>
			<Logout style={{ marginRight: 16 }} />
		</TouchableOpacity>
	);
};
