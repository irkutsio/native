import { Text, Image, View, ScrollView } from 'react-native';
import { styles } from './PostScreenStyles';
import userAvatar from '../../assets/images/user.png';
import { FlatList } from 'react-native-gesture-handler';
import { ProfilePost } from '../../components/CustomComponents/ProfilePost';
import { useSelector } from 'react-redux';

export const PostsScreen = () => {
	const posts = useSelector(state => state.posts.posts);

	const renderItem = ({ item }) => (
		// console.log(item.image)
		<ProfilePost
			source={item.image}
			signature={item.imgName}
			location={item.adress}
			coords={item.location}
		/>
	);

	return (
		// <ScrollView>
		// 	<View style={styles.container}>
		// 		<View>
		// 			<Image style={styles.avatar} source={userAvatar}></Image>
		// 		</View>
		// 		<View style={styles.userInfo}>
		// 			<Text style={styles.userName}>Natali Romanova</Text>
		// 			<Text style={styles.userEmail}>email@example.com</Text>
		// 		</View>
		// 	</View>
		// 	<View>
		<FlatList
			style={styles.containerPost}
			data={posts}
			renderItem={renderItem}
			ListHeaderComponent={
				<View style={styles.container}>
					<View>
						<Image style={styles.avatar} source={userAvatar}></Image>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userName}>Natali Romanova</Text>
						<Text style={styles.userEmail}>email@example.com</Text>
					</View>
				</View>
			}
		/>
		// 	</View>
		// </ScrollView>
	);
};
