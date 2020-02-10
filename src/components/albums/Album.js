import React from "react";
import "./Albums.css";
import { Link } from "react-router-dom"


export default ({ album, artist }) => (
    <section className="album">
        <img src={album.artwork} alt="artwork img" />
        <h3 className="album__name">
            <Link to={`/albums/${album.id}`}>
                { album.name }
            </Link>
        </h3>
        <div className="album__artist">{artist.name}</div>
    </section>
);
