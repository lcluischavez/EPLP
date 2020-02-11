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

    const foundTracks = tracks.filter(alb => alb.albumId === chosenAlbumId) || {};
    
    const artist = artists.find(art => art.id === foundTracks.artistId) || {};
    // const album = foundAlbums.filter(tra => tra.id === foundTracks.chosenAlbumId) || {};
    const album = albums.find(alb => alb.id === chosenAlbumId) || {}


    return (
        <section className="album">
            <h3 className="album__name">{album.name}</h3>
            <div className="album__owner">{artist.name}</div>
            <ul>
                {foundTracks.map(tra => (
                            <li key={tra.id} value={tra.id}>
                                {tra.name}
                            </li>
                        ))}
            </ul>
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

// function RenderEvents() {
//     if (track.userId === albumId) {
//       return <section className="myEvent">
//           <h3 className="event__name">{event.name}</h3>
//           <div className="event__location">{event.location}</div>
//           <div className="event__time">{new Date(event.timestamp).toLocaleDateString('en-US') + " " + timeFormat(event.timestamp)}</div>
//           <div>{LoggedInUserButtons()}</div>
//         </section>
//     }
// return RenderEvents()

