import styled from "styled-components";
export const MapContainer = styled.div`
  margin: auto;
  width: 220px;
  position: relative;
`;
export const MapFooterContainer = styled.div`
  position: absolute;
  bottom: -10px;
  left: 34%;
  z-index: -1;
  perspective: 150px;
`;

export const MapFooterAnimation = styled.div` 
    width: 100px;
    height: 100px;
    border-radius: 50%;
  
    transform: rotateX(57deg) rotateZ(180deg);
    border: solid 15px #4dd;
    opacity: 1;
    transition: 1s ease-in-out;
    border-left: solid 15px transparent;
    border-right: solid 15px transparent;
    box-shadow: 0px 0px 50px 5px #80deea;
    animation: rot 2s infinite linear;
  }
  @keyframes rot {
    0% {
      transform: rotateX(57deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(57deg) rotateZ(-180deg);
    }
  }
  `;
