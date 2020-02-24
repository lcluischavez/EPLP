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
    const cds = albums.filter(album=> album.albumTypeId === 1)
    const vinyls = albums.filter(album=> album.albumTypeId === 2)
    const wishitems = albums.filter(album=> album.albumTypeId === 3)

    return (
        <div className="albumSec">
            <section className="mainAlbSec">
            <h1 className="title">My Collection</h1>
                <h2>CDs</h2>
                <button className="button2" onClick={() => props.history.push("/MyCollection/create-artist")}>
                    Add Artist & Album
                </button>
                <article className="albumList">
                    {
                        cds.map(album => {
                            const maker = artists.find(art => art.id === album.artistId)
                            const kind = albumTypes.find(abt => abt.id === album.albumTypeId)
                        
                            return <Album key={album.id}
                                        artist={maker}
                                        albumType={kind}
                                        album={album} {...props}/>
                        })
                    }
                </article>
                <h2>Vinyls</h2>
                <article className="albumList">
                    {
                        vinyls.map(album => {
                            const maker = artists.find(art => art.id === album.artistId)
                            const kind = albumTypes.find(abt => abt.id === album.albumTypeId)
                        
                            return <Album key={album.id}
                                        artist={maker}
                                        albumType={kind}
                                        album={album} {...props}/>
                        })
                    }
                </article>
            </section>
            <section className="wishAlbSec">
                <h2>Wishlist</h2>
                <article className="albumList">
                    {
                        wishitems.map(album => {
                            const maker = artists.find(art => art.id === album.artistId)
                            const kind = albumTypes.find(abt => abt.id === album.albumTypeId)
                        
                            return <Album key={album.id}
                                        artist={maker}
                                        albumType={kind}
                                        album={album} {...props}/>
                        })
                    }
                </article>
            </section>
        </div>
    )
}