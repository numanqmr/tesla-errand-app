import {useState, useEffect, useCallback, useRef} from 'react';
import {getLocationUpdates} from '../service';

export type Coordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

const useVehicleLocationSubscription = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Object | null>(null);
  const [data, setData] = useState<Coordinates | null>(null);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const fetchLocation = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const locationData = await getLocationUpdates();
      setData(locationData);
      setLoading(false);
    } catch (error) {
      setError(error || 'Error fetching vehicle location');
      setLoading(false);
    }
  }, []);

  const startPolling = () => {
    if (intervalId.current) return;
    intervalId.current = setInterval(() => {
      fetchLocation();
    }, 2500);
  };

  const stopPolling = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  useEffect(() => {
    startPolling();
    return () => stopPolling();
  }, [fetchLocation]);

  return {
    loading,
    error,
    data,
    startPolling,
    stopPolling,
  };
};

export default useVehicleLocationSubscription;
