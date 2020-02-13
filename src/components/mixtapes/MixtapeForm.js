import React, { useContext, useState, useEffect } from "react"
import { MixtapeContext } from "./MixtapeProvider"


export default props => {
    const { addMixtape, Mixtapes, updateMixtape } = useContext(MixtapeContext)
    const [mixtape, setMixtape] = useState({})

    const editMode = props.match.params.hasOwnProperty("mixtapeId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newMixtape = Object.assign({}, mixtape)
        newMixtape[event.target.name] = event.target.value
        setMixtape(newMixtape)
    }

    const setDefaults = () => {
        if (editMode) {
            const mixtapeId = parseInt(props.match.params.mixtapeId)
            const selectedMixtape = mixtapes.find(a => a.id === mixtapeId) || {}
            setAlbum(selectedAlbum)
        }
    }
useEffect(() =>{
}, [mixtape])

    useEffect(() => {
        setDefaults()
    }, [mixtapes])

    const constructNewMixtape = () => {

        
            if (editMode) {

                updateMixtape({
                    id: mixtape.id,
                    name: mixtape.name,
                    artwork: mixtape.artwork,
                    userId: parseInt(localStorage.getItem("currentUser"))
                })
                    .then(() => props.history.push("/Mixtapes"))
            } else {

                addMixtape({
                    name: mixtape.name,
                    artwork: mixtape.artwork,
                    userId: parseInt(localStorage.getItem("currentUser"))
                })
                    .then(() => props.history.push("/Mixtapes"))
            }
        
    }


    return (
        <form className="mixtapeForm">
            <h2 className="mixtapeForm__title">{editMode ? "Update Mixtape" : "Add Mixtape"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mixtapeName">Mixtape name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        protype="varchar"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Mixtape name"
                        defaultValue={mixtape.name}
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
                        defaultValue={mixtape.artwork}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button
                type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                     constructNewMixtape()
                }} 
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Add Mixtape"}            
            </button>
        </form>
    );
};