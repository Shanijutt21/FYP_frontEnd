import React from "react";
import "./Buyer.css";
import { useAuth } from "../../context/UserAuthContext";
import Logo from "../../assets/B.png";
import { faArrowAltCircleRight, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCheckCircle, faSignOutAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

const BuyerSideBar = ({setSelectedPage}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const userlogout = async() => {
    try{
      await logout();
      navigate("/")
    }catch(error) {}
  }
  return (
    <div className="body new-body">
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={Logo} alt="imageLogo" className="logo" />
            </span>
            <div className="text header-text">
              <span className="name">Buyer's </span>
              <span className="work">Dashboard</span>
            </div>
          </div>
          <div className="toggle">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </div>
        </header>
        <div className="menu-bar">
          <div className="menu">
            {/* <li className="search-box">
              <a href="#">
                <FontAwesomeIcon icon={faSearch} className="icon" />
                <input type="search" placeholder="search..." />
              </a>
            </li> */}
            <br />
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <FontAwesomeIcon icon={faHome} className="icon" />
                  <span className="text nav-text">Dashboard</span>
                  {/* <button className="text nav-text">Dashboard</button> */}
                </a>
              </li>
              <li className="nav-link">
                <a onClick={() => setSelectedPage('profile')}>
                  <FontAwesomeIcon icon={faUserCircle} className="icon" />
                  <span className="text nav-text">Profile</span>
                </a>
              </li>
              <li className="nav-link">
                <a onClick={() => setSelectedPage('viewAvail')}>
                  <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                  <span className="text nav-text">View Available waste</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li className="k">
              <a href="#">
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                <Link to={"/"}>

                <span onClick={userlogout} className="text nav-text">LogOut</span>
                </Link>
              </a>
            </li>
            <li className="k">
              <a href="#">
                <FontAwesomeIcon icon={faCog} className="icon" />
                <span className="text nav-text">Settings</span>
              </a>
            </li>
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BuyerSideBar;
