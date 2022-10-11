import React from "react";
import "./TopchartItem.css";
const TopchartItem = () => {
    return (
        
        <div className="top-charts-item">
            <div className="top-charts-item-img-details">
         <div className="top-charts-item-image-div">
                      <img src="images/albums.png" alt="top chart items"/>

            </div>
                      <div className="top-charts-details">
                          <p>Golden age of 8os</p>
                          <p>Sean swadder</p>
                            <p>2:34:45</p>
                      </div>
            </div>
   
                      <div className="heart-div"> 
                           <img src="images/heart.png" alt="heart icon"/>
                </div>
                </div>
        
                      
    )
}
export default TopchartItem;