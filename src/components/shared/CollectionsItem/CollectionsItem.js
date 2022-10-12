import React from "react";
import "./CollectionsItem.css";
const CollectionsItem = ({imageSource,name,artist}) => {
    return (
        <>
                    <div className="collections">
                    <img src={imageSource} alt="flying album" />
                    <div className="collections-text">
       <h1>{name}</h1>
                    <p>{artist}</p>
                    </div>
             
                </div></>
    )
}
export default CollectionsItem