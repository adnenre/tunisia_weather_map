import styled from "styled-components";
import { TextProps } from "../Interfaces";

export const SText = styled.div<TextProps>`
  font-size: ${({ size, theme }) =>
    size ? theme.size[size] : theme.size.default};
  color: ${({ type, theme }) =>
    type ? theme.colors[type] : theme.colors.default};
`;
