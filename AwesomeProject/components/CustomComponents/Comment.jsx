import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/constants';



export const Comment = ({comment, data}) => {
return <View style={{ display: 'flex', flexDirection: 'row', gap: 16, marginBottom: 24 }}>
			<View style={{ ...styles.message, backgroundColor: COLORS.middleGrey }}>
				<Text style={styles.messageContent}>
					{comment}
				</Text>
				<Text style={{ ...styles.time, marginRight: 'auto', marginLeft: 0 }}>
					{data}
				</Text>
			</View>
			<Image source={require('../../assets/images/userAvatarCommentsScreen.png')} />
		</View>

};


const styles = StyleSheet.create({
    message: {
		width: 299,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 16,
		backgroundColor: COLORS.lightGrey,
		borderRadius: 6,
	},
	messageContent: {
		fontFamily: 'roboto-regular',
		fontSize: 13,
		color: COLORS.titleDarkBlue,
		marginBottom: 8,
	},
})