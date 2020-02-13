import React, { useContext } from "react"
import { AlbumContext } from "./AlbumProvider"
import Album from "./Album"
import "./Albums.css"
import { ArtistContext } from "../artists/ArtistProvider"
import { AlbumTypeContext } from "../albumTypes/AlbumTypeProvider"



export default (props) => {
    const { albums } = useContext(AlbumContext)
    const { artists } = useContext(ArtistContext)
    const { albumTypes } = useContext(AlbumTypeContext)
    
    return (
        <div className="albums">
            <h2>My Collection</h2>
            <button onClick={() => props.history.push("/MyCollection/create-artist")}>
                Add Artist & Album
            </button>
            <article className="albumList">
                {
                    albums.map(album => {
                        const maker = artists.find(art => art.id === album.artistId)
                        const kind = albumTypes.find(abt => abt.id === album.albumTypeId)
                    
                        return <Album key={album.id}
                                    artist={maker}
                                    albumType={kind}
                                    album={album} {...props}/>
                    })
                }
            </article>

        </div>
    )
}