import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

let data = [];

export const MusicContext = createContext({
  musicList: [],
  isPlaying: false,
    pickedMusic: {},
  pickedTrack:{},
  // setMusicItems:()=>{},
    pickMusic: (data) => { },
  pickTrack:(data)=>{},
  duration: 0,
  handleDurationChange: () => {},
  playMusic: () => {},
});
const MusicContextProvider = ({ children }) => {
  const [musicList, setMusicList] = useState([]);
    const [pickedMusic, setPickedMusic] = useState();
    const [pickedTrack, setPickedTrack] = useState();
  const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    let ad=document.querySelector("audio");

  useEffect(() => {
    // ad = document.querySelector("audio");

    const fetchAlbums = async () => {
      const getAlbumoptions = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/albums/",
        params: {
          ids:
            "3IBcauSj5M2A6lTeffJzdv,0Uf8CLgcWoLrYwmBcp0pio,5XNb9GHjQa9DA2tWeQzJxU,6HpMdN52TfJAwVbmkrFeBN,0lzPMIAYhhUSD2BPT0VQWI,1Rv9WRKyYhFaGbuYDaQunN,2jJReDZqTuAxr4R0ItimZc,6a8nlV9V8kPUbTTCJNVSsh,7nXJ5k4XgRj5OLg9m8V3zc,40GMAhriYJRO1rsY4YdrZb,4UlGauD7ROb3YbVOFMgW5u,4Uv86qWpGTxf7fU7lG5X6F,6kgDkAupBVRSqbJPUaTJwQ,6fG2eFCgUmytQWL6umtsCh,0LfM3PGkXE6KvJEE1HkOnz,69CmkikTHkGKdkrUZTtyWl,3tQd5mwBtVyxCoEo4htGAV",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        },
      };
      try {
        const response = await axios.request(getAlbumoptions);
        if (response.data && response.status === 200) {
          data = response.data.albums;
          setMusicList(response.data.albums);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const setMusicItems = () => {
      fetchAlbums();
// console.log(data)
      //  setMusicList(data);
    //   setPickedMusic(data[0]);
      //  console.log(ad);
      //  console.log(ad.currentTime)
    };
    setMusicItems();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        setDuration(ad.currentTime);
      }, 1000);

    //   console.log(duration);
    //   console.log(ad.currentTime);
    }
  });

  const pickMusic = (data) => {
      setPickedMusic(data);
  };
    const pickTrack = (data) => {
        setPickedTrack(data);
        console.log(data)
    }

  const playMusic = (src) => {
      setIsPlaying(!isPlaying);
      if (isPlaying === false) {
        //   ad.play()
          const playPromise = ad.play();
          console.log(playPromise)
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                console.log("playing playing....")
            }).catch(error => {
                console.log(error,"error")
            })
        }
    } else {
      ad.pause();
    }
    // handleDurationChange(audio)
  };

//   const handleDurationChange = (audio) => {
//     // setDuration(audio.currentTime)
//   };

  const value = {
    musicList: musicList,
      pickedMusic: pickedMusic,
      pickedTrack: pickedTrack,
    pickTrack:pickTrack,
    isPlaying: isPlaying,
    pickMusic: pickMusic,
    duration: duration,
    // handleDurationChange,
    playMusic,
    //   setMusicItems:setMusicItems
  };
  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
};
export default MusicContextProvider;
