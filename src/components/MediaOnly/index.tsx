import "./index.css";
import React from "react";
import RatioRectangle from "../RatioRectangle";

interface MediaOnlyProps {}

const MediaOnly = ({}: MediaOnlyProps) => {
  return (
    <div>
        <RatioRectangle></RatioRectangle>
    </div>
  );
};

export default MediaOnly;
