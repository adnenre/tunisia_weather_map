import { useContext } from "react";
import { AppStateContext } from "../state/AppStateContext";
import { ContainerInfo } from "../styled";
import WeatherCard from "../components/WeatherCard";
import Text from "../components/Text";
import Portlet from "../components/Portlet";

const MapInfo = () => {
  const { data } = useContext(AppStateContext);

  return (
    <ContainerInfo>
      <Portlet justifyContent="center" padding="1rem">
        <Text type="primary" size="xLarge" value={data.name} />
      </Portlet>

      <Portlet justifyContent="space-around" padding="1rem">
        {data?.weatherDetails?.length > 0 &&
          data?.weatherDetails.map((el: any, index: number) => (
            <WeatherCard
              key={index}
              logo={el.logo}
              description={el.description}
              value={el.value}
            />
          ))}

        {/* <WeatherCard logo="sunset" description="Sun Set" value={sunSet} />
        <WeatherCard
          logo="day-windy"
          description="Wind Speed"
          value={windSpeed}
        />
        <WeatherCard logo="humidity" description="Humidity" value={humidity} />
        <WeatherCard
          logo="barometer"
          description="Temperature"
          value={temperature}
        /> */}
      </Portlet>
    </ContainerInfo>
  );
};

export default MapInfo;
