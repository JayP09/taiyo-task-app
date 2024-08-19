import { useFetchCovidCountryData } from '../apis/query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MapLoadingSkeleton from './MapLoadingSkeleton';
import { twMerge } from 'tailwind-merge';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// Map component for rendering Map from api data
const MapComponent = () => {
  const { data, isLoading, isError } = useFetchCovidCountryData();

  // handle error in api fetch
  if (isError) {
    return (
      <div className='chart-container flex justify-center items-center'>
        Error Loading Data
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        'rounded-md overflow-hidden w-full z-10 h-full',
        isLoading && 'h-96',
      )}>
      {isLoading ? (
        <MapLoadingSkeleton /> // Loader
      ) : (
        <MapContainer center={[20, 0]} zoom={2} className='h-96 w-full'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {data?.map((country, index) => (
            <Marker
              key={index}
              position={[country.countryInfo.lat, country.countryInfo.long]}>
              <Popup>
                <strong>{country.country}</strong>
                <br />
                Active Cases: {country.active}
                <br />
                Recovered: {country.recovered}
                <br />
                Deaths: {country.deaths}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
