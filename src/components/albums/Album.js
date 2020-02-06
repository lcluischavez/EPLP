import React from "react"
import "./Albums.css"

export default ({ album, artist }) => (
    <section className="album">
        <img src={album.artwork} alt="artwork img"/>
        <h3 className="album__name">{album.name}</h3>
        <div className="album__artist">{artist.name}</div>
        <br/>
        <button>Details</button>
    </section>
)
