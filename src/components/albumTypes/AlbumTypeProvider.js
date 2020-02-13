import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AlbumTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const AlbumTypeProvider = (props) => {
    const [albumTypes, setAlbumTypes] = useState([])

    const getAlbumTypes = () => {
        return fetch("http://localhost:8088/albumTypes")
            .then(res => res.json())
            .then(setAlbumTypes)
    }
    
    /*
        Load all albums when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getAlbumTypes()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [albumTypes])

    return (
        <AlbumTypeContext.Provider value={{
            albumTypes
        }}>
            {props.children}
        </AlbumTypeContext.Provider>
    )
}