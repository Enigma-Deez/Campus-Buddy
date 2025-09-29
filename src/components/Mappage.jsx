import React from "react";
// FIX 1: Import the image directly.
// This is the standard practice in React with build tools like Vite or Webpack.
import campusMapImage from "./assets/Campus.png";

const CampusMap = () => {
  // Original image dimensions
  const imageWidth = 1801;
  const imageHeight = 998;

  // FIX 2: Convert pixel coordinates to percentages.
  // This makes the markers responsive to the new image size.
  const markers = [
    { name: "Library", x: (1200 / imageWidth) * 100, y: (600 / imageHeight) * 100 },
    { name: "Sports Center", x: (2000 / imageWidth) * 100, y: (900 / imageHeight) * 100 },
    { name: "Cafeteria", x: (1500 / imageWidth) * 100, y: (400 / imageHeight) * 100 },
  ];

  // Calculate the aspect ratio to maintain the image's proportion.
  const aspectRatio = (imageHeight / imageWidth) * 100;

  return (
    <div
      style={{
        position: "relative",
        // FIX 3: Use a responsive width, and a dynamic height based on aspect ratio.
        width: "100%", 
        maxWidth: `${imageWidth}px`, // Limits the maximum size to original
        paddingTop: `${aspectRatio}%`,
        border: "1px solid #ccc",
        margin: "20px auto",
        overflow: "hidden",
      }}
    >
      <img
        // FIX 4: Use the imported image variable.
        src={campusMapImage}
        alt="Campus Map"
        style={{
          // FIX 5: Set image dimensions to 100% of parent container.
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {markers.map((marker, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            // FIX 6: Use percentage values for positioning.
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

export default CampusMap;