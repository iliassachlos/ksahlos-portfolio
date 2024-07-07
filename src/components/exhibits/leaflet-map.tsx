import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ILocations } from '../../interfaces/global.interface';

function LeafletMap() {
    const locations: ILocations[] = [
        {
            name: 'MYTHOS Gallery, Skala Eresos Lesvos',
            coordinates: [39.13515977866505, 25.930645181969865],
        },
        {
            name: 'STONE HOUSE Gallery, Petra Lesvos',
            coordinates: [39.326620158236, 26.176737241503243],
        },
    ];

    const markerIcon = new Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
    });

    return (
        <MapContainer
            center={[39.326620158236, 26.176737241503243]}
            zoom={7}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
                                OpenStreetMap
                            </a> contributors'
            />
            {locations.map((location, index) => (
                <Marker icon={markerIcon} key={index} position={location.coordinates}>
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default LeafletMap;
