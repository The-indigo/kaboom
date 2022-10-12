import React from "react"
import CollectionsItem from "../shared/CollectionsItem/CollectionsItem";
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
                <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"} />
                    <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"}/>

    <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"}/>
                    <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"}/>
    <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"}/>
    <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"}/>
    <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"}/>
    <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"}/>



            </section>
        </div>
    )
}
export default Collections