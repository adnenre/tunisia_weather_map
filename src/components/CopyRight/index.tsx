import Text from "../Text";
import Portlet from "../Portlet";
import { TextProps } from "../Interfaces";
interface CopyRightProps extends TextProps {
  value: string;
}
const CopyRight = ({ value, type, size }: CopyRightProps) => {
  return (
    <Portlet justifyContent="flex-end">
      <Text type={type} size={size} value={value} />
    </Portlet>
  );
};

export default CopyRight;
