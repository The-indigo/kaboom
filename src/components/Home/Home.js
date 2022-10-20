import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

import "./Home.css";
import Newreleases from "../shared/Newreleases/Newreleases";
import Search from "../shared/Search/Search";
import Nav from "../shared/Nav/Nav";
import Mainpage from "../Mainpage/Mainpage";
import bg from "./lead.png";
import Collections from "../Collections/Collections";
import Viewchartoralbum from "../Viewchartoralbum/Viewchartoralbum";
import Audiocontrols from "../shared/Audiocontrols/Audiocontrols";
import Mobilenav from "../shared/Mobilenav/Mobilenav";


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
      // var getBody = document.querySelector('body');
      // console.log(getBody)
      // var bodyAfter = window.getComputedStyle(getBody, "::after");
      // console.log(bodyAfter)
    //    content: "";
    // background: url("/images/lead.png");
    // background-repeat: no-repeat;
    // background-size: 100% 80vh;
    // opacity: 0.2;
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
    // position: absolute;
    //   z - index: -1;
      // bodyAfter.style.backgroundColor = "red";
      // bodyAfter.style.backgroundImage = `url(${bg})`;
      // document.body.style.backgroundRepeat = "no-repeat";
      // document.body.style.backgroundSize = "100% 80vh";
      // document.body.style.backgroundColor = "#1E1E1E";
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
        <Mobilenav/>
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
                  <Newreleases
                    imageSource={"images/alpha.png"}
                    releaseTitle={"Life in a bubble"}
                  />
                  
                 <Newreleases
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
                  /> 
                </div>
              </section>
            
          </main>
        </div>
        <div className="audio-div">
       <Audiocontrols/>
        </div>
      </>
    );
  }
};
export default Home;
