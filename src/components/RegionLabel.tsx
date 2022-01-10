import React from "react";
import { LabelBottom, LabelContainer, LabelTitle } from "./RegionLabel.styled";

type MousePosition = {
  x: number;
  y: number;
  mouseInLeftHalf: boolean;
};

type RegioLabelProps = {
  label: string | null;
  position: MousePosition;
};
const RegionLabel = ({ label, position }: RegioLabelProps) => {
  return (
    <>
      {label && (
        <LabelContainer position={position}>
          <LabelTitle>
            <h5>{label}</h5>
          </LabelTitle>
          <LabelBottom position={position} />
        </LabelContainer>
      )}
    </>
  );
};

export default RegionLabel;
