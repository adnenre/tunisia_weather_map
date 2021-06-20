import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  position: absolute;
`;

export const Title = styled.h3`
  color: #38668c;
  font-family: "Orbitron", cursive;
  position: relative;
  font-size: 22px;
  width: 130px;
  margin: auto;
  padding: 25px;
  text-align: center;
  ::before {
    content: "";
    width: 46px;
    height: 2px;
    left: 31px;
    top: 57px;
    z-index: 100;
    background: gray;
    position: absolute;
  }
  ::after {
    content: "map";
    width: 10px;
    height: 50px;
    top: 50px;
    font-size: 12px;
    left: 80px;
    /* background: red; */
    position: absolute;
  }
`;
