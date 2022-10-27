import React from "react";
import "./TopchartItem.css";
const TopchartItem = ({imageSource,trackName,tarckArtist,trackTime,onClick,addToCollections}) => {
    return (
        
        <div className="top-charts-item" onClick={onClick}>
            <div className="top-charts-item-img-details">
         <div className="top-charts-item-image-div">
                      <img src={imageSource} alt="top chart items"/>

            </div>
                      <div className="top-charts-details">
                          <p>{trackName}</p>
                          <p>{tarckArtist}</p>
                            <p>{trackTime}</p>
                      </div>
            </div>
   
                      <div className="heart-div" onClick={addToCollections}> 
                           <img src="images/heart.png" alt="heart icon"/>
                </div>
                </div>
        
                      
    )
}
export default TopchartItem;