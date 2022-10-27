import React from "react";
import "./Newreleases.css";
const Newreleases = ({imageSource,releaseTitle,pickMusic}) => {
    return (
        <>
                          <div className="new-releases-div" onClick={pickMusic}>
                  <div className="new-releases-image-div">
                      <img src={imageSource} alt="new release"/>
                      </div>  
                  <p>{releaseTitle}</p>    
                  </div>
        </>
    )
}
export default Newreleases;