import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import TopchartItem from "../shared/Topcharts/TopchartItem";
import Newreleases from "../shared/Newreleases/Newreleases";

const Home = () => {
  return (
    <>
      <div className="container">
        
   
      <header className="header">
        <img src="images/logo.png" alt="logo" />

        <div className={"searchinput-div"}>
          <FontAwesomeIcon
            icon={faSearch}
            size="1x"
            width={11}
            className="search-icon"
          />

          <input
            type="text"
            className={"search-box"}
            placeholder="Search artists"
            //   onChange={handleSearchCountry}
            //   value={searchValue}
          />
        </div>
      </header>
          <main className="main">
              <section className="nav-hero-section">
              <div className="navigation">
        <div className="navigation-1">
          <div className="navigation-icon-div">
            <img src="images/home.png" alt="home icon" />
          </div>
          <div className="navigation-icon-div">
            <img src="images/playlist.png" alt="home icon" />
          </div>
          <div className="navigation-icon-div">
            <img src="images/radio.png" alt="home icon" />
          </div>
          <div className="navigation-icon-div">
            <img src="images/videos.png" alt="home icon" />
          </div>
        </div>
        <div className="navigation-2">
          <div className="navigation-icon-div">
            <img src="images/profile.png" alt="home icon" />
          </div>
          <div className="navigation-icon-div">
            <img src="images/logout.png" alt="home icon" />
          </div>
        </div>                 
              </div>
 
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
                    <img src="images/likes2.png"/>
                  </div>
                       <div className="hero-section-likes-img">
                    <img src="images/likes2.png"/>
                  </div>
                       <div className="hero-section-likes-img">
                    <img src="images/likes2.png"/>
                  </div>
                       <div className="hero-section-likes-img">
                    <img src="images/likes2.png"/>
                  </div>
                       <div className="hero-section-likes-img">
                    <img src="images/likes2.png"/>
                  </div>
                  </div>
                  <div>
                    <img src="images/heartwhite.png" alt="white heart icon"/>
                  </div>
                  <p>33k Likes</p>
          
                </div>

              </div>
              <div className="hero-section-image">
                <img src="images/eric.png"/>
              </div>
         
              {/* <img src="images/heroSection.png" alt="hero section" /> */}
        </div>
          <div className="top-charts">
            <h1>Top Charts</h1>
            <div className="top-charts-div">
              <TopchartItem imageSource={"images/face.png"} trackName="Golden age of 8os" tarckArtist={"Sean swadder"}
              trackTime={"2:34:45"}
              />
                        <TopchartItem imageSource={"images/fly.png"} trackName="Golden age of 8os" tarckArtist={"Sean swadder"}
              trackTime={"2:34:45"}
              />
                        <TopchartItem imageSource={"images/lead.png"} trackName="Golden age of 8os" tarckArtist={"Sean swadder"}
              trackTime={"2:34:45"}
              />

            </div>

              </div>                 
              </section>
 
              <section>
                  <h1>New releases</h1>
             
              <div className="new-releases">
            <Newreleases imageSource={"images/alpha.png"} releaseTitle={"Life in a bubble"} />
            <Newreleases imageSource={"images/mountain.png"} releaseTitle={"Mountain"} />
            <Newreleases imageSource={"images/fly.png"} releaseTitle={"Limits"} />
            <Newreleases imageSource={"images/sun.png"} releaseTitle={"Everything black"} />
            <Newreleases imageSource={"images/face.png"} releaseTitle={"Cancelled"} />
            <Newreleases imageSource={"images/ink.png"} releaseTitle={"Nomad"} />
            <Newreleases imageSource={"images/blind.png"} releaseTitle={"Blind"} />
            <Newreleases imageSource={"images/lead.png"} releaseTitle={"Alone"} />
            <Newreleases imageSource={"images/black.png"} releaseTitle={"Face off"} />
            <Newreleases imageSource={"images/mountain.png"} releaseTitle={"Gone"} />
            <Newreleases imageSource={"images/sun.png"} releaseTitle={"Here again"} />

            
 

                  </div>
                   </section>
        </main>
           </div>
    </>
  );
};
export default Home;
