import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import {Coordinates} from '../hooks/useVehicleLocation';
import {icons} from '../../../assets';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../utils/dummyCoordinatesHelper';
import {ScreenContainer} from 'react-native-screens';
import {ContainerScreen} from '../../../components';

interface MapComponentViewProps {
  coordinates: Coordinates;
  title: string;
}

const MapComponent: React.FC<MapComponentViewProps> = ({
  coordinates,
  title,
}) => {
  const {container, mapContainer} = styles;

  const animatedCoordinates = useRef(new AnimatedRegion(coordinates)).current;

  useEffect(() => {
    if (coordinates) {
      const newCoordinates = {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: coordinates.latitudeDelta ?? LATITUDE_DELTA,
        longitudeDelta: coordinates.longitudeDelta ?? LONGITUDE_DELTA,
        duration: 1000,
        useNativeDriver: false,
        toValue: 0.5,
      };
      animatedCoordinates.timing(newCoordinates).start();
    }
  }, [coordinates]);

  return (
    <MapView.Animated
      style={mapContainer}
      region={animatedCoordinates}
      showsUserLocation={false}
      loadingEnabled>
      <Marker.Animated coordinate={animatedCoordinates} title={title}>
        <Image source={icons.carIcon} />
      </Marker.Animated>
    </MapView.Animated>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
