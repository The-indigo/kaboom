import React, { useContext } from 'react'
import "./Viewchartoralbum.css"
import AlbumChart from '../shared/AlbumChart/AlbumChart';
import { MusicContext } from '../../store/musicContext';


const Viewchartoralbum = () => {

    const musicContext = useContext(MusicContext)
    
    const millisToMinutesAndSeconds = (ms) => {
        let minutes = Math.floor(ms / 60000);
        let seconds = ((ms % 60000) / 1000).toFixed(0)
        return seconds===60?(minutes+1) + ":00" :  minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    return (
        <div className='view-chart'>
        <section className='viewchart-div'>
            <div className='viewchart-image-div'>
                <img src={musicContext.pickedMusic.images[1].url} alt='Track cover art'/>
            </div>
            <div className='viewchart-text-div'>
                <h1>{musicContext.pickedMusic.name}</h1>
                <p className='viewchart-text-div-p1'>Go throught the journey, touch the stars and see how tommorow looks like </p>
                <p className='viewchart-text-div-p2'>{musicContext.pickedMusic.tracks.total} songs ~ 10 mins+</p>
            
            <div className='viewchart-button-div'>
                        <div className="play-button chart-button">
                            <img src='images/playicon.png' alt='play icon'/>
                    <p>Play all</p>
                </div>
                        <div className="add-button chart-button">
                            <img src='images/musicadd.png' alt='add music icon'/>
                    <p>Add to collection</p>
                        </div>
                            <div className="add-button chart-button desktop-hide">
                            <img src="images/heartred.png" alt="heart icon" />
                    <p>Like</p>
                </div>
                  <div className="like-button chart-button hide"> 
                            <img src="images/heartred.png" alt="heart icon" />
                </div>
                </div>
                </div>
            </section>
            <section className='tracks'>
                {musicContext.pickedMusic.tracks.items.map((e) => (
                    <AlbumChart key={e.id} pick={() => {
                        musicContext.pickTrack(e)
                    }} imageSource={musicContext.pickedMusic.images[2].url} trackName={e.name} type={e.type} time={millisToMinutesAndSeconds(e.duration_ms) } />
                ))}
               
 {/* <AlbumChart/>
  <AlbumChart/>
                <AlbumChart/>
 <AlbumChart/>
 <AlbumChart/>
 <AlbumChart/>
 <AlbumChart/>
  <AlbumChart/>
 <AlbumChart/> */}



            </section>
        </div>
    )
}
export default Viewchartoralbum
