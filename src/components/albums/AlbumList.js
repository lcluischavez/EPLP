import React, { useContext } from "react"
import { AlbumContext } from "./AlbumProvider"
import Album from "./Album"
import "./Albums.css"
import { ArtistContext } from "../artists/ArtistProvider"


export default (props) => {
    const { albums } = useContext(AlbumContext)
    const { artists } = useContext(ArtistContext)


    return (
        <div className="albums">
            <h2>My Collection</h2>
            <button onClick={() => props.history.push("/MyCollection/create-artist")}>
                Add Artist & Album
            </button>
            <article className="albumList">
            {
                albums.map(album => {
                    const maker = artists.find(alb => alb.id === album.artistId) || {}
            
                    return <Album key={album.id}
                                    artist={maker}
                                    album={album} />
                })
            }
            </article>
        </div>
    )

    
}