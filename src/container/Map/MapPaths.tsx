import React from "react";

type Path = {
  name: string;
  d: string;
};
type PathsProps = {
  paths: Path[];
  onMouseEnter: (index: number) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
  onClick: (e: React.MouseEvent) => void;
};

export const MapPaths = ({
  paths,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: PathsProps) => {
  const handleMouseEnter = (index: number) => (e: React.MouseEvent) =>
    onMouseEnter(index);
  return (
    <svg
      className="svgMap"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 283.5 538.6"
      xmlSpace="preserve"
    >
      {paths.map(({ name, d }, index) => (
        <path
          key={name + index}
          data-name={name}
          d={d}
          onClick={onClick}
          className="region"
          onMouseEnter={handleMouseEnter(index)}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </svg>
  );
};
