import React from 'react';

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