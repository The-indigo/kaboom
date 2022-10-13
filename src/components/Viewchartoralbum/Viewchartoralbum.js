import React from 'react'
import "./Viewchartoralbum.css"
import AlbumChart from '../shared/AlbumChart/AlbumChart';
const Viewchartoralbum = () => {
    return (
        <div className='view-chart'>
        <section className='viewchart-div'>
            <div className='viewchart-image-div'>
                <img src="images/lead.png" alt='Track cover art'/>
            </div>
            <div className='viewchart-text-div'>
                <h1>Tommorow's Tunes</h1>
                <p className='viewchart-text-div-p1'>Go throught the journey, touch the stars and see how tommorow looks like </p>
                <p className='viewchart-text-div-p2'>64 songs ~ 16 hrs+</p>
            
            <div className='viewchart-button-div'>
                        <div className="play-button chart-button">
                            <img src='images/playicon.png' alt='play icon'/>
                    <p>Play all</p>
                </div>
                        <div className="add-button chart-button">
                            <img src='images/musicadd.png' alt='add music icon'/>
                    <p>Add to collection</p>
                </div>
                  <div className="like-button chart-button"> 
                           <img src="images/heartred.png" alt="heart icon"/>
                </div>
                </div>
                </div>
            </section>
            <section className='tracks'>
 <AlbumChart/>
  <AlbumChart/>
                <AlbumChart/>
 <AlbumChart/>
 <AlbumChart/>
 <AlbumChart/>
 <AlbumChart/>
  <AlbumChart/>
 <AlbumChart/>



            </section>
        </div>
    )
}
export default Viewchartoralbum