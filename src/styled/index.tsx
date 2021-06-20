import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligne-items: center;
  width: 100vw;
`;
export const ContainerInfo = styled.div`
  height: 250px;
  width: 100%;
  max-width: 70%;
  padding: 20px 0;
  margin: 0 auto;
`;

export const WeatherCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  background: #38668c;

  border-radius: 10px;
`;

export const Card = styled.div`
  position: relative;
  text-align: center;
  color: white;

  width: 145px;
  background: linear-gradient(45deg, transparent, #3e6a90);
  ::after {
    content: url(top_right_corner.svg);
    position: absolute;
    top: -8px;
    right: -10px;
  }
  ::before {
    content: url(corner_bottom.svg);
    position: absolute;
    bottom: -10px;
    left: -5px;
  }
`;
