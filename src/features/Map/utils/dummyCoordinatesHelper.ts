const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
export const LATITUDE_DELTA = 0.00922;
export const LONGITUDE_DELTA = 0.00567;

export const generateRandomCoordinates = () => {
  return {
    latitude: LATITUDE + (Math.random() - 0.05) * (LATITUDE_DELTA / 2),
    longitude: LONGITUDE + (Math.random() - 0.05) * (LONGITUDE_DELTA / 2),
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
};
