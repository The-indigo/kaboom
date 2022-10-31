import React, { createContext,useState,useEffect } from "react";

const data = [
    {
    url: "images/face.png",
    name:"Mountain",
    artist:"burna"
    },
        {
    url: "images/alpha.png",
    name:"Life in a bubble",
     artist:"burna"
    },
            {
    url: "images/mountain.png",
    name:"Mountain",
     artist:"burna"
},
]


export const MusicContext = createContext({
    musicList: [],
    isPlaying: false,
pickedMusic:{},
    // setMusicItems:()=>{},
    pickMusic: (data) => { },
    duration: 0,
    handleDurationChange:()=>{},
    playMusic:()=>{}
})

const MusicContextProvider = ({ children }) => {
    const [musicList, setMusicList] = useState([]);
    const [pickedMusic, setPickedMusic] = useState();
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    
      useEffect(() => {
     const setMusicItems = () => {
         setMusicList(data);
         setPickedMusic(data[0])
        console.log("music set.....")
     }
          setMusicItems()
  },[])
   
    const pickMusic = (data) => {
        setPickedMusic(data)
        console.log(data);
    }
    const playMusic = (audio) => {
        setIsPlaying(!isPlaying)
        
        if (isPlaying === false) {
            audio.play()
        } else {
            audio.pause()
        }
        handleDurationChange(audio)
    }
    const handleDurationChange = (audio) => {
        setDuration(audio.currentTime)
    }

      const value = {
          musicList: musicList,
          pickedMusic: pickedMusic,
           isPlaying:isPlaying,
          pickMusic: pickMusic,
          duration: duration,
          handleDurationChange,
          playMusic
        //   setMusicItems:setMusicItems
         
      };
    return <MusicContext.Provider value={value}>{children }</MusicContext.Provider>
}
export default MusicContextProvider;
