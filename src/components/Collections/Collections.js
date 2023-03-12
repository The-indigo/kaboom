import React, { useContext } from "react"
import { MusicContext } from "../../store/musicContext";
import CollectionsItem from "../shared/CollectionsItem/CollectionsItem";
import "./Collections.css";

const Collections = () => {
      const musicContext = useContext(MusicContext)

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

            {/* <section className="collections-image-section">
                <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/lead.png"} name="Limits" artist={"John Watts"} />

                                 <CollectionsItem imageSource={"images/lead.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/lead.png"} name="Limits" artist={"John Watts"} />
  <CollectionsItem imageSource={"images/fly.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/lead.png"} name="Limits" artist={"John Watts"} />

                                 <CollectionsItem imageSource={"images/lead.png"} name="Limits" artist={"John Watts"} />
                <CollectionsItem imageSource={"images/lead.png"} name="Limits" artist={"John Watts"} />

                

            
            </section> */}
{musicContext.collections.length === 0 ?
                <p>You have no item in your collection</p>
                    : 
            <section className="collections-image-section">
                
                    {musicContext.collections.map((e, index) => {

                    console.log(e);
                      return  <CollectionsItem key={index} imageSource={e.images[1].url} name={e.name} artist={e.artists[0].name} />
                    }
                    )}
                     </section>
                 }


            
           
        </div>
    )
}
export default Collections