import { createContext, useState, useEffect } from "react";
import WeatherService from "../WeatherService";
export const AppStateContext = createContext<any | null>(null);

export const AppStateProvider = ({ children }: any) => {
  const [data, setData] = useState({});

  const buildData = (data: any) => {
    const { name, weatherDetails } = data;

    setData({ name, weatherDetails });
  };
  const loadData = () => {
    WeatherService.load("Tunisia", buildData);
  };
  const setRegionData = (regionData: any) => {
    buildData(regionData);
  };
  useEffect(() => {
    loadData();
  }, []);
  const { Provider } = AppStateContext;

  return <Provider value={{ data, setRegionData }}>{children}</Provider>;
};
