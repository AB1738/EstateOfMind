"use client";
import { Map as MapComponent, Marker } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below
import { useEffect, useState } from "react";

interface CoordinatesProps {
  coordinates: [lattitude: number, longitude: number];
}

const Map = ({ coordinates }: CoordinatesProps) => {
  const [lng, setLng] = useState<number>(coordinates[0]);
  const [lat, setLat] = useState<number>(coordinates[1]);

  return (
    <div className="py-2">
      <MapComponent
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 12,
        }}
        style={{ width: "100%", height: 400 }}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
      >
        <Marker longitude={lng} latitude={lat} color="red" />
      </MapComponent>
    </div>
  );
};
export default Map;
