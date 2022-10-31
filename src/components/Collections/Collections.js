import React from "react"
import CollectionsItem from "../shared/CollectionsItem/CollectionsItem";
import "./Collections.css";

const Collections = () => {
    return (
        <div className="col">
            <section className="collections-sections">
                <div className="collections-button collections-button-active">
                    <p>My collection</p>
                </div>
                 <div className="collections-button">
                    <p>Likes</p>
                </div>
            </section>

            <section className="collections-image-section">
                <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/lead.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/blind.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/sun.png"} name="Limits" artist={"John Watts"} />
                     <CollectionsItem imageSource={"images/ink.png"} name="Limits" artist={"John Watts"} />
                    <CollectionsItem imageSource={"images/face.png"} name="Limits" artist={"John Watts"}/>

            
            </section>
        </div>
    )
}
export default Collections