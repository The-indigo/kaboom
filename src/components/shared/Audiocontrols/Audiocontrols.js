import React, { useContext, useEffect, useState } from "react"
import "./Audiocontrols.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle,faBackwardStep,faForwardStep,faPlay,faRepeat,faVolumeHigh,faPause} from "@fortawesome/free-solid-svg-icons";
import { MusicContext } from "../../../store/musicContext";
const Audiocontrols = () => {
  const musicContext = useContext(MusicContext)
  const [val, setVal] = useState(0);

  const handleDurationChange = (e) => {
  setVal(MusicContext.duration)
}

  const playMusic = () => {
    musicContext.playMusic()
  }


    return (
        <div className="audio-div">
           <div className="container audio-container">
          <div className="audio-player-details">
            <div className="audio-image-div"> 
              {musicContext.pickedTrack && musicContext.pickedTrack.artists[0].id
                === musicContext.pickedMusic.artists[0].id ?
                <img src={musicContext.pickedMusic.images[2].url} /> :
                
                null}
            </div>
            <div className="audio-text-div">
              <p>{musicContext.pickedTrack?musicContext.pickedTrack.name:null}</p>
              <p>{musicContext.pickedTrack?musicContext.pickedTrack.artists[0].name:null}</p>
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
              <div className="play-icon audio-icon audio-icon-play" onClick={playMusic}>
  <FontAwesomeIcon
            icon= {musicContext.isPlaying===false?faPlay:faPause} 
                size="1x"
            width={11}
              />
              </div>
                       
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
                        <input type={"range"} id="slider-value"
                min="0"  max="30" value={musicContext.duration}
                onChange={handleDurationChange } step="1"
              />
              {/* {musicContext.duration} */}
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
                {/* src={"https://p.scdn.co/mp3-preview/315b151078df729934712ed1cc21e11506c64017?cid=f6a40776580943a7bc5173125a1e8832"} */}
        <audio id="audio-player" src={musicContext.pickedTrack?`${musicContext.pickedTrack.preview_url}`:''}
>
          {/* <source
            
            // src={musicContext.pickedTrack?musicContext.pickedTrack.preview_url:''}
       ></source> */}
           {/* ref={""} */}
        </audio>
        </div>
    )
}
export default Audiocontrols