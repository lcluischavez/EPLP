import React, { useContext } from "react"
import { AlbumContext } from "./AlbumProvider"
import "./Albums.css"
import { Link } from "react-router-dom"


export default ({ album, artist, match, history }) => {
    const { albums, deleteAlbum, setAlbum } = useContext(AlbumContext)

    return(
    <section className="album">
        <img src={album.artwork} alt="artwork img"/>
        <h3 className="album__name">
            <Link to={`/albums/${album.id}`}>
                { album.name }
            </Link>
        </h3>
        <div className="album__artist">{artist.name}</div>
        <button className="btn--delete"
                onClick={() => {
                deleteAlbum(album)
                    .then(() => {
                        history.push("/MyCollection")
                     })
                    }} >Delete
        </button>    
    </section>
)}

