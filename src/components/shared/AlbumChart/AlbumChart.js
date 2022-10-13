import React from "react"
import "./AlbumChart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

const AlbumChart = () => {
    return (
                     <div className='track-playlist'>
                    <div className='track-playlist-images'>
                  <div className='track-playlist-img-div'>
                        <img src="images/face.png" alt="album cover art"/>
                    </div>
                    <div>
<img src='images/heartgrey.png' alt="grey heart icon"/>
                    </div>
                    </div>
  
                    <div>
                        <p>Let me love you-Krisx</p>
                    </div>
                    <p>Single</p>
                    <p>4:17</p>
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