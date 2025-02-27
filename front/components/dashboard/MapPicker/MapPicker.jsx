"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapPicker.css"

const customIcon = L.icon({
	iconUrl: "/images/map/location.svg",
	iconSize: [32, 32],
	iconAnchor: [16, 32],
});

const MapPicker = ({ lat, lng, setLat, setLng }) => {
	const [position, setPosition] = useState(lat && lng ? [lat, lng] : [50.27, 30.31]);

	// Обработчик клика по карте
	const MapClickHandler = () => {
		useMapEvents({
			click(e) {
				const { lat, lng } = e.latlng;
				setLat(lat.toFixed(6));
				setLng(lng.toFixed(6));
				setPosition([lat, lng]);
			},
		});
		return null;
	};

	return (
		<MapContainer
			center={position}
			zoom={4}
			style={{ height: "300px", width: "100%", maxWidth: "900px", border: "1px solid #000", borderRadius: "5px", marginBottom: "20px" }}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<MapClickHandler />
			{lat && lng && <Marker position={[lat, lng]} icon={customIcon} />}
		</MapContainer>
	);
};

export default MapPicker;