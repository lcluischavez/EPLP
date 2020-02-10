import React from "react"
import "./Tracks.css"
import { Link } from "react-router-dom"

export default ({ track, artist }) => (
    
    <section className="track">
        <h3 className="track__name">
            <Link to={`/tracks/${track.id}`}>
                { track.name }
            </Link>
        </h3>
        <div className="track__artist">{artist.name}</div>
    </section>
)