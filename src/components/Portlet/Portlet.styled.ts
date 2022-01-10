import styled from "styled-components";

export type SPortletProps = {
  justifyContent?:
    | "center"
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end";
  padding?: string | null;
};
export const SPortlet = styled.div<SPortletProps>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};
  padding: ${({ padding }) => (padding ? padding : "0 1rem")}; ;
`;
