import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeProvider";
import "./Albums.css";
import { TrackContext } from "../tracks/TrackProvider";

export default props => {
    const { mixtapes, releaseMixtape } = useContext(MixtapeContext);
    const { tracks } = useContext(TrackContext);
    /*
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenAlbumId = parseInt(props.match.params.albumId, 10);
    const foundTracks =
        tracks.filter(alb => alb.albumId === chosenAlbumId) || {};

    const album = albums.find(alb => alb.id === chosenAlbumId) || {};

    return (
        <section className="trackList">
            <h3 className="album__name">{album.name}</h3>
            <ul>
                {foundTracks.map(tra => (
                    <li key={tra.id} value={tra.id}>
                        {tra.name}
                    </li>
                ))}
            </ul>
            <button onClick={() => props.history.push("/albums/create-track")}>
                Add Track
            </button>
            <br />
            <button
            onClick={() => {
                props.history.push(`/albums/edit/${album.id}`);
            }}
             >
            Edit
        </button>
            <button
                className="btn--release"
                onClick={() => {
                    releaseAlbum(chosenAlbumId).then(() => {
                        props.history.push("/albums");
                    });
                }}
            >
                Delete
            </button>
        </section>
    );
};