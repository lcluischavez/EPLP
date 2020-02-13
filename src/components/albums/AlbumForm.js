import React, { useContext, useState, useEffect } from "react"
import { AlbumContext } from "./AlbumProvider"
import { ArtistContext } from "../artists/ArtistProvider";
import { AlbumTypeContext } from "../albumTypes/AlbumTypeProvider";



export default props => {
    const { artists } = useContext(ArtistContext)
    const { albumTypes } = useContext(AlbumTypeContext)
    const { addAlbum, albums, updateAlbum } = useContext(AlbumContext)
    const [album, setAlbum] = useState({})

    const editMode = props.match.params.hasOwnProperty("albumId")

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
useEffect(() =>{
}, [album])

    useEffect(() => {
        setDefaults()
    }, [albums])

    const constructNewAlbum = () => {
        const artistId = parseInt(album.artistId)
        const albumTypeId = parseInt(album.albumTypeId)


        
            if (editMode) {

                updateAlbum({
                    id: album.id,
                    name: album.name,
                    artwork: album.artwork,
                    artistId: artistId,
                    albumTypeId: albumTypeId,
                    note: album.note,
                    userId: parseInt(localStorage.getItem("currentUser"))
                })
                    .then(() => props.history.push("/MyCollection"))
            } else {

                addAlbum({
                    name: album.name,
                    artwork: album.artwork,
                    artistId: artistId,
                    albumTypeId: albumTypeId,
                    note: album.note,
                    userId: parseInt(localStorage.getItem("currentUser"))
                })
                    .then(() => props.history.push("/MyCollection"))
            }
        
    }


    return (
        <form className="albumForm">
            <h2 className="albumForm__title">{editMode ? "Update Album" : "Add Album"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="albumName">Album name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        protype="varchar"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Album name"
                        defaultValue={album.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="artwork">Artwork: </label>
                    <input
                        type="text"
                        id="artwork"
                        name="artwork"
                        required
                        className="form-control"
                        placeholder="Paste image url for artwork here..."
                        defaultValue={album.artwork}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="albumTypeId">Type: </label>
                    <select
                        name="albumTypeId"
                        className="form-control"
                        proptype="int"
                        defaultValue={album.artistTypeId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a type</option>
                        {albumTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="artistId">Artist: </label>
                    <select
                        name="artistId"
                        className="form-control"
                        proptype="int"
                        defaultValue={album.artistId}
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="note">Notes: </label>
                    <textarea type="text" name="note" className="form-control"
                        proptype="varchar"
                        defaultValue={album.note}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button
                type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                     constructNewAlbum()
                }} 
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Add Album"}            
            </button>
        </form>
    );
};

