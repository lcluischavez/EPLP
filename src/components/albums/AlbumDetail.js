import React, { useContext } from "react";
import { AlbumContext } from "./AlbumProvider";
import "./Albums.css";
import { ArtistContext } from "../artists/ArtistProvider";
import { TrackContext } from "../tracks/TrackProvider";




export default props => {
    const { albums, releaseAlbum } = useContext(AlbumContext);
    const { artists } = useContext(ArtistContext);
    const { tracks } = useContext(TrackContext);

    /*
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenAlbumId = parseInt(props.match.params.albumId, 10);

    const album = albums.find(alb => alb.id === chosenAlbumId) || {};
    const artist = artists.find(art => art.id === album.artistId) || {};
    const track = tracks.filter(tra => tra.id === album.trackId) || {};

    return (
        <section className="album">
            <h3 className="album__name">{album.name}</h3>
            <div className="album__owner">{artist.name}</div>
            <ol>
                <li>{track.name}</li>
            </ol>
            <button
                className="btn--release"
                onClick={() => {
                    releaseAlbum(chosenAlbumId).then(() => {
                        props.history.push("/albums");
                    });
                }}>
                Delete
            </button>
        </section>
    );
};
