import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.375rem', // Set the border radius here
  overflow: 'hidden', // Ensure corners are rounded properly

};

const center = {
  lat: 37.094997511649645, // Latitud de Archidona
  lng: -4.38231506958418, // Longitud de Archidona
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCtvW_aSaV45AOPeUzuRs9Q5Rk1erZHvGI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
