import React from "react";
import { Route } from "react-router-dom";
// import { UserProvider } from "./user/UserProvider"
import { AlbumProvider } from "./albums/AlbumProvider";
import { ArtistProvider } from "./artists/ArtistProvider";
import { TrackProvider } from "./tracks/TrackProvider";
import { MixtapeProvider } from "./mixtapes/MixtapeProvider";
import { AlbumTypeProvider } from "./albumTypes/AlbumTypeProvider";

import AlbumList from "./albums/AlbumList";
import AlbumDetail from "./albums/AlbumDetail";
import AlbumForm from "./albums/AlbumForm";
import ArtistForm from "./artists/ArtistForm";
import TrackForm from "./tracks/TrackForm";
import MixtapeList from "./mixtapes/MixtapeList";
import MixtapeForm from "./mixtapes/MixtapeList";
import Splash from "./home/Splash";

export default props => {
    return (
        <>
          <AlbumProvider>
                <ArtistProvider>
                    <TrackProvider>
                        <MixtapeProvider>
                            {/* Render the location list when http://localhost:3000/ */}
                            <Route
                                exact
                                path="/"
                                render={props => <Splash {...props} />}
                            />
                        </MixtapeProvider>
                    </TrackProvider>
                </ArtistProvider>
            </AlbumProvider>

            <AlbumProvider>
                <AlbumTypeProvider>
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
                            <Route
                            exact
                            path="/MyCollection/create-album"
                            render={props => <AlbumForm {...props} />}
                            />
                            <Route
                                path="/MyCollection/:albumId(\d+)"
                                render={props => <AlbumDetail {...props} />}
                            />
                            <Route
                                exact
                                path="/MyCollection/edit/:albumId(\d+)"
                                render={props => <AlbumForm {...props} />}
                            />
                            <Route
                                path="/MyCollection/create-track"
                                render={props => <TrackForm {...props} />}
                            />
                        </TrackProvider>
                    </ArtistProvider>
                </AlbumTypeProvider>
            </AlbumProvider>

            <AlbumProvider>
                <ArtistProvider>
                    <TrackProvider>
                        <MixtapeProvider>
                            {/* Render the location list when http://localhost:3000/ */}
                            <Route
                                exact
                                path="/Mixtapes"
                                render={props => <MixtapeList {...props} />}
                            />
                            <Route
                            exact
                            path="/Mixtapes/create-mixtape"
                            render={props => <MixtapeForm {...props} />}
                            />
                            <Route
                                exact
                                path="/Mixtapes/edit/mixtapeId(\d+)"
                                render={props => <MixtapeForm {...props} />}
                            />
                        </MixtapeProvider>
                    </TrackProvider>
                </ArtistProvider>
            </AlbumProvider>
        </>
    );
};
