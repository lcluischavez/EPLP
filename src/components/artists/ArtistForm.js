import React, { useContext, useRef } from "react"
import { ArtistContext } from "./ArtistProvider"

export default props => {
    const { addArtist } = useContext(ArtistContext)
    const artistName = useRef("")
    const currentArtistUser = parseInt(localStorage.getItem("currentUser"))

    const constructNewArtist = () => {
            addArtist({
                name: artistName.current.value,
                userId: currentArtistUser
            })
            .then(() => props.history.push("/albums/create-album"))
        }
    
    return (
        <form className="artistForm">
            <h2 className="artistForm__title">New Arist</h2>
            <div className="form-group">
                <label htmlFor="artistName">Artist name</label>
                <input
                    type="text"
                    id="artistName"
                    ref={artistName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Artist name"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewArtist()
                    }
                }
                className="btn btn-primary">
                Save Artist
            </button>
            <button onClick={() => props.history.push("/albums/create-album")}>
                Add Album
            </button>
        </form>
    )
}