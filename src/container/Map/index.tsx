import { useState, useContext } from "react";
import { data } from "../../data.js";
import { useMouseCordinate } from "../../hooks/useMouseCordinate";
import RegionLabel from "../../components/RegionLabel";

import { MapPaths } from "./MapPaths";
import { MapContainer } from "./Map.styled";
import { MapFooter } from "./MapFooter";
import { AppStateContext } from "../../state/AppStateContext";
import WeatherService from "../../WeatherService/index";

const Map = () => {
  const [currentRegion, setCurrentRegion] = useState<any>(null);
  const { setRegionData } = useContext(AppStateContext);
  // MOUSE OVER REGION HANDLER
  const handleMouseEnter = (index: number) => {
    let region = data[index];

    setCurrentRegion(region);
  };
  const handleMouseClick = () => {
    WeatherService.load(currentRegion.name, setRegionData);
  };
  // MOUSE LEFT REGION HANDLER
  const handleMouseLeave = () => {
    setCurrentRegion(null);
  };

  const position = useMouseCordinate();
  return (
    <>
      <MapContainer>
        <MapPaths
          paths={data}
          onClick={handleMouseClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <MapFooter />
      </MapContainer>
      {/* <ImageRegion
        url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4c/9c/fc/haidra-en-hiver.jpg?w=500&h=300&s=1"
        name="test"
      /> */}
      <RegionLabel position={position} label={currentRegion?.name} />
    </>
  );
};

export default Map;
