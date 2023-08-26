import { TouchableOpacity } from 'react-native';
import { BackArrowIcon } from '../SvgIcons/BackArrowIcon';
import { useNavigation } from '@react-navigation/native';

export const GoBackBtn = () => {
	const navigation = useNavigation();

	const handleGoBack = () => {
		navigation.goBack();
	};

	return (
		<TouchableOpacity onPress={handleGoBack}>
			<BackArrowIcon style={{ marginLeft: 16 }} />
		</TouchableOpacity>
	);
};
