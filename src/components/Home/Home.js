import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <>
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
        <div className="  navigation-1">
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
          <img src="images/heroSection.png" alt="hero section" />
        </div>
        <div className="top-charts">
                  <div className="top-charts-item">
                      <img src="images/albums.png" alt="top chart items"/>
                      <div className="top-charts-details">
                          <p>Golden age of 8os</p>
                          <p>Sean swadder</p>
                            <p>2:34:45</p>
                      </div>
                      <div className="heart-div"> 
                           <img src="images/heart.png" alt="heart icon"/>
                      </div>
          </div>
              </div>                 
              </section>
 
              <section>
                  <h1>New releases</h1>
             
              <div className="new-releases">
                  <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>
                       <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src="images/alpha.png" alt="new release"/>
                      </div>  
                  <p>Life in a bubble</p>    
                  </div>

                  </div>
                   </section>
      </main>
    </>
  );
};
export default Home;
