import React from "react";
import "./CollectionsItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
const CollectionsItem = ({imageSource,name,artist}) => {
    return (
        <>
            <div className="collections">
                {/* <div className="collections-item-img-div"> */}
 <img src={imageSource} alt="flying album" />
                {/* </div> */}
                   
                    <div className="collections-text">
       <h1>{name}</h1>
                    <p>{artist}</p>
                    <div className="collections-likes">
                        <div className="collections-likes-text">
                    <p>2.3m likes</p>
                        </div>
                        <div className="collections-likes-btn">
                               <FontAwesomeIcon
            icon={faPlay}
            size="1x"
            width={11}
            className="collections-likes-play-btn"
              />
                        </div>


                    </div>
                    </div>
             
            </div>
        </>
    )
}
export default CollectionsItem