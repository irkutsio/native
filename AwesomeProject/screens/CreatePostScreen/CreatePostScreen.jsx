import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CreatePostScreenStyles';
import { TextInput } from 'react-native-gesture-handler';
import { MapIcon } from '../../components/SvgIcons/MapIcon';
import { CreatePostBottomBin } from '../../components/SvgIcons/CreatePostBottomBinIcon';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { useState, useEffect, useRef } from 'react';
import { CameraIcon } from '../../components/SvgIcons/CameraIcon';
import { COLORS } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/postSlice';

export const CreatePostScreen = () => {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [image, setImage] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [isDisabledBtn, setIsDisabledBtn] = useState(true);
	const [location, setLocation] = useState(null);
	const [adress, setAdress] = useState('');
	const [imgName, setImgName] = useState('');

	const dispatch = useDispatch();

	const navigation = useNavigation();

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
				setIsDisabledBtn(false);
				await MediaLibrary.createAssetAsync(data.uri);
			} catch (error) {
				console.log(error);
			}
		}
	};

	if (hasCameraPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const addPost = () => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				console.log('Permission to access location was denied');
				return;
			}

			let currentLocation = await Location.getCurrentPositionAsync({});
			const coords = {
				latitude: currentLocation.coords.latitude,
				longitude: currentLocation.coords.longitude,
			};
			setLocation(coords);
			console.log('>>>>>',location)
		})();
		dispatch(createPost({ adress, location, image, imgName }));
		navigation.navigate('Home', { screen: 'PostsScreen' });
		setLocation('');
		setAdress('');
		setImage(null);
		setImgName('');
	};

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
						value={imgName}
						onChangeText={setImgName}
					/>
					<View style={styles.location}>
						<MapIcon style={styles.mapIcon} />
						<TextInput
							style={styles.locationInput}
							placeholderTextColor="#BDBDBD"
							placeholder={'Місцевість...'}
							value={adress}
							onChangeText={setAdress}
						/>
					</View>
				</View>
				<TouchableOpacity
					onPress={addPost}
					disabled={isDisabledBtn}
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
