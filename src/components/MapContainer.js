import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerIcon from "./MarkerIcon";

const FullMapContainer = ({ position }) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "60vh", width: "100wh" }}
      key={Math.random()}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerIcon position={position} />
    </MapContainer>
  );
};

export default FullMapContainer;
