import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ArtistContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ArtistProvider = (props) => {
    const [artists, setArtists] = useState([])

    const getArtists = () => {
        return fetch("http://localhost:8088/artists")
            .then(res => res.json())
            .then(setArtists)
    }

    const addArtist = artist => {
        return fetch("http://localhost:8088/artists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artist)
        })
            .then(getArtists)
    }

    const deleteArtist= artist => {
        return fetch(`http://localhost:8088/artists/${artist.id}`, {
            method: "DELETE"
        })
        .then(getArtists)
    }

    const editArtists = (isComplete, id)=> {
        return fetch(`http://localhost:8088/artists/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                done: isComplete

            })
        })
            .then(getArtists)
      
      }
    /*
        Load all artists when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getArtists()
    }, [])

    useEffect(() => {
        console.log("****  TASK APPLICATION STATE CHANGED  ****")
    }, [artists])

    return (
        <ArtistContext.Provider value={{
            artists, addArtist, deleteArtist, editArtists
        }}>
            {props.children}
        </ArtistContext.Provider>
    )
}
