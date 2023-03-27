import React, { useEffect, useLayoutEffect, useState, useRef, useContext } from "react";
import "./Home.css";
import Newreleases from "../shared/Newreleases/Newreleases";
import Search from "../shared/Search/Search";
import Nav from "../shared/Nav/Nav";
import Mainpage from "../Mainpage/Mainpage";
import Collections from "../Collections/Collections";
import Viewchartoralbum from "../Viewchartoralbum/Viewchartoralbum";
import Audiocontrols from "../shared/Audiocontrols/Audiocontrols";
import Mobilenav from "../shared/Mobilenav/Mobilenav";
import { MusicContext } from "../../store/musicContext";
import gsap from "gsap";


const Home = () => {
  const [page, setPage] = useState("home");
  const [navOpen, setNavOpen] = useState(false);
  const collectionsRef = useRef();

  // mobile navigation toggle
  const openNav = () => {
    setNavOpen(!navOpen);
  };
  const musicContext = useContext(MusicContext)
  
  useEffect(() => {
    let navDiv = document.getElementsByClassName("mobile-popup-div")[0];
    if (window.innerWidth < 1024) {
      navOpen === false
        ? (navDiv.style.visibility = "hidden")
        : (navDiv.style.visibility = "visible");

      navOpen === false
        ? (document.getElementsByClassName(
            "mobile-nav-hide"
          )[0].style.visibility = "hidden")
        : (document.getElementsByClassName(
            "mobile-nav-hide"
          )[0].style.visibility = "visible");
      navOpen === false
        ? (document.getElementsByClassName(
            "mobile-nav-hide"
          )[1].style.visibility = "hidden")
        : (document.getElementsByClassName(
            "mobile-nav-hide"
          )[1].style.visibility = "visible");
    }
  }, [navOpen]);

  useLayoutEffect(() => {
    if (page === "topcharts") {
       setNavOpen(false)
    } else if (page === "collections") {
       setNavOpen(false)
      let ctx = gsap.context(() => {
        gsap.from(".collections-component-div", {
          opacity: 0,
          ease: "power1.in",
          duration: 2.3,
        });
      }, collectionsRef);
      return () => ctx.revert();
    } else {
       setNavOpen(false)
          let ctx = gsap.context(() => {
        gsap.from(".home-component-div", {
          opacity: 0,
          ease: "power1.in",
          duration: 2.25,
        });
      }, collectionsRef);
      return () => ctx.revert();
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
  const pickMusic = (data) => {
      musicContext.pickMusic(data)
      setPage("topcharts");
      }

  if (page === "collections") {
    return (
      <div ref={collectionsRef}>
        <Mobilenav
          showHideNav={openNav}
          homeClick={homeClick}
          collectionsClick={collectionsClick}
        />
        <div className="container collections-component-div">
          <Search showHideNav={openNav} />
          <main className="main">
            <section className="nav-hero-section">
              <Nav
                homeClick={homeClick}
                collectionsClick={collectionsClick}
                page={page}
              />
              <Collections />
            </section>
          </main>
        </div>
        <Audiocontrols />
      </div>
    );
  } else if (page === "topcharts") {
    return (
      <div>
        <Mobilenav
          showHideNav={ openNav}
          homeClick={homeClick}
          collectionsClick={collectionsClick}
        />
        <div className="container">
          <Search showHideNav={openNav} />
          <main className="main">
            <section className="nav-hero-section">
              <Nav homeClick={homeClick} collectionsClick={collectionsClick} />
              <Viewchartoralbum  />
            </section>
          </main>
        </div>
        <Audiocontrols />
      </div>
    );
  } else if (page === "home") {
    return (
      <div ref={collectionsRef}>
        <Mobilenav
          showHideNav={openNav}
          homeClick={homeClick}
          collectionsClick={collectionsClick}
        />
        <div className="container home-component-div">
          <Search showHideNav={openNav} />

          <main className="main">
            <section className="nav-hero-section">
              <Nav
                homeClick={homeClick}
                collectionsClick={collectionsClick}
                page={page}
              />
              <Mainpage pickMusic={pickMusic}/>
            </section>

            <section className="new">
              <h1>New releases</h1>
              {musicContext.loading===true ?
            <p>Loading Albums.....</p>  
            :
            musicContext.loadingError ?
                <p>{musicContext.loadingError}</p>
            
                :
                  
                 <div className="new-releases">
                  {/* {console.log(musicContext.musicList)} */}
                  {musicContext.musicList.map((e) => (
                    <Newreleases key={e.id}
                      pickMusic={() => pickMusic(e)}
                      imageSource={
                        e.images[1].url ? e.images[1].url : "images/face.png"
                      }
                      releaseTitle={
                        e.name
                      }
                    />
                  ))}
            
              
                </div>
              }
            </section>
          </main>
        </div>
        {/* <div className="audio-div"> */}
        <Audiocontrols />
        {/* </div> */}
      </div>
    );
  }
};
export default Home;
