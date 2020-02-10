import React, { useContext, useRef } from "react";
import { AlbumContext } from "./AlbumProvider";
import { ArtistContext } from "../artists/ArtistProvider";
import "./Albums.css";

export default props => {
    const { addAlbum } = useContext(AlbumContext);
    const { artists } = useContext(ArtistContext);
    const albumName = useRef("")
    const albumArtist = useRef(0)
    const albumArtwork = useRef("")    

    const currentAlbumUser = parseInt(localStorage.getItem("currentUser"))

    
    const constructNewAlbum = () => {
        const artistId = parseInt(albumArtist.current.value)
    
        if (artistId === 0) {
            window.alert("Please select an artist")
        } else {
            addAlbum({
                name: albumName.current.value,
                artwork: albumArtwork.current.value,
                artistId: artistId,
                userId: currentAlbumUser

            })
            .then(() => props.history.push("/albums"))
        }
    }

    return (
        <form className="albumForm">
            <h2 className="albumForm__title">New Album</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="albumName">Album name</label>
                    <input
                        type="text"
                        id="albumName"
                        ref={albumName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Album name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="albumArtwork">Artwork: </label>
                    <input
                        type="text"
                        id="albumArtwork"
                        ref={albumArtwork}
                        className="form-control"
                        placeholder="Paste image url for artwork here..."
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="artist">Assign to artist</label>
                    <select
                        defaultValue=""
                        name="artist"
                        id="albumArtist"
                        ref={albumArtist}
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
            <button
                type="submit"
                onClick={evt => {
                    evt.preventDefault(); // Prevent browser from submitting the form
                    constructNewAlbum();
                }} 
                className="btn btn-primary"
            >
                Save Album
            </button>
        </form>
    );
};
