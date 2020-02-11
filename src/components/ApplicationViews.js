import React from "react";
import { Route } from "react-router-dom";
// import { UserProvider } from "./user/UserProvider"
import { AlbumProvider } from "./albums/AlbumProvider";

import AlbumDetail from "./albums/AlbumDetail";
import AlbumForm from "./albums/AlbumForm";
import AlbumList from "./albums/AlbumList";
import ArtistForm from "./artists/ArtistForm";
import { ArtistProvider } from "./artists/ArtistProvider";
import TrackList from "./tracks/TrackList";
import { TrackProvider } from "./tracks/TrackProvider";
import TrackForm from "./tracks/TrackForm";


export default props => {
    return (
        <>
            <AlbumProvider>
                <ArtistProvider>
                    <TrackProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route
                            exact
                            path="/albums"
                            render={props => <AlbumList {...props} />}
                        />
                        <Route
                            exact
                            path="/albums/create-artist"
                            render={props => <ArtistForm {...props} />}
                        />
                        <Route
                        exact
                        path="/albums/create-album"
                        render={props => <AlbumForm {...props} />}
                        />
                        <Route
                            path="/albums/:albumId(\d+)"
                            render={props => <AlbumDetail {...props} />}
                        />
                        <Route
                            path="/albums/create-track"
                            render={props => <TrackForm {...props} />}
                        />
                    </TrackProvider>
                </ArtistProvider>
            </AlbumProvider>

            <AlbumProvider>
                <ArtistProvider>
                    <TrackProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/tracks">
                            <TrackList />
                        </Route>
                    </TrackProvider>
                </ArtistProvider>
            </AlbumProvider>
        </>
    );
};
