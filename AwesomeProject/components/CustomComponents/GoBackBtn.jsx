import { TouchableOpacity } from 'react-native';
import { BackArrowIcon } from '../SvgIcons/BackArrowIcon';

export const GoBackBtn = () => {
	return (
		<TouchableOpacity>
			<BackArrowIcon style={{ marginLeft: 16 }} />
		</TouchableOpacity>
	);
};
