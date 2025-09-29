import React from "react";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import campusImage from './ass'; // your screenshot

// Use actual image dimensions
const bounds = [
  [0, 0],          // top-left
  [1139, 2560]     // bottom-right
];

export default function CampusMap() {
  return (
    <MapContainer
      center={[1139 / 2, 2560 / 2]}  // center roughly middle of image
      zoom={0}                       // start at zoom 0
      style={{ height: "100vh", width: "100%" }}
      crs={L.CRS.Simple}             // simple coordinate system for static images
    >
      {/* Overlay the campus image */}
      <ImageOverlay url={campusImage} bounds={bounds} />

      {/* Example markers */}
      <Marker position={[600, 1200]}>
        <Popup>Library 📚</Popup>
      </Marker>

      <Marker position={[900, 2000]}>
        <Popup>Sports Center 🏟️</Popup>
      </Marker>
    </MapContainer>
  );
}
