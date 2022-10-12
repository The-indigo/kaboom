import React from "react"
import "./Collections.css";

const Collections = () => {
    return (
        <div>
            <section className="collections-sections">
                <div className="collections-button">
                    <p>My collection</p>
                </div>
                 <div className="collections-button">
                    <p>Likes</p>
                </div>
            </section>

            <section className="collections-image-section">
                <div className="collections">
                    <img src="images/fly.png" alt="flying album" />
                    <div className="collections-text">
       <h1>Limits</h1>
                    <p>John Watts</p>
                    </div>
             
                </div>
            </section>
        </div>
    )
}
export default Collections