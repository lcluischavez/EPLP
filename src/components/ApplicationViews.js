import React from "react";
import { Route } from "react-router-dom";
// import { UserProvider } from "./user/UserProvider"
import { AlbumProvider } from "./albums/AlbumProvider";
import { ArtistProvider } from "./artists/ArtistProvider";
import { TrackProvider } from "./tracks/TrackProvider";
import { MixtapeProvider } from "./mixtapes/MixtapeProvider";

import AlbumList from "./albums/AlbumList";
import AlbumDetail from "./albums/AlbumDetail";
import AlbumForm from "./albums/AlbumForm";
import ArtistForm from "./artists/ArtistForm";
import TrackList from "./tracks/TrackList";
import TrackForm from "./tracks/TrackForm";
import MixtapeList from "./mixtapes/MixtapeList";


export default props => {
    return (
        <>
            <AlbumProvider>
                <MixtapeProvider>
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
                                exact
                                path="/albums/edit/:albumId(\d+)"
                                render={props => <AlbumForm {...props} />}
                            />
                            <Route
                                path="/albums/create-track"
                                render={props => <TrackForm {...props} />}
                            />
                            <Route
                                exact
                                path="/albums"
                                render={props => <MixtapeList {...props} />}
                            />
                        </TrackProvider>
                    </ArtistProvider>
                </MixtapeProvider>
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
