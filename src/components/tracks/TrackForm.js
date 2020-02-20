import React, { useContext, useRef } from "react";
import { TrackContext } from "./TrackProvider";
import { ArtistContext } from "../artists/ArtistProvider";
import { AlbumContext } from "../albums/AlbumProvider";
import "./Tracks.css";

export default props => {
    const { addTrack } = useContext(TrackContext);
    const { artists } = useContext(ArtistContext);
    const { albums } = useContext(AlbumContext);
    const trackName = useRef("")
    const trackArtist = useRef(0)
    const trackAlbum = useRef(0)

    const currentTrackUser = parseInt(localStorage.getItem("currentUser"))

    
    const constructNewTrack = () => {
        const artistId = parseInt(trackArtist.current.value)
        const albumId = parseInt(trackAlbum.current.value)
    
        if (artistId === 0) {
            window.alert("Please select an artist")
        } else {
            addTrack({
                name: trackName.current.value,
                artistId: artistId,
                albumId: albumId,
                userId: currentTrackUser

            })
            .then(() => props.history.push("/MyCollection"))
        }
    }

    return (
        <form className="trackForm">
            <h2 className="trackForm__title">New Track</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="album">Assign to album</label>
                    <select
                        defaultValue=""
                        name="album"
                        id="trackAlbum"
                        ref={trackAlbum}
                        className="form-control"
                    >
                        <option value="0">Select an album</option>
                        {albums.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="artist">Assign to artist</label>
                    <select
                        defaultValue=""
                        name="artist"
                        id="trackArtist"
                        ref={trackArtist}
                        className="form-control"
                    >
                        <option value="0">Select an artist</option>
                        {artists.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="trackName">Track name</label>
                    <input
                        type="text"
                        id="trackName"
                        ref={trackName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Track name"
                    />
                </div>
            </fieldset>
            
            <button
                type="submit"
                onClick={evt => {
                    evt.preventDefault(); // Prevent browser from submitting the form
                    constructNewTrack();
                }} 
                className="btn btn-primary"
            >
                Save Track
            </button>
        </form>
    );
};