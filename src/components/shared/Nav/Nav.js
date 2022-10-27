import React from "react"
import "./Nav.css";
const Nav = ({homeClick,collectionsClick,radioClick,page}) => {
    return (
        <>
                      <div className="navigation">
        <div className="navigation-1">
          <div className="navigation-icon-div" onClick={homeClick}>
           {page==="home" ?<img src="images/homeactive.png" alt="Active home icon" /> :<img src="images/home.png" alt="home icon" /> } 
          </div>
            <div className="navigation-icon-div" onClick={collectionsClick}>
                         {page==="collections" ?<img src="images/collectionsactive.png" alt="Active home icon" /> :<img src="images/playlist.png" alt="collections icon" />} 

          </div>
          <div className="navigation-icon-div" onClick={radioClick}>
            <img src="images/radio.png" alt="radio icon" />
          </div>
          <div className="navigation-icon-div">
            <img src="images/videos.png" alt="video icon" />
          </div>
        </div>
        <div className="navigation-2">
          <div className="navigation-icon-div">
            <img src="images/profile.png" alt="person icon" />
          </div>
          <div className="navigation-icon-div">
            <img src="images/logout.png" alt="logout icon" />
          </div>
        </div>                 
              </div>
        </>
    )
}
export default Nav