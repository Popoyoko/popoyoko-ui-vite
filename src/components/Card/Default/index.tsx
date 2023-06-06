import "./index.css";
import React from "react";
import RatioRectangle from "../../Ratio/Rectangle";

interface DefaultProps {
  label?: string;
  mention?: string;
  subTitle?: string;
  price?: number;
}

const Default = ({ label, mention, subTitle, price, ...props }: DefaultProps) => {
  return (
    <div>
      <div className="card">
        <RatioRectangle></RatioRectangle>
      </div>
      <div className="card-section">
        <div className="card-group">
          <p>{mention}</p>
          <div className="card-information">
            <div className="card-title">
              <p>{label}</p>
              <p>{subTitle}</p>
            </div>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
