import React from 'react'

function Tile ({image, info, description, alttext}){
    return (
        <section>
            <img src={image} alt={alttext}/>
            <h2>{info}</h2>
            <p>{description}</p>
        </section>
    )

}
export default Tile;