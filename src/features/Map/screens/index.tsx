import React, {useEffect, useState} from 'react';
import MapComponent from './MapComponent';
import useVehicleLocation, {Coordinates} from '../hooks/useVehicleLocation';
import useVehicleLocationSubscription from '../hooks/useVehicleLocationSubscription';
import {ContainerScreen} from '../../../components';

const MapScreen: React.FC = () => {
  const {
    error: initialDataError,
    data: initialData,
    loading: initialDataLoading,
  } = useVehicleLocation();
  const {
    error: subscriptionError,
    data: subscriptionData,
    loading: subscriptionLoading,
    startPolling,
    stopPolling,
  } = useVehicleLocationSubscription();

  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.1421,
  });

  const isDummyMode = (process.env.DUMMY_MODE || false) as boolean;

  useEffect(() => {
    if (initialData) {
      setCoordinates(prev => {
        return {
          ...prev,
          ...{latitude: initialData.latitude, longitude: initialData.longitude},
        };
      });
      //start subscription
      startPolling();
    }

    // start polling from dummy more
    if (isDummyMode) startPolling();

    () => {
      //subscription cleanup
      stopPolling();
    };
  }, []);

  useEffect(() => {
    if (subscriptionData) {
      setCoordinates(subscriptionData);
    }
  }, [subscriptionData]);

  return (
    <ContainerScreen>
      <MapComponent coordinates={coordinates} title="Tesla" />
    </ContainerScreen>
  );
};

export {MapScreen};
