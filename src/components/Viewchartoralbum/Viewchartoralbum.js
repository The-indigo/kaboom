import React from 'react'
import "./Viewchartoralbum.css"
const Viewchartoralbum = () => {
    return (
        <div className='view-chart'>
        <div className='viewchart-div'>
            <div className='viewchart-image-div'>
                <img src="images/lead.png" alt='Track cover art'/>
            </div>
            <div className='viewchart-text-div'>
                <h1>Tommorow's Tunes</h1>
                <p className='viewchart-text-div-p1'>Go throught the journey, touch the stars and see how tommorow looks like </p>
                <p className='viewchart-text-div-p2'>64 songs ~ 16 hrs+</p>
            
            <div className='viewchart-button-div'>
                    <div className="play-button chart-button">
                    <p>My collection</p>
                </div>
                  <div className="add-button chart-button">
                    <p>My collection</p>
                </div>
                  <div className="like-button"> 
                           <img src="images/heart.png" alt="heart icon"/>
                </div>
                </div>
                </div>
        </div>
        </div>
    )
}
export default Viewchartoralbum