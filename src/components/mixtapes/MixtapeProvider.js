import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const MixtapeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const MixtapeProvider = (props) => {
    const [mixtapes, setMixtapes] = useState([])

    const getMixtapes = () => {
        return fetch("http://localhost:8088/mixtapes")
            .then(res => res.json())
            .then(setMixtapes)
    }

    const addMixtape = mixtape => {
        return fetch("http://localhost:8088/mixtapes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mixtape)
        })
            .then(getMixtapes)
    }

    const releaseMixtape = mixtapeId => {
        return fetch(`http://localhost:8088/mixtapes/${mixtapeId}`, {
            method: "DELETE"
        })
            .then(getMixtapes)
    }

    const updateMixtape = mixtape => {
        return fetch(`http://localhost:8088/mixtapes/${mixtape.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mixtape)
        })
            .then(getMixtapes)
    }
    

    /*
        Load all albums when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getMixtapes()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [mixtapes])

    return (
        <MixtapeContext.Provider value={{
            mixtapes, addMixtape, releaseMixtape, updateMixtape
        }}>
            {props.children}
        </MixtapeContext.Provider>
    )
}