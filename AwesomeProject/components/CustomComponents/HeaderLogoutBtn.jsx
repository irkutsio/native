import { TouchableOpacity } from 'react-native';
import { Logout } from '../SvgIcons/LogOutIcqwe9on';

export const HeaderLogOutBtn = () => {
	const handleLogOut = () => {};
	return (
		<TouchableOpacity onPress={handleLogOut}>
			<Logout style={{ marginRight: 16 }} />
		</TouchableOpacity>
	);
};
