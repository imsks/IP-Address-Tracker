import React from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";

const MarkerIcon = ({ position }) => {
  const markerIcon = L.icon({
    iconUrl: require("../styles/images/pattern-bg.png"),
  });

  return <Marker position={position} icon={markerIcon} />;
};

export default MarkerIcon;
