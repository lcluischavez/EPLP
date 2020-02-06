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

    const deleteAlbum= album => {
        return fetch(`http://localhost:8088/albums/${album.id}`, {
            method: "DELETE"
        })
        .then(getAlbums)
    }

    const editAlbums = (isComplete, id)=> {
        return fetch(`http://localhost:8088/albums/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                done: isComplete

            })
        })
            .then(getAlbums)
      
      }
    /*
        Load all tasks when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getAlbums()
    }, [])

    useEffect(() => {
        console.log("****  TASK APPLICATION STATE CHANGED  ****")
    }, [albums])

    return (
        <AlbumContext.Provider value={{
            albums, addAlbum, deleteAlbum, editAlbums
        }}>
            {props.children}
        </AlbumContext.Provider>
    )
}
