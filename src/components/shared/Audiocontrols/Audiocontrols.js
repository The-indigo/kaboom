import React, { useContext } from "react"
import "./Audiocontrols.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle,faBackwardStep,faForwardStep,faPlay,faRepeat,faVolumeHigh} from "@fortawesome/free-solid-svg-icons";
import { MusicContext } from "../../../store/musicContext";
const Audiocontrols = () => {
  const musicContext = useContext(MusicContext)

  const playMusic = () => {
    // const msDuration = 179232
    const audio = document.querySelector('audio');
    audio.play();
  }
  const handleDurationChange = (e) => {
    musicContext.handleDurationChange(e.target.value)
  }
    return (
        <div className="audio-div">
           <div className="container audio-container">

        
          <div className="audio-player-details">
            <div className="audio-image-div"> 
            {musicContext.pickedMusic?<img src= {musicContext.pickedMusic.url}/> :null}
            </div>
            <div className="audio-text-div">
              <p>{musicContext.pickedMusic?musicContext.pickedMusic.name:null}</p>
              <p>{musicContext.pickedMusic?musicContext.pickedMusic.artist:null}</p>
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
              <div className="play-icon" onClick={playMusic}>
  <FontAwesomeIcon
            icon={faPlay}
                size="1x"
            width={11}
            className="audio-icon audio-icon-play"
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
                        <input type={"range"}
                min="0" value={musicContext.duration} max="30"
                onChange={handleDurationChange}
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
        <audio id="audio-player">
          <source
                   src={"https://p.scdn.co/mp3-preview/315b151078df729934712ed1cc21e11506c64017?cid=f6a40776580943a7bc5173125a1e8832"}

       ></source>
          // ref={""}
        </audio>
        </div>
    )
}
export default Audiocontrols