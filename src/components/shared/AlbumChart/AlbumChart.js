import React from "react"
import "./AlbumChart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

const AlbumChart = ({imageSource,trackName,type,time,pick}) => {
    return (
                     <div onClick={pick} className='track-playlist'>
                    <div className='track-playlist-images'>
                  <div className='track-playlist-img-div'>
                        <img src={imageSource} alt="album cover art"/>
                    </div>
                    <div>
<img src='images/heartgrey.png' alt="grey heart icon"/>
                    </div>
                    </div>
  
                    <div className="trackname">
                <p>{trackName}</p>
            </div>
            <div className="tracktype">
<p>{ type}</p>
            </div>
            <div className="tracktime">
    <p>{ time}</p>
            </div>
            

                            <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="1x"
            width={11}
                        className="elipses-vertical"
                        color='#FACD66'
          />
                </div>
    )
}
export default AlbumChart