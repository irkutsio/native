import { Text, Image, View, ScrollView } from 'react-native';
import { styles } from './PostScreenStyles';
import userAvatar from '../../assets/images/user.png';
import { FlatList } from 'react-native-gesture-handler';
import { ProfilePost } from '../../components/CustomComponents/ProfilePost';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';


export const PostsScreen = () => {
	// const posts = useSelector(state => state.posts.posts);
	const postsCollectionRef = collection(db, 'posts');

	const [postsList, setPostsList] = useState([]);
	const [user, setUser] = useState(null);


	const auth = FIREBASE_AUTH;

	useEffect(() => {
		const unsubscribe = onSnapshot(postsCollectionRef, querySnapshot => {
			const updatedPosts = [];
			querySnapshot.forEach(doc => {
				updatedPosts.push({ ...doc.data(), id: doc.id });
			});
			setPostsList(updatedPosts);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setUser(user);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const renderItem = ({ item }) => {
		console.log(item)
		if (!item.image) {
			return;
		}

		return (
			<ProfilePost
				source={{ uri: item.image }}
				signature={item.imgName}
				location={item.adress}
				coords={item.location}
				// commentsQuantity={item.commentsQuantity}
				postId={item.id}
			/>
		);
	};



	return (
		<FlatList
			style={styles.containerPost}
			data={postsList}
			renderItem={renderItem}
			ListHeaderComponent={
				<View style={styles.container}>
					<View>
						<Image style={styles.avatar} source={userAvatar}></Image>
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userName}>{user ? user.displayName : ''}</Text>
						<Text style={styles.userEmail}>{user ? user.email : ''}</Text>
					</View>
				</View>
			}
		/>
	);
};

// useEffect(() => {
// 	const getPostsList = async () => {
// 		try {
// 			const data = await getDocs(postsCollectionRef);
// 			const filteredData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
// 			console.log('>data>', filteredData);
// 			setPostsList(filteredData);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	getPostsList();
// }, []);
