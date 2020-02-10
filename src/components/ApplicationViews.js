import React from "react";
import { Route } from "react-router-dom";

import { UserProvider } from "./user/UserProvider"
import { AlbumProvider } from "./albums/AlbumProvider";
import { ArtistProvider } from "./artists/ArtistProvider";
import { TrackProvider } from "./tracks/TrackProvider";


import AlbumList from "./albums/AlbumList";
import TrackList from "./tracks/TrackList";

import AlbumForm from "./albums/AlbumForm";
import ArtistForm from "./artists/ArtistForm";


export default props => {
    return (
        <>
            <AlbumProvider>
                <ArtistProvider>
                    <TrackProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route
                            exact
                            path="/MyCollection"
                            render={props => <AlbumList {...props} />}
                        />
                        <Route
                            exact
                            path="/MyCollection/create-artist"
                            render={props => <ArtistForm {...props} />}
                        />
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route
                            exact
                            path="/MyCollection/create-album"
                            render={props => <AlbumForm {...props} />}
                        />
                        <Route
                            exact
                            path="/Tracks"
                            render={props=> <TrackList {...props} />}
                        />
                    </TrackProvider>
                </ArtistProvider>                 
            </AlbumProvider>
        </>
    );
};



{/* <Route path="/albums/:albumId(\d+)" render={
    props => <AlbumDetails {...props} />
} /> */}
