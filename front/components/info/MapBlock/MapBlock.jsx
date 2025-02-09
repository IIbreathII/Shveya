import "./MapBlock.css"
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import SearchMarkers from "$component/info/MapBlock/Search/Search";
import Image from "next/image";

const MapBlock = () => {
	const [selectedPoint, setSelectedPoint] = useState(null);

	// отримані данні із серверу
	const markers = [
		{
			id: 1,
			lat: 50.4501,
			lng: 30.5234,
			title: "Київське відділення",
			adress: "Вулиця *****, будинок 14",
			phone: "+380667328474"
		},
		{
			id: 2,
			lat: 48.463393,
			lng: 36.427997,
			title: "Петропавлівка",
			adress: "Вулиця *****, будинок 14",
			phone: "+380667328474"
		},
		{
			id: 3,
			lat: 18.463393,
			lng: 26.427997,
			title: "Нью-йорк",
			adress: "Вулиця *****, будинок 14",
			phone: "+380667328474"
		},
	]

	const customIcon = L.icon({
		iconUrl: 'images/map/location.svg',
		iconSize: [48, 48],
		iconAnchor: [24, 48],
		popupAnchor: [0, -48],
	});

	const ZoomToPoint = ({ lat, lng }) => {
		const map = useMap();
		map.flyTo([lat, lng], 10);
		return null;
	};

	const handleZoom = (lat, lng) => {
		setSelectedPoint({ lat, lng });
	};

	return (
		<div className="map">
			<div className="map__container">
				<h2 className="map__title _main-title">Знайти нас на мапі</h2>
				<SearchMarkers markers={markers} handleZoom={handleZoom} />
				<div className="map__body">
					<MapContainer
						center={[0, 0]}
						zoom={2}
						style={{ height: '100%', width: '100%', borderRadius: "5px" }}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>

						{markers.map(marker =>
							<Marker
								key={marker.id}
								position={[marker.lat, marker.lng]}
								eventHandlers={{
									click: () => setSelectedPoint({ lat: marker.lat, lng: marker.lng, })
								}}
								icon={customIcon}
							>
								<Popup>
									<h1 className="marker__title">{marker.title}</h1>
									<div className="marker__street">{marker.adress}</div>
									<div className="marker__number">Номер телефону:<br />{marker.phone}</div>
								</Popup>
							</Marker>
						)}

						{selectedPoint && <ZoomToPoint lat={selectedPoint.lat} lng={selectedPoint.lng} />}
					</MapContainer>
				</div>
			</div>
		</div>
	);
};

export default MapBlock;