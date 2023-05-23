import React from "react";
import "../App.css"
import Main from "./Main/Main";
import Benefits from "./Benefits/Benefits";
import Why from "./why/Why";
import SeBy from "./sellerBuyer/SeBy";
import Testo from "./testo/Testo";
import Footer from "./Footer/Footer";

const Combined = () => {
  return (
    <div>
      <Main /><br /><br />
      <Benefits />
      <Why />
      <SeBy />
      <Testo />
      <Footer />
    </div>
  );
};

export default Combined;
