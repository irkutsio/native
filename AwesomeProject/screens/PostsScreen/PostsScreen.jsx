import { Text, Image, View } from 'react-native';
import { styles } from './PostScreenStyles';
import { ScrollView } from 'react-native-gesture-handler';
import userAvatar from '../../assets/user.png';

export const PostsScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.qwerty}>
				<Image style={styles.avatar} source={userAvatar}></Image>
			</View>
            <View style={styles.qwertyqwe}>
                <Text style={styles.userName}>Natali Romanova</Text>
                <Text style={styles.userEmail}>email@example.com</Text>
            </View>
		</View>
	);
};
