import {useState, useEffect, useRef} from 'react';
import {getLocationUpdates} from '../service';
import {generateRandomCoordinates} from '../utils/dummyCoordinatesHelper';

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
  const isDummyMode = (process.env.DUMMY_MODE || false) as boolean;

  const fetchUpdates = async () => {
    try {
      setLoading(true);
      setError(null);
      const locationData = isDummyMode
        ? generateRandomCoordinates()
        : await getLocationUpdates();
      setData(locationData);
      setLoading(false);
    } catch (error) {
      setError(error || 'Error fetching vehicle updates');
      setLoading(false);
    }
  };

  const startPolling = () => {
    if (intervalId.current) return;
    intervalId.current = setInterval(() => {
      fetchUpdates();
    }, 3000);
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
  }, [fetchUpdates]);

  return {
    loading,
    error,
    data,
    startPolling,
    stopPolling,
  };
};

export default useVehicleLocationSubscription;
