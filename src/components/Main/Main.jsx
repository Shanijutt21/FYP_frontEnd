import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import basket_image from "../../assets/basket_image.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { useState } from "react";
import { Link } from "react-router-dom";


const Main = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  //state to toggle the display of the popup
  const [showPopup, setShowPopup] = useState(false);

  //Handler for clicking the "Buttons"
  const handleClick = () => {
    setShowPopup(true);
  };

  //Handler for clicking an option in the popup
  const handlePopupOptionClick = (type) => {
    setShowPopup(false);
  };

  return (
    <div className="main" id="home">
      <div className="blur blur-main"></div>
      <div className="left">
        <Navbar />

        {/* MAIN TEXT  */}
        <div className="main-text">
          <div>
            <span className="stroke-text">Clean</span>
            <span>CAN</span>
          </div>
          <div>
            <span>
              Take control of your food scraps and reduce waste with our
              innovative smart container, while enjoying the convenience of
              modern technology.
            </span>
          </div>
        </div>
        {/* THE ADD  */}
        <div className="the-add">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Food Container for reduction of food Scraps</span>
        </div>
        {/* FIGURES  */}
        <div className="figs">
          <div>
            <span>
              <NumberCounter
                end={159}
                start={89}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>hotels</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={10}
                start={1}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>malls</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={50}
                start={1}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>fertilizer industries</span>
          </div>
        </div>

        {/* BUTTONS  */}
        <div className="main-buttons">
          <button className="btn" onClick={handleClick}>
            Get Started
          </button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right">
        {!mobile && (
          <button className="btn" onClick={handleClick}>
            Join Now
          </button>
        )}
        <img src={basket_image} alt="basket" className="basket-image" />
      </div>

      {/* Popup  */}
      {showPopup && (
        <div className="popup">
          <h2>Choose the type</h2>
          <button className="close-btn" onClick={() => setShowPopup(false)}>
            X
          </button>
          <ul>
            {/* <li onClick={() => handlePopupOptionClick("Seller")}>
              <Link to="/sellerReg">
                <button className="btn">SellerReg</button>
              </Link>
            </li>
            <li onClick={() => handlePopupOptionClick("Seller")}>
              <Link to="/seller">
                <button className="btn">Seller</button>
              </Link>
            </li> */}
            <li onClick={() => handlePopupOptionClick("Buyer")}>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            </li>
            <li onClick={() => handlePopupOptionClick("Admin")}>
            <Link to="/admin">
              <button className="btn">Admin</button>
            </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Render the Admin component if the URL matches "/admin" */}
      {/* <Route path="/admin" component={AdminLogin} /> */}
    </div>
  );
};

export default Main;
