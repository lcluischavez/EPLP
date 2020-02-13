import React, { useContext } from "react";
import { AlbumContext } from "./AlbumProvider";
import "./Albums.css";
import { ArtistContext } from "../artists/ArtistProvider";
import { TrackContext } from "../tracks/TrackProvider";
import { AlbumTypeContext } from "../albumTypes/AlbumTypeProvider";

export default props => {
    const { albums, releaseAlbum } = useContext(AlbumContext);
    const { artists } = useContext(ArtistContext);
    const { albumTypes } = useContext(AlbumTypeContext);
    const { tracks } = useContext(TrackContext);
    /*
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenAlbumId = parseInt(props.match.params.albumId, 10);
    const foundTracks =
        tracks.filter(alb => alb.albumId === chosenAlbumId) || {};

    const album = albums.find(alb => alb.id === chosenAlbumId) || {};
    const artist = artists.find(art => art.id === album.artistId) || {};
    const albumType = albumTypes.find(abt => abt.id === album.albumTypeId) || {};


    return (
        <section className="trackList">
            <h3 className="album__name">{album.name}</h3>
            <div className="album__owner">{artist.name}</div>
            <div className="album__kind">{albumType.name}</div>
            <ul>
                {foundTracks.map(tra => (
                    <li key={tra.id} value={tra.id}>
                        {tra.name}
                    </li>
                ))}
            </ul>
            <a className="but">
                <button className="button1" onClick={() => props.history.push("/MyCollection/create-track")}>
                    Add Track
                </button>
            </a>
            <br />
            <a className="but">
                <button
                className="button2"
                onClick={() => {
                    props.history.push(`/MyCollection/edit/${album.id}`);
                }}
                >
                Edit
                </button>
            </a>
            <a className="but">
                <button
                    className="button2"
                    onClick={() => {
                        releaseAlbum(chosenAlbumId).then(() => {
                            props.history.push("/MyCollection");
                        });
                    }}
                >
                    Delete
                </button>
            </a>
        </section>
    );
};
