import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CreatePostScreenStyles';
import { TextInput } from 'react-native-gesture-handler';

import { MapIcon } from '../../components/SvgIcons/MapIcon';
import { CreatePostBottomBin } from '../../components/SvgIcons/CreatePostBottomBinIcon';
// import cameraImg from '../../assets/camera.png'

export const CreatePostScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.placeholder}>
				<Image style={styles.cameraImg} source={require('../../assets/images/camera.png')} />
			</View>
			<Text style={styles.imgDescr}>Завантажте фото</Text>
			<View>
				<TextInput
					style={styles.nameInput}
					placeholderTextColor="#BDBDBD"
					placeholder={'Назва...'}
				/>
				<View style={styles.location}>
					<MapIcon style={styles.mapIcon} />
					<TextInput
						style={styles.locationInput}
						placeholderTextColor="#BDBDBD"
						placeholder={'Місцевість...'}
					/>
				</View>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.btnDescr}>Опублікувати</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.binBtn}>
				<CreatePostBottomBin />
			</TouchableOpacity>
		</ScrollView>
	);
};
