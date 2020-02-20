import React, { useContext } from "react"
import { MixtapeContext } from "./MixtapeProvider"
import Mixtape from "./Mixtape"
import "./Mixtapes.css"
import { TrackContext } from "../tracks/TrackProvider"



export default (props) => {
    const { mixtapes } = useContext(MixtapeContext)
    const { tracks } = useContext(TrackContext)
    
    return (
        <div className="mixtapes">
            <h2>Mixtapes</h2>
            <button className="button2" onClick={() => props.history.push("/Mixtapes/create-mixtape")}>
                Add Mixtape
            </button>
            <article className="mixtapeList">
                {
                    mixtapes.map(mixtape => {
                        const piece = tracks.find(tra => tra.id === mixtape.trackId)
                    
                        return <Mixtape key={mixtape.id}
                                    track={piece}
                                    mixtape={mixtape} {...props}/>
                    })
                }
            </article>

        </div>
    )
}