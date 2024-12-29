import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

interface MapComponentViewProps {
  coordinates: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  title: string;
}

const MapComponent: React.FC<MapComponentViewProps> = ({
  coordinates,
  title,
}) => {
  const {container, mapContainer} = styles;

  return (
    <View style={container}>
      <MapView
        style={mapContainer}
        region={coordinates}
        showsUserLocation={false}
        loadingEnabled>
        <Marker
          coordinate={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          }}
          title={title}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
});

export default MapComponent;
