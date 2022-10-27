import React, { createContext,useState,useEffect } from "react";

const data = [
    {
    url: "images/face.png",
    name:"Mountain",
    },
        {
    url: "images/alpha.png",
    name:"Life in a bubble",
    },
            {
    url: "images/mountain.png",
    name:"Mountain",
},
]


export const MusicContext = createContext({
    musicList: [],
    
    isPlaying: false,
pickedMusic:{},
    // setMusicItems:()=>{},
    pickMusic:(data)=>{}
})

const MusicContextProvider = ({ children }) => {
    const [musicList, setMusicList] = useState([]);
    const [pickedMusic,setPickedMusic]=useState()
    
      useEffect(() => {
     const setMusicItems = () => {
        setMusicList(data);
        console.log("music set.....")
     }
          setMusicItems()
  },[])
   
    const pickMusic = (data) => {
        setPickedMusic(data)
        console.log(data);
    }

      const value = {
          musicList: musicList,
           pickedMusic:pickedMusic,
          pickMusic: pickMusic,
        //   setMusicItems:setMusicItems
         
      };
    return <MusicContext.Provider value={value}>{children }</MusicContext.Provider>
}
export default MusicContextProvider;
