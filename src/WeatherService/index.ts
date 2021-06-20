class WeatherService {
  private url = `http://api.openweathermap.org/data/2.5/weather?q=`;
  private unit = "metric";
  private Apikey = "63fc3d9a6be2d5f85a3a754d1c9835e8";

  buildUrl = (region: string) => {
    return `${this.url}${region}&appid=${this.Apikey}&units=${this.unit}`;
  };

  buildDetail = (logo: string, description: string, value: string): object => {
    return { logo, description, value };
  };
  /**
   * FORMAT BACKEND RESPONCE
   * @param data backend responce
   * @returns
   */
  formatData = (data: any) => {
    const { name, sys, wind, main } = data;

    const sunRise = new Date(sys.sunrise * 1000).toLocaleTimeString();
    const sunSet = new Date(sys.sunset * 1000).toLocaleTimeString();
    const windSpeed = wind.speed + " km/h";
    const humidity = main.humidity + " g/kg";
    const temperature = main.temp + "°C";

    let weatherDetails: object[] = [];
    const sr: object = this.buildDetail("sunrise", "Sun Rise", sunRise);
    const ss: object = this.buildDetail("sunset", "Sun Set", sunSet);
    const w: object = this.buildDetail("day-windy", "Wind Speed", windSpeed);
    const p: object = this.buildDetail("humidity", "Humidity", humidity);
    const t: object = this.buildDetail("barometer", "Temperature", temperature);
    weatherDetails = [sr, ss, w, p, t];
    return { name, weatherDetails };
  };

  load = (region: string, callback: any) => {
    let url = this.buildUrl(region);
    const responce = fetch(url)
      .then((responce) => responce.json())
      .then(this.formatData)
      .then(callback)
      .catch((error) => console.log(error));

    return responce;
  };
}

export default new WeatherService();
