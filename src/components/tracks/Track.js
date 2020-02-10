import React from "react"
import "./Tracks.css"

export default ({ track, album, artist }) => (
    <section className="track">
        <h3 className="track__name">{ track.name }</h3>
    </section>
)

{/* <div className="track__album">Album: { album.name }</div>
<div className="track__artist">Artist: { artist.name }</div> */}