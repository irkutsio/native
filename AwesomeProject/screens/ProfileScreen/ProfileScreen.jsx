import { ImageBackground, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import BgrImage from '../../assets/images/Photo_BG.png';
import { styles } from './ProfileScreenStyles';
import { ProfilePostExample } from '../../components/CustomComponents/ProfilePostExample';
import { DeleteIcon } from '../../components/SvgIcons/Deleteicon';

import { Logout } from '../../components/SvgIcons/LogOutIcon';


export const ProfileScreen = () => {
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
					 <ProfilePostExample
						source={require('../../assets/images/forest.png')}
						signature="Ліс"
						likesQuantity={8}
						commentsQuantity={12}
						location="Ukraine"
			
					/> 
					<ProfilePostExample
						source={require('../../assets/images/sunset.png')}
						signature="Захід на Чорному морі"
						likesQuantity={3}
						commentsQuantity={12}
						location="Ukraine"
				
					/>
					<ProfilePostExample
						source={require('../../assets/images/oldHouse.png')}
						signature="Старий будиночок у Венеції"
						likesQuantity={50}
						commentsQuantity={12}
						location="Italy"
			
					/> 
				</View>
			</ImageBackground>
		</ScrollView>
	);
};
