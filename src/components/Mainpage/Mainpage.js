import React from "react";
import TopchartItem from "../shared/Topcharts/TopchartItem";
import "./Mainpage.css";
const Mainpage = ({topChartsClick}) => {
    return (
        <>
            <div className="hero-section">
              <div className="hero-section-text">
                <p>Curated playlist</p>
                <div className="hero-section-rnb">
                  <h1>R & B Hits</h1>
                  <p>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
                </div>
                <div className="hero-section-likes">
                  <div className="hero-section-likes-1">
        <div className="hero-section-likes-img">
                    <img src="images/likes2.png" alt="likes by profile"/>
                  </div>
                       <div className="hero-section-likes-img">
                    <img src="images/likes2.png" alt="likes by profile"/>
                  </div>
                       <div className="hero-section-likes-img">
                    <img src="images/likes2.png" alt="likes by profile"/>
                  </div>
                       <div className="hero-section-likes-img">
                    <img src="images/likes2.png" alt="likes by profile"/>
                  </div>
                       <div className="hero-section-likes-img">
                    <img src="images/likes2.png" alt="likes by profile"/>
                  </div>
                  </div>
                  <div className="heart-white-div">
                    <img src="images/heartwhite.png" alt="white heart icon"/>
                  </div>
                  <p>33k Likes</p>
          
                </div>

              </div>
              <div className="hero-section-image">
                <img src="images/eric.png" alt="A musician"/>
              </div>
                 </div>
          <div className="top-charts">
            <h1>Top Charts</h1>
            <div className="top-charts-div">
            <TopchartItem imageSource={"images/face.png"} trackName="Golden age of 8os" tarckArtist={"Sean swadder"}
              trackTime={"2:34:45"} onClick={ topChartsClick}
              />
                        <TopchartItem imageSource={"images/fly.png"} trackName="Golden age of 8os" tarckArtist={"Sean swadder"}
              trackTime={"2:34:45"} onClick={ topChartsClick}
              />
                        <TopchartItem imageSource={"images/lead.png"} trackName="Golden age of 8os" tarckArtist={"Sean swadder"}
              trackTime={"2:34:45"} onClick={ topChartsClick}
              />

            </div>

              </div> 
        </>
    )
}
export default Mainpage;