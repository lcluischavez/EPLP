import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const TrackContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const TrackProvider = (props) => {
    const [tracks, setTracks] = useState([])

    const getTracks = () => {
        return fetch("http://localhost:8088/tracks")
            .then(res => res.json())
            .then(setTracks)
    }

    const addTrack = track => {
        return fetch("http://localhost:8088/tracks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(track)
        })
            .then(getTracks)
    }

    const releaseTrack = trackId => {
        return fetch(`http://localhost:8088/tracks/${trackId}`, {
            method: "DELETE"
        })
            .then(getTracks)
    }

    /*
        Load all tracks when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getTracks()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [tracks])

    return (
        <TrackContext.Provider value={{
            tracks, addTrack, releaseTrack
        }}>
            {props.children}
        </TrackContext.Provider>
    )
}