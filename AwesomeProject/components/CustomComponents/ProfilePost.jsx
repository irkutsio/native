import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CommentsIcon } from '../SvgIcons/CommentsIcon';
import { LikeIcon } from '../SvgIcons/LikeIcon';
import { MapIcon } from '../SvgIcons/MapIcon';
import { COLORS } from '../../constants/constants';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const ProfilePost = ({
	source,
	signature,
	commentsQuantity,
	likesQuantity,
	location,
	coords,
	
}) => {


const navigation = useNavigation()	
	// useEffect(() => {
	// 	console.log(coords);
	// }, [coords]);

	return (
		<View>
			<Image
				source={{ uri: source }}
				resizeMode={'cover'}
				style={{ marginBottom: 8, width: 343, height: 240 }}
			/>
			<Text
				style={{
					marginBottom: 8,
					fontFamily: 'roboto-medium',
					fontSize: 16,
					color: COLORS.titleDarkBlue,
				}}
			>
				{signature}
			</Text>
			<View style={styles.descr}>
				<TouchableOpacity
					style={{ display: 'flex', flexDirection: 'row', gap: 6 }}
					onPress={()=>{navigation.navigate('Comments')}}
				>
					<CommentsIcon />
					<Text style={{ fontFamily: 'roboto-regular', fontSize: 16, color: COLORS.titleDarkBlue }}>
						{commentsQuantity}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
					<LikeIcon />
					<Text style={{ fontFamily: 'roboto-regular', fontSize: 16, color: COLORS.titleDarkBlue }}>
						{likesQuantity}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{navigation.navigate('MapScreen', {coords})}}
					style={{ display: 'flex', flexDirection: 'row', gap: 4, marginLeft: 'auto' }}
				>
					<MapIcon />
					<Text style={{ fontFamily: 'roboto-regular', fontSize: 16, color: COLORS.titleDarkBlue }}>
						{location}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	descr: {
		display: 'flex',
		flexDirection: 'row',
		gap: 24,
		marginBottom: 32,
	},
});
