import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AlbumContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const AlbumProvider = (props) => {
    const [albums, setAlbums] = useState([])

    const getAlbums = () => {
        return fetch("http://localhost:8088/albums")
            .then(res => res.json())
            .then(setAlbums)
    }

    const addAlbum = album => {
        return fetch("http://localhost:8088/albums", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(album)
        })
            .then(getAlbums)
    }

    const releaseAlbum = albumId => {
        return fetch(`http://localhost:8088/albums/${albumId}`, {
            method: "DELETE"
        })
            .then(getAlbums)
    }
    

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getAlbums()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [albums])

    return (
        <AlbumContext.Provider value={{
            albums, addAlbum, releaseAlbum
        }}>
            {props.children}
        </AlbumContext.Provider>
    )
}