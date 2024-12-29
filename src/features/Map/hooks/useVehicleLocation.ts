import {useState, useEffect} from 'react';
import {getStartingLocation} from '../service';

export type Coordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

const useVehicleLocation = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Object | null>(null);
  const [data, setData] = useState<Coordinates | null>(null);

  useEffect(() => {
    const getVehicleStartingLocation = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getStartingLocation();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error || 'Error fetching vehicle location');
        setLoading(false);
      }
    };

    getVehicleStartingLocation();
  }, []);

  return {loading, error, data};
};

export default useVehicleLocation;
