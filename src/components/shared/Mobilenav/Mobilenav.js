import React, { useState,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import "./Mobilenav.css"
const Mobilenav = ({ showHideNav, open, navClick }) => {
 
    return (
        <div className={`mobile-popup-div ${open?"open":null}`}>
         <div className="mobile-nav-logo-bar-div">

    <FontAwesomeIcon
            icon={faBars}
            size="2x"
            width={17}
                    className="mobile-nav-hide"
                    onClick={showHideNav}
          />
        <img src="images/logo.png" className="mobile-nav-hide" alt="logo" />
          </div>
          <div className={`nav-a-div`}>
               <div className="mobile-navigation-icon-div" >
              <img src="images/home.png" alt="home icon" />
              <span className="mobile-navigation-text">Home</span>
          </div>
          <div className="mobile-navigation-icon-div" >
              <img src="images/playlist.png" alt="collections icon" />
            <span className="mobile-navigation-text">My collections</span>
          </div>
          <div className="mobile-navigation-icon-div" >
              <img src="images/radio.png" alt="radio icon" />
              <span className="mobile-navigation-text">Radio</span>
          </div>
          <div className="mobile-navigation-icon-div">
              <img src="images/videos.png" alt="video icon" />
              <span className="mobile-navigation-text">Music Videos</span>
            </div>
                      <div className="mobile-navigation-icon-div">
              <img src="images/profile.png" alt="person icon" />
              <span className="mobile-navigation-text">Profile</span>
          </div>
          <div className="mobile-navigation-icon-div">
              <img src="images/logout.png" alt="logout icon" />
              <span className="mobile-navigation-text">Logout</span>
          </div>
        </div>          
          </div>
    )
}
export default Mobilenav