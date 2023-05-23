import React from "react";
import "./Why.css";
import image1 from "../../assets/image1.jpg";
import image4 from "../../assets/image4.jpg";
import tick from "../../assets/tick.png";
const Why = () => {
  return (
    <div className="why" id="why">
      <div className="left-w">
        <img src={image1} alt="images" />
        <img src={image4} alt="images" />
      </div>
      <div className="right-w">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img className="imgww" src={tick} alt="tick"></img>
            <span>Help reduce food waste</span>
          </div>
          <div>
            <img className="imgww" src={tick} alt="tick" />
            <span>Transparent bidding process:</span>
          </div>
          <div>
            <img className="imgww" src={tick} alt="tick" />
            <span>Sustainability and environmental benefits:</span>
          </div>
          <div>
            <img className="imgww" src={tick} alt="tick" />
            <span>Easy registration process</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
