import React from "react";
import "./SeBy.css";
import { sebyData } from "../../data/seby";
import whiteTick from "../../assets/whiteTick.png"

const SeBy = () => {
  return (
    <div className="seby-container" id="features">
    <div className="blur blur-seby1"></div>
    <div className="blur blur-seby2"></div>
      <div className="benefits-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Discover the Advantages</span>
        <span>of Our Platform</span>
        <span className="stroke-text">for Your Business</span>
      </div>
      {/* seby cards */}
      <div className="sebys">
        {sebyData.map((seby, i) => (
          <div className="seby" key={i}>
            {seby.icon}
            <span>{seby.name}</span>
            <span>{seby.price}</span>
            <div className="features">
                {seby.features.map((feature, i)=>(
                    <div className="feature">
                        <img src={whiteTick} alt="" />
                        <span key={i}>{feature}</span>
                    </div>
                ))}
            </div>
            <div><span>See More benefits</span></div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeBy;
