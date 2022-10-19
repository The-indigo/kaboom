import React from "react"
import "./Audiocontrols.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle,faBackwardStep,faForwardStep,faPlay,faRepeat,faVolumeHigh} from "@fortawesome/free-solid-svg-icons";
const Audiocontrols = () => {
    return (
        <>
           <div className="container audio-container">

        
          <div className="audio-player-details">
        <div className="audio-image-div"> 
            <img src="images/face.png"/>
            </div>
            <div className="audio-text-div">
              <p>Seasons in</p>
              <p>James</p>
            </div>
          </div>

          <div className="audio-controls-div">
            <div className="audio-top-controls">
         <FontAwesomeIcon
            icon={faShuffle}
            size="1x"
            width={11}
            className="audio-icon mobile-hide"
              />
                    <FontAwesomeIcon
            icon={faBackwardStep}
            size="1x"
            width={11}
            className="audio-icon"
                />
                         <FontAwesomeIcon
            icon={faPlay}
            size="1x"
            width={11}
            className="audio-icon audio-icon-play"
              />
                    <FontAwesomeIcon
            icon={faForwardStep}
            size="1x"
            width={11}
            className="audio-icon"
              />
           
                    <FontAwesomeIcon
            icon={faRepeat}
            size="1x"
            width={11}
            className="audio-icon mobile-hide"
          />
            </div>
                 <div className="audio-bottom-controls mobile-hide">
                        <input type={"range"}
                            // min="0" value="25" max="100"
                        />
            </div>
            </div>
            <div className="audio-volume-controls volume-control mobile-hide">
                          <FontAwesomeIcon
            icon={faVolumeHigh}
            size="1x"
            width={11}
            className="audio-icon"
              />
                    <input type={"range"}
                        // min="0" value="25" max="200"
                        
                    />
            </div>
              </div>
           <audio id="audio-player"
          src={""}
          // ref={""}
        ></audio>
        </>
    )
}
export default Audiocontrols