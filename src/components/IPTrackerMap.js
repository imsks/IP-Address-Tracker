import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const IPTrackerMap = ({ coordinates }) => {
  const { lat, lng } = coordinates;

  const defaultPosition = [lat, lng];
  console.log(defaultPosition)

  // const newicon = new L.icon({
  //   iconUrl: require("../styles/images/icon-location.svg"),
  //   iconSize: [30, 30]
  // });

  return (
    <section className="ipaddressapp__map">
      <MapContainer
        center={defaultPosition}
        zoom={13}
        style={{ height: "100vh", width: "100wh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={defaultPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default IPTrackerMap;
