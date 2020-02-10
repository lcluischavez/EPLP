import React, { useContext } from "react"
import { TrackContext } from "./TrackProvider"
import { AlbumContext } from "../albums/AlbumProvider"
import { ArtistContext } from "../artists/ArtistProvider"
import Track from "./Track"
import "./Tracks.css"

export default () => {
    const { tracks } = useContext(TrackContext)
    const { albums } = useContext(AlbumContext)
    const { artists } = useContext(ArtistContext)

    return (
        <div className="tracks">
            {
                tracks.map(track => {
                    const piece = albums.find(alb => alb.id === track.albumId)
                    const maker = artists.find(art => art.id === track.artistId)
                
                    return <Track key={track.id}
                                album={piece}
                                artist={maker}
                                track={track} />
                })
             }
        </div>
    )
}