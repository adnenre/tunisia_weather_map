import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 2.3fr 1.3fr 0.1fr;
  gap: 10px 0px;
  grid-template-areas:
    "."
    "."
    "."
    ".";
  height: 100vh;
`;
export const AppHeader = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
export const AppBody = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;
export const AppInfo = styled.div`
  grid-area: 3 / 1 / 5 / 2;
`;
export const AppFooter = styled.div`
  grid-area: 4 / 1 / 5 / 2;
`;
