import React from "react";
import { Map, Marker } from "pigeon-maps";

const MyMap = () => {
  return (
    <Map height={500} defaultCenter={[36.806389, 10.181667]} defaultZoom={11}>
      <Marker width={100} anchor={[36.806389, 10.181667]} />
    </Map>
  );
};
export default MyMap;
