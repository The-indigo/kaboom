import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

let data = [];

export const MusicContext = createContext({
  musicList: [],
  loadingError:'',
  collections: [],
  likes:[],
  isPlaying: false,
    pickedMusic: {},
  pickedTrack:{},
    pickMusic: (data) => { },
  pickTrack:(data)=>{},
  duration: 0,
  handleDurationChange: () => {},
  playMusic: () => { },
  addToCollection: () => { },
  addToLikes: ()=>{},
  playAllSongs:()=>{}
});
let ad;
const MusicContextProvider = ({ children }) => {
  const [musicList, setMusicList] = useState([]);
  const [collections, setCollections] = useState([])
  const [loadingError, setLoadingError] = useState(null);
  const [likes,setLikes]=useState([])
    const [pickedMusic, setPickedMusic] = useState();
    const [pickedTrack, setPickedTrack] = useState();
  const [duration, setDuration] = useState(0);
  const [playAll, setPlayAll] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
   


    useEffect(() => {
        ad = document.querySelector("audio");
        ad.value = 0;
        setIsPlaying(false)
    },[pickedTrack])

    useEffect(() => {
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
        setLoadingError("An error occured while fetching music content")
        console.error(error);
      }
    };
     fetchAlbums();
    // const setMusicItems = () => {
 
// console.log(data)
      //  setMusicList(data);
    //   setPickedMusic(data[0]);
      //  console.log(ad);
      //  console.log(ad.currentTime)
    // };
    // setMusicItems();
  }, []);

    useEffect(() => {
        if (isPlaying) {
        
      setTimeout(() => {
        setDuration(ad.currentTime);
        console.log(ad.currentTime)
      }, 1000);

    }
    });
  const addToCollection = () => {
    let data = pickedMusic
    setCollections([...collections, data])
  }
 
  const addToLikes = () => {
    let data = pickedMusic
    setLikes([...likes,data])
  }

  const pickMusic = (data) => {
    setPickedMusic(data);

  };

    const pickTrack = (data) => {
        setPickedTrack(data);
        console.log(data)
    }

  const playMusic = () => {
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
          console.log("did this pause it")
      ad.pause();
    }
  };

    // put all the songs in an array
  //add the currentelement to the picked track
  //check if the song has reached the end
  //if song reaches the end (30 seconds) remove the song
  //set track to next element in array
  //you are doing a combination of pick track and play music
  const playAllSongs = () => {
    //  let allSongs = pickedMusic.tracks.items
    // let currentPlaying=allSongs[0]
    // pickTrack(currentPlaying)
    // ad.src = currentPlaying.preview_url
    // ad.load()
    // setPlayAll(!playAll)
    // if (currentPlaying !== undefined) {
    //   console.log('currently....')
    //    playMusic()
    // }
        
  
    
  }

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
    playAllSongs,
    addToCollection,
    addToLikes,
    loadingError,
    collections:collections
    //   setMusicItems:setMusicItems
  };
  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
};
export default MusicContextProvider;
