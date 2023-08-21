import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CreatePostScreenStyles';
import { TextInput } from 'react-native-gesture-handler';
import { MapIcon } from '../../components/SvgIcons/MapIcon';
import { CreatePostBottomBin } from '../../components/SvgIcons/CreatePostBottomBinIcon';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useState, useEffect, useRef } from 'react';
import { CameraIcon } from '../../components/SvgIcons/CameraIcon';
import { COLORS } from '../../constants/constants';

export const CreatePostScreen = () => {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [image, setImage] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);

	const cameraRef = useRef(null);

	useEffect(() => {
		(async () => {
			await MediaLibrary.requestPermissionsAsync();
			const cameraStatus = await Camera.requestCameraPermissionsAsync();
			setHasCameraPermission(cameraStatus.status === 'granted');
		})();
	}, []);

	const takePicture = async () => {
		if (cameraRef) {
			try {
				const data = await cameraRef.current.takePictureAsync();
				setImage(data.uri);

				await MediaLibrary.createAssetAsync(data.uri);
			} catch (error) {
				console.log(error);
			}
		}
	};

	if (hasCameraPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<ScrollView>
			<View style={styles.container}>
				{!image ? (
					<Camera type={type} style={styles.camera} ref={cameraRef}>
						<TouchableOpacity style={styles.cameraBtn} onPress={takePicture}>
							<CameraIcon />
						</TouchableOpacity>
					</Camera>
				) : (
					<Image style={styles.camera} source={{ uri: image }} />
				)}
				{image ? (
					<TouchableOpacity onPress={() => setImage(null)}>
						<Text style={styles.imgDescr}>Редагувати фото</Text>
					</TouchableOpacity>
				) : (
					<Text style={styles.imgDescr}>Завантажте фото</Text>
				)}

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
				<TouchableOpacity
					style={[
						styles.button,
						{ backgroundColor: image ? COLORS.mainOrange : styles.button.backgroundColor },
					]}
				>
					<Text style={[styles.btnDescr, { color: image ? 'white' : styles.btnDescr.color }]}>
						Опублікувати
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.binBtn}>
					<CreatePostBottomBin />
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
