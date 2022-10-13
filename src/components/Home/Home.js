import React, { useState } from "react";
import "./Home.css";
import Newreleases from "../shared/Newreleases/Newreleases";
import Search from "../shared/Search/Search";
import Nav from "../shared/Nav/Nav";
import Mainpage from "../Mainpage/Mainpage";
import bg from "./lead.png"
import Collections from "../Collections/Collections";
import Viewchartoralbum from "../Viewchartoralbum/Viewchartoralbum";

const Home = () => {
  const [page, setPage] = useState("topcharts");
  const homeClick = () => {
    setPage("home")
  }
  const collectionsClick = () => {
    setPage("collections")
  }
  const topChartsClick=()=>{
    setPage("topcharts")
    // document.body.style.backgroundImage = `url(${bg})`
    // document.body.style.backgroundRepeat = "no-repeat"
    // document.body.style.backgroundSize = "cover"
    // document.body.style.backgroundColor="#1E1E1E"
    // document.body.style.backgroundBlendMode='multiply'
  }

  if (page === "collections") {
    return (
        
   <>
      <div className="container">
        <Search />
        <main className="main">
          <section className="nav-hero-section">
            <Nav homeClick={homeClick} collectionsClick={ collectionsClick} />
         <Collections />  
          </section>
        </main>
      </div>
    </>

    )
  } else if (page === "topcharts") {
    return (
              
   <>
      <div className="container">
        <Search />
        <main className="main">
          <section className="nav-hero-section">
            <Nav homeClick={homeClick} collectionsClick={ collectionsClick} />
          <Viewchartoralbum/>
          </section>
        </main>
      </div>
    </>
    )
  } else if (page === "home") {
  return (
    <>
      <div className="container">
        <Search />
        <main className="main">
          <section className="nav-hero-section">
            <Nav homeClick={homeClick} collectionsClick={ collectionsClick} />
        <Mainpage topChartsClick={topChartsClick}/>
          </section>
{page==="home" ?        <section>
            <h1>New releases</h1>
            <div className="new-releases">
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
          </section>: null }  
  
        </main>
      </div>
    </>
  );  
  }

  
};
export default Home;
