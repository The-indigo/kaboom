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
 let ad;
const MusicContextProvider = ({ children }) => {
    const [musicList, setMusicList] = useState([]);
    const [pickedMusic, setPickedMusic] = useState();
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

   
    
    useEffect(() => {
    ad = document.querySelector('audio');
     const setMusicItems = () => {
         setMusicList(data);
         setPickedMusic(data[0])
         console.log(ad);
         console.log(ad.currentTime)
     }
          setMusicItems()
      }, [])

    useEffect(() => {
        if (isPlaying) {
            setTimeout(() => {
            setDuration(ad.currentTime)    
            },900)
            
            console.log(duration)
            console.log(ad.currentTime)
        }
    })
  
   
    const pickMusic = (data) => {
        setPickedMusic(data)
    }
   
    const playMusic = () => {
        setIsPlaying(!isPlaying)
        
        if (isPlaying === false) {
            ad.play();
            // setDuration(audio.currentTime);
            console.log(ad.currentTime)
        } else {
            ad.pause()
        }
        // handleDurationChange(audio)
    }

    const handleDurationChange = (audio) => {
        // setDuration(audio.currentTime)
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
