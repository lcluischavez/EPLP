import React from "react";
import "./Albums.css";
import { Link } from "react-router-dom";

export default ({ album, artist, albumType }) => (
    <section className="album">
        <img src={album.artwork} alt="artwork img" />
        <h3 className="album__name">
            <Link to={`/MyCollection/${album.id}`}>{album.name}</Link>
        </h3>
        <section className="iconm">
            <div className="album__artist">{artist.name}</div>
            <br/>
            <img className="artclip" src={albumType.artclip} alt="artwork img" />
        </section>
    </section>
);
