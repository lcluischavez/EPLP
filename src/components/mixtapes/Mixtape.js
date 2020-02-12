import React from "react";
import "./Mixtapes.css";
import { Link } from "react-router-dom";

export default ({ mixtape, track }) => (
    <section className="mixtape">
        <img src={mixtape.artwork} alt="artwork img" />
        <h3 className="album__name">
            <Link to={`/mixtapes/${mixtape.id}`}>{mixtape.name}</Link>
        </h3>
        {/* <div className="mixtape__track">{track.name}</div> */}
    </section>
);