import React, { useContext, useRef, useState, useEffect } from "react"
import { AlbumContext } from "./AlbumProvider"
import { ArtistContext } from "../artists/ArtistProvider"
import "./Albums.css"

export default props => {
    const { artists } = useContext(ArtistContext)
    const { addAlbum, albums, updateAlbum } = useContext(AlbumContext)
    const [album, setAlbum] = useState({})
    const albumName = useRef("")
    const albumArtwork = useRef("")    


    const currentAlbumUser = parseInt(localStorage.getItem("currentUser"))
    
    const editMode = props.match.params.hasOwnProperty("animalId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newAlbum = Object.assign({}, album)
        newAlbum[event.target.name] = event.target.value
        setAlbum(newAlbum)
    }

    const setDefaults = () => {
        if (editMode) {
            const albumId = parseInt(props.match.params.albumId)
            const selectedAlbum = albums.find(a => a.id === albumId) || {}
            setAlbum(selectedAlbum)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [albums])

    const constructNewAlbum = () => {
        const artistId =parseInt(album.artistId)

    if (artistId === 0) {
        window.alert("Please select an artist")
    } else {
                addAlbum({
                    name: albumName.current.value,
                    artwork: albumArtwork.current.value,
                    artistId: artistId,                
                    userId: currentAlbumUser
                })
                    .then(() => props.history.push("/MyCollection"))

            }
    }
    return (
        <form className="albumForm">
            <h2 className="albumForm__title">New Album</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="albumName">Album Name: </label>
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
                    <label htmlFor="artistId">Artist: </label>
                    <select name="artistId" className="form-control"
                        proptype="int"
                        value={album.artistId}
                        onChange={handleControlledInputChange}>
                            
                        <option value="0">Select an artist</option>
                        {artists.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
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