import {axiosService} from '../../../api';

export const getStartingLocation = async () => {
  try {
    const response = await axiosService.get(`/start`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle starting coordinates:', error);
    throw error;
  }
};

export const getLocationUpdates = async () => {
  try {
    const response = await axiosService.get(`/updates`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle updates:', error);
    throw error;
  }
};
