import { useEffect, useState } from "react";

export const useMouseCordinate = () => {
  const [cordinate, setCordinate] = useState({
    x: 0,
    y: 0,
    mouseInLeftHalf: false,
  });

  useEffect(() => {
    const setFromEvent = (e: any) =>
      setCordinate({
        x: e.clientX,
        y: e.clientY,
        mouseInLeftHalf: window.innerWidth / 2 > e.pageX ? true : false,
      });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return cordinate;
};
