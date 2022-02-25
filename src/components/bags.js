import React from 'react';
import bag_4 from "../assets/bag_4.png";

function Bag({naam, prijs, image}){
    return(
        <article className="bagInfo">
            <span>New Collection</span>
            <img alt={naam}  src={image}></img>
            <p>{naam}</p>
            <h4>{prijs}</h4>
        </article>
    )
}
export default Bag;