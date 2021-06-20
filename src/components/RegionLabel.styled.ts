import styled from "styled-components";

type LableContainerProps = {
  position: {
    x: number;
    y: number;
    mouseInLeftHalf: boolean;
  };
};
export const LabelContainer = styled.div.attrs<LableContainerProps>(
  ({ position: { x, y, mouseInLeftHalf } }) => ({
    style: {
      left: x ? (mouseInLeftHalf ? x - 150 : x + 50) : "",
      top: y ? y - 40 : "",
      position: "absolute",
    },
  })
)<LableContainerProps>``;

export const LabelTitle = styled.div`
  text-align: center;
  width: 100px;
  height: 30px;
  padding: 5px;
  color: white;
  font-size: 13px;
  font-family: "Orbitron", cursive;
  background: #38668c9c;
  ::after {
    content: url(top_right_corner.svg);

    position: absolute;
    top: -5px;
    right: -5px;
  }
  ::before {
    content: url(top_left_corner.svg);

    position: absolute;
    top: -5px;
    left: -5px;
  }
  @keyframes hide_show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const LabelBottom = styled.div<LableContainerProps>`
  width: 100px;
  left: ${({ position: { mouseInLeftHalf } }) =>
    mouseInLeftHalf ? "50px" : "-50px"};
  bottom: -10px;
  position: relative;
  background: gray;
  box-shadow: 0px 0px 2px 1px #80deea;
  ::after {
    content: "";
    padding: 4px;
    position: absolute;
    top: -4px;
    ${({ position: { mouseInLeftHalf } }) =>
      mouseInLeftHalf ? "left :0px;" : "right : 0px;"}
    border-radius: 50%;
    background: #80deea;
    box-shadow: 0px 0px 2px 1px #80deea;
    animation: pulsating 1s infinite;
  }
`;
