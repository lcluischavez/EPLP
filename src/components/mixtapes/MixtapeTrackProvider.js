import React, { useState, useEffect } from "react"

export const MixtapeTrackContext = React.createContext()

export const MixtapeTrackProvider = (props) => {
    const [mixtapeTrackRelationships, changeMixtapeTrackRelationshipState] = useState([])

    const getMixtapeTracks = () => {
        return fetch("http://localhost:8088/mixtapetracks")
            .then(res => res.json())
            .then(changeMixtapeTrackRelationshipState)
    }

    const addMixtapeTrack = track => {
        return fetch("http://localhost:8088/mixtapetracks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(track)
        })
            .then(getMixtapeTracks)
    }

    const deleteMixtapeTrack = track => {
        return fetch(`http://localhost:8088/mixtapetracks/${track.id}`, {
            method: "DELETE"
        })
        .then(getMixtapeTracks)
    }

    const updateMixtapeTrack = track => {
        return fetch(`http://localhost:8088/mixtapetracks/${track.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(track)
        })
            .then(getMixtapeTracks)
    }

    useEffect(() => {
        getMixtapeTracks()
    }, [])

    useEffect(() => {
        console.log(mixtapeTrackRelationships)
    }, [mixtapeTrackRelationships])

    return (
        <MixtapeTrackContext.Provider value={{
            mixtapeTrackRelationships,
            addMixtapeTrack,
            updateMixtapeTrack,
            deleteMixtapeTrack
        }}>
            {props.children}
        </MixtapeTrackContext.Provider>
    )
}