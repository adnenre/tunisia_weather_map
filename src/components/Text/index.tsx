import { SText } from "./Text.styled";
import { TextProps as ITextProps } from "../Interfaces";
interface TextProps extends ITextProps {
  value: string;
}
const Text = ({ value, type, size }: TextProps) => {
  return (
    <SText type={type} size={size}>
      {value}
    </SText>
  );
};

export default Text;
