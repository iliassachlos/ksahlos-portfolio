import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { IExhibits } from '../../interfaces/global.interface';

interface ILeafletMapProps {
    exhibits: IExhibits[];
}

function LeafletMap({ exhibits }: ILeafletMapProps) {
    // Marker icon
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
            {exhibits.map((exhibit) => (
                <Marker icon={markerIcon} key={exhibit.id} position={exhibit.coordinates}>
                    <Popup>{exhibit.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default LeafletMap;
