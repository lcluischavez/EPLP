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

    const deleteTrack= track => {
        return fetch(`http://localhost:8088/tracks/${track.id}`, {
            method: "DELETE"
        })
        .then(getTracks)
    }

    const editTracks = (isComplete, id)=> {
        return fetch(`http://localhost:8088/tracks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                done: isComplete

            })
        })
            .then(getTracks)
      
      }
    /*
        Load all tasks when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getTracks()
    }, [])

    useEffect(() => {
        console.log("****  TASK APPLICATION STATE CHANGED  ****")
    }, [tracks])

    return (
        <TrackContext.Provider value={{
            tracks, addTrack, deleteTrack, editTracks
        }}>
            {props.children}
        </TrackContext.Provider>
    )
}