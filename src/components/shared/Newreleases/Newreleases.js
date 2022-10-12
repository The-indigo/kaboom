import React from "react";
import "./Newreleases.css";
const Newreleases = ({imageSource,releaseTitle}) => {
    return (
        <>
                          <div className="new-releases-div">
                  <div className="new-releases-image-div">
                      <img src={imageSource} alt="new release"/>
                      </div>  
                  <p>{releaseTitle}</p>    
                  </div>
        </>
    )
}
export default Newreleases;