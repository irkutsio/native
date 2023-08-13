import { Text, Image, View } from 'react-native';
import { styles } from './PostScreenStyles';
import userAvatar from '../../assets/images/user.png';



export const PostsScreen = () => {
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.avatar} source={userAvatar}></Image>
			</View>
			<View style={styles.userInfo}>
				<Text style={styles.userName}>Natali Romanova</Text>
				<Text style={styles.userEmail}>email@example.com</Text>
		
			</View>
		</View>
	);
};
