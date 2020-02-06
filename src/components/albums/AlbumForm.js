import React, { useContext, useRef } from "react"
import { AlbumContext } from "./AlbumProvider"
import "./Albums.css"

export default props => {
    const { addAlbum } = useContext(AlbumContext)
    const albumName = useRef("")
    const albumArtwork = useRef("")
    const albumkArtistId = useRef("")
    const currentAlbumUser = parseInt(localStorage.getItem("currentUser"))

    const constructNewAlbum = () => {
            addAlbum({
                name: albumName.current.value,
                artwork: albumArtwork.current.value,
                artistId: albumkArtistId.current.value,                
                userId: currentAlbumUser
            })
        }
    
    return (
        <form className="albumForm">
            <h2 className="albumForm__title">New Album</h2>
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
            <div className="form-group">
                <label htmlFor="albumArtwork">Artwork</label>
                <input
                    type="text"
                    id="albumArtwork"
                    ref={albumArtwork}
                    className="form-control"
                    placeholder="Paste image url for artwork here..."
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAlbum()
                    }
                }
                className="btn btn-primary">
                Save Album
            </button>
        </form>
    )
}