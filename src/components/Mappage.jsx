import React from "react";
import campusMapImage from "../assets/Campus.jpg";
import { markers } from "../data/markers"; // Use your markers data

const imageWidth = 8192;
const imageHeight = 4000;

const Mappage = () => {
  // Convert pixel coordinates to percentages for responsiveness
  const responsiveMarkers = markers.map(marker => ({
    ...marker,
    x: (marker.x / imageWidth) * 100,
    y: (marker.y / imageHeight) * 100,
  }));

  const aspectRatio = (imageHeight / imageWidth) * 100;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: `${imageWidth}px`,
        paddingTop: `${aspectRatio}%`,
        border: "1px solid #ccc",
        margin: "20px auto",
        overflow: "hidden",
      }}
    >
      <img
        src={campusMapImage}
        alt="Campus Map"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {responsiveMarkers.map((marker, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${marker.y}%`,
            left: `${marker.x}%`,
            transform: "translate(-50%, -100%)",
            cursor: "pointer",
            fontSize: "24px",
          }}
          title={marker.name}
          onClick={() => alert(`This is the ${marker.name}`)}
        >
          📍
        </div>
      ))}
    </div>
  );
};

export default Mappage;