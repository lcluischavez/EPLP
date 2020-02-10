import React, { useContext } from "react"
import { TrackContext } from "./TrackProvider"
import Track from "./Track"
import "./Tracks.css"
import { ArtistContext } from "../artists/ArtistProvider"


export default (props) => {
    const { tracks } = useContext(TrackContext)
    const { artists } = useContext(ArtistContext)

    return (
        <div className="tracks">
            <h2>Tracklist</h2>
            <button onClick={() => props.history.push("/MyCollection/create-song")}>
                Add Song
            </button>   
            <article className="trackList">
            {
                tracks.map(track => {
                    const maker = artists.find(tra => tra.id === track.artistId) || {}
            
                    return <Track key={track.id}
                                    artist={maker}
                                    track={track} />
                })
            }
            </article>
        </div>
    )

    
}

// import React, { useContext } from "react"
// import { ArtistContext } from "../artist/ArtistProvider"
// import { AlbumContext } from "./AnimalProvider"
// import "./Albums.css"

// export default (props) => {
//     const { albums } = useContext(AlbumContext)
//     const { artists } = useContext(ArtistContext)

//     /*
//         This line of code will be explained in the next
//         section of the chapter.
//     */
//     const chosenAlbumId = parseInt(props.match.params.animalId, 10)

//     const album = albums.find(a => a.id === chosenAlbumId) || {}
//     const artist = artists.find(l => l.id === album.artistId) || {}

//     return (
//         <section className="album">
//             <h3 className="album__name">{ album.name }</h3>
//             <div className="album__artist">Artist: { artist.name }</div>
            
            
//         </section>
//     )

// }

