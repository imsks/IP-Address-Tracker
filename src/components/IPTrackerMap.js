import React, { useState } from "react";
import { useMap } from "../utils/hooks";
import FullMapContainer from "./MapContainer";

const IPTrackerMap = ({ coordinates }) => {
  const [position, setPosition] = useState([]);

  useMap(coordinates, setPosition);

  console.log(position);

  return (
    <section className="ipaddressapp__map">
      {position.length > 0 ? (
        <FullMapContainer position={position} />
      ) : (
        ""
      )}
    </section>
  );
};

export default IPTrackerMap;
