import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CreatePostScreenStyles';
import { TextInput } from 'react-native-gesture-handler';
import { OrangeSubmitBtn } from '../../components/CustomComponents/OrangeSubmitBtn';
import { MapIcon } from '../../components/CustomComponents/MapIcon';
import { CreatePostBottomBin } from '../../components/CustomComponents/CreatePostBottomBin';
// import cameraImg from '../../assets/camera.png'

export const CreatePostScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.placeholder}>
				<Image style={styles.cameraImg} source={require('../../assets/camera.png')} />
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
		</View>
	);
};
