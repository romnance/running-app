import React from "react";
import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";

const DotRing = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className="Ring"></div>
      <div className="Dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};

export default DotRing;
