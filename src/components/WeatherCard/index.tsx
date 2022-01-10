import Text from "../Text";
import { Card } from "../../styled";
interface WeatherCardProps {
  logo: string;
  description: string;
  value: string;
}
const WeatherCard = ({ value, description, logo }: WeatherCardProps) => {
  return (
    <Card>
      <div className="w_info_logo">
        <i className={`wi wi-${logo}`}></i>
      </div>
      <div className="w_info_title">
        <Text size="small" value={description} />
        <Text size="medium" value={value} />
      </div>
    </Card>
  );
};

export default WeatherCard;
