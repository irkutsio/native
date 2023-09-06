import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './CommentsScreenStyles';
import { COLORS } from '../../constants/constants';
import { CommentsInputIcon } from '../../components/SvgIcons/CommentsInputIcon';
import { useState } from 'react';
import { addDoc, collection, query, setDoc, where } from 'firebase/firestore';
import { FIREBASE_AUTH, db } from '../../firebaseConfig';


import { useComments } from '../../hooks/getComment';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const CommentsScreen = ({ route }) => {
	const { source, postId } = route.params;
	const [comment, setComment] = useState('');

	const { comments, loading } = useComments(postId);



	const auth = FIREBASE_AUTH;

	const commentsCollectionRef = collection(db, 'comments');

	const handleAddComment = async () => {
		const formattedDate = format(new Date(), 'dd MMMM, yyyy | HH:mm', { locale: uk });
		await addDoc(commentsCollectionRef, {
			comment,
			data: formattedDate,
			postId,
			userId: auth?.currentUser?.uid,
		});
		setComment('');
	};

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={source} />
			<View style={styles.commentsContainer}>
				<FlatList
					ListEmptyComponent={() => <Text>No comments available</Text>}
					data={comments || []}
					renderItem={({ item }) => (
						<View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginBottom: 24 }}>
							<View style={{ ...styles.message, backgroundColor: COLORS.middleGrey }}>
								<Text style={styles.messageContent}>{item.comment}</Text>
								<Text style={{ ...styles.time, marginRight: 'auto', marginLeft: 0 }}>
									{item.data}
								</Text>
							</View>
							<Image source={require('../../assets/images/userAvatarCommentsScreen.png')} />
						</View>
					)}
				/>
				<View style={styles.commentInputContainer}>
					<TextInput
						onChangeText={setComment}
						value={comment}
						style={styles.input}
						placeholderTextColor="#BDBDBD"
						placeholder="Коментувати..."
					/>

					<TouchableOpacity style={styles.btn} onPress={handleAddComment}>
						<CommentsInputIcon />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

// const [commentsList, setCommentsList] = useState([]);

// const getComments = postId => {
// 	const q = query(collection(db, 'comments'), where('postId', '==', postId));
// 	const [commentsData, loading, error, snapshot] = useCollectionData(q);
// 	// console.log('>>>>', commentsData);
// 	setCommentsList(commentsData);
// };

// /* <View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginBottom: 24 }}>
// 			<Image source={require('../../assets/images/noNameAvatarCommentsScreen.png')} />
// 			<View style={styles.message}>
// 				<Text style={styles.messageContent}>
// 					Really love your most recent photo. I’ve been trying to capture the same thing for a few
// 					months and would love some tips!
// 				</Text>
// 				<Text style={styles.time}>09 червня, 2020 | 08:40</Text>
// 			</View>
// 		</View>

//

// 		<View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginBottom: 32 }}>
// 			<Image source={require('../../assets/images/noNameAvatarCommentsScreen.png')} />
// 			<View style={styles.message}>
// 				<Text style={styles.messageContent}>Thank you! That was very helpful!</Text>
// 			</View>
// 		</View>
