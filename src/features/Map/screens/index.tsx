import React, {useEffect, useState} from 'react';
import {ScreenContainer} from '../../../components';
import MapComponent from './MapComponent';
import useVehicleLocation, {Coordinates} from '../hooks/useVehicleLocation';
import useVehicleLocationSubscription from '../hooks/useVehicleLocationSubscription';

const MapScreen: React.FC = () => {
  const defaultLocation = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

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
  const [coordinates, setCoordinates] = useState<Coordinates>(defaultLocation);

  useEffect(() => {
    if (initialData) {
      setCoordinates(prev => {
        return {...prev, ...initialData};
      });

      //start data subscription
      startPolling();
    }

    () => {
      //subscription cleanup
      startPolling();
    };
  }, []);

  useEffect(() => {
    if (subscriptionData) {
      setCoordinates(prev => {
        return {...prev, ...subscriptionData};
      });
    }
  }, []);

  return (
    <ScreenContainer>
      <MapComponent coordinates={coordinates} title="You" />
    </ScreenContainer>
  );
};

export {MapScreen};
