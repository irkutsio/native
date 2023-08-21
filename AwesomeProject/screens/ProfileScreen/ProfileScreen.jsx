import { ImageBackground, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import BgrImage from '../../assets/images/Photo_BG.png';
import { styles } from './ProfileScreenStyles';
import { ProfilePost } from '../../components/CustomComponents/ProfilePost';
import { DeleteIcon } from '../../components/SvgIcons/Deleteicon';
import { BackArrowIcon } from '../../components/SvgIcons/BackArrowIcon';
import { Logout } from '../../components/SvgIcons/LogOutIcon';
import { useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
	const navigation = useNavigation();

	const onCommentsBtn = ()=>{
		navigation.navigate('Comments');
	}
	return (
		<ScrollView>
			<ImageBackground style={styles.container} source={BgrImage}>
				<View style={styles.content}>
					<Image style={styles.avatar} source={require('../../assets/images/user_profile.png')} />

					<TouchableOpacity style={styles.deleteBtn}>
						<DeleteIcon style={{ width: 12 }} />
					</TouchableOpacity>
					<TouchableOpacity style={{ width: 24, position: 'absolute', top: 22, right: 16 }}>
						<Logout />
					</TouchableOpacity>
					<View>
						<Text style={styles.userName}>Natali Romanova</Text>
					</View>
					<ProfilePost
						source={require('../../assets/images/forest.png')}
						signature="Ліс"
						likesQuantity={8}
						commentsQuantity={12}
						location="Ukraine"
						onPress={onCommentsBtn}
					/>
					<ProfilePost
						source={require('../../assets/images/sunset.png')}
						signature="Захід на Чорному морі"
						likesQuantity={3}
						commentsQuantity={12}
						location="Ukraine"
						onPress={onCommentsBtn}
					/>
					<ProfilePost
						source={require('../../assets/images/oldHouse.png')}
						signature="Старий будиночок у Венеції"
						likesQuantity={50}
						commentsQuantity={12}
						location="Italy"
						onPress={onCommentsBtn}
					/>
				</View>
			</ImageBackground>
		</ScrollView>
	);
};
