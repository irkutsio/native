import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './CommentsScreenStyles';
import { COLORS } from '../../constants/constants';
import { CommentsInputIcon } from '../../components/SvgIcons/CommentsInputIcon';

export const CommentsScreen = ({ route }) => {
	const { source } = route.params;

	return (
		<ScrollView style={styles.container}>
			<Image style={styles.image} source={source} />
			<View>
				<TextInput
					style={styles.input}
					placeholderTextColor="#BDBDBD"
					placeholder="Коментувати..."
				/>
				<TouchableOpacity style={styles.btn}>
					<CommentsInputIcon />
				</TouchableOpacity>
			</View>

		</ScrollView>
	);
};

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

// 		<View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginBottom: 24 }}>
// 			<View style={{ ...styles.message, backgroundColor: COLORS.middleGrey }}>
// 				<Text style={styles.messageContent}>
// 					A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to
// 					get a bit sharper images.
// 				</Text>
// 				<Text style={{ ...styles.time, marginRight: 'auto', marginLeft: 0 }}>
// 					09 червня, 2020 | 09:14
// 				</Text>
// 			</View>
// 			<Image source={require('../../assets/images/userAvatarCommentsScreen.png')} />
// 		</View>

// 		<View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginBottom: 32 }}>
// 			<Image source={require('../../assets/images/noNameAvatarCommentsScreen.png')} />
// 			<View style={styles.message}>
// 				<Text style={styles.messageContent}>Thank you! That was very helpful!</Text>
// 			</View>
// 		</View>
