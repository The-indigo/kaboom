import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle,faBackwardStep,faForwardStep,faPlay,faRepeat} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Newreleases from "../shared/Newreleases/Newreleases";
import Search from "../shared/Search/Search";
import Nav from "../shared/Nav/Nav";
import Mainpage from "../Mainpage/Mainpage";
import bg from "./lead.png";
import Collections from "../Collections/Collections";
import Viewchartoralbum from "../Viewchartoralbum/Viewchartoralbum";


let albumData = [];

const Home = () => {
  const [page, setPage] = useState("home");
  const [albums,setAlbums]=useState([])
  useEffect(() => {
    // const fetchAlbums = async () => {
    //   try {
    //     const response = await axios.request(options);
    //     if (response.data && response.status === 200) {
    //       albumData = response.data.albums;
    //       setAlbums(response.data.albums)
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchAlbums();
  }, []);
  useLayoutEffect(() => {
    if (page === "topcharts") {
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "100% 80vh";
      document.body.style.backgroundColor = "#1E1E1E";
      // document.body.style.backgroundBlendMode="smooth"
    } else {
      document.body.style.backgroundImage = "none";
    }
  }, [page]);
  const homeClick = () => {
    setPage("home");
  };
  const collectionsClick = () => {
    setPage("collections");
  };
  const topChartsClick = () => {
    setPage("topcharts");
  };

  if (page === "collections") {
    return (
      <>
        <div className="container">
          <Search />
          <main className="main">
            <section className="nav-hero-section">
              <Nav homeClick={homeClick} collectionsClick={collectionsClick} />
              <Collections />
            </section>
          </main>
        </div>
      </>
    );
  } else if (page === "topcharts") {
    return (
      <>
        <div className="container">
          <Search />
          <main className="main">
            <section className="nav-hero-section">
              <Nav homeClick={homeClick} collectionsClick={collectionsClick} />
              <Viewchartoralbum />
            </section>
          </main>
        </div>
      </>
    );
  } else if (page === "home") {
    return (
      <>
        <div className="container">
          <Search />
          <main className="main">
            <section className="nav-hero-section">
              <Nav homeClick={homeClick} collectionsClick={collectionsClick} />
              <Mainpage topChartsClick={topChartsClick} />
            </section>
           
              <section>
                <h1>New releases</h1>
                <div className="new-releases">
                  {/* console.log(albumData.albums[0]) */}
                  {albums.map((e) => (
                  <Newreleases
                      imageSource={e.images[1].url?e.images[1].url:"images/face.png"}
                      releaseTitle={e.name?e.name:"Mountain"}
                    />
                  ))}
                  {/* <Newreleases
                    imageSource={"images/alpha.png"}
                    releaseTitle={"Life in a bubble"}
                  /> */}
                  {/* <Newreleases
                    imageSource={"images/mountain.png"}
                    releaseTitle={"Mountain"}
                  />
                  <Newreleases
                    imageSource={"images/fly.png"}
                    releaseTitle={"Limits"}
                  />
                  <Newreleases
                    imageSource={"images/sun.png"}
                    releaseTitle={"Everything black"}
                  />
                  <Newreleases
                    imageSource={"images/face.png"}
                    releaseTitle={"Cancelled"}
                  />
                  <Newreleases
                    imageSource={"images/ink.png"}
                    releaseTitle={"Nomad"}
                  />
                  <Newreleases
                    imageSource={"images/blind.png"}
                    releaseTitle={"Blind"}
                  />
                  <Newreleases
                    imageSource={"images/lead.png"}
                    releaseTitle={"Alone"}
                  />
                  <Newreleases
                    imageSource={"images/black.png"}
                    releaseTitle={"Face off"}
                  />
                  <Newreleases
                    imageSource={"images/mountain.png"}
                    releaseTitle={"Gone"}
                  />
                  <Newreleases
                    imageSource={"images/sun.png"}
                    releaseTitle={"Here again"}
                  /> */}
                </div>
              </section>
            
          </main>
        </div>
        <div className="audio-div">
          <div className="audio-player-details">
        <div className="audio-image-div"> 
            <img src="images/face.png"/>
            </div>
            <div className="audio-text-div">
              <p>Seasons in</p>
              <p>James</p>
            </div>
          </div>

          <div className="audio-controls-div">
            <div className="audio-top-controls">
         <FontAwesomeIcon
            icon={faShuffle}
            size="1x"
            width={11}
            className="audio-icon"
              />
                    <FontAwesomeIcon
            icon={faBackwardStep}
            size="1x"
            width={11}
            className="audio-icon"
              />
                    <FontAwesomeIcon
            icon={faForwardStep}
            size="1x"
            width={11}
            className="audio-icon"
              />
                    <FontAwesomeIcon
            icon={faPlay}
            size="1x"
            width={11}
            className="audio-icon"
              />
                    <FontAwesomeIcon
            icon={faRepeat}
            size="1x"
            width={11}
            className="audio-icon"
          />
            </div>
                 <div className="audio-bottom-controls">

            </div>
    </div>
           <audio id="audio-player"
          src={""}
          // ref={""}
        ></audio>
        </div>
      </>
    );
  }
};
export default Home;
