import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = ({ route }) => {

	const { longitude, latitude } = route.params.coords;


	return (
		<View style={styles.container}>
			<MapView
				style={styles.mapStyle}
				region={{
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
					longitude,
					latitude,
				}}
				mapType="standard"
				minZoomLevel={15}
				onMapReady={() => console.log('Map is ready')}
				onRegionChange={() => console.log('Region change')}
			>
				<Marker
					title="I am here"
					coordinate={{ latitude, longitude}}
					description="Hello"
				/>
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
