import React from "react";
import { Route } from "react-router-dom";

import { UserProvider } from "./user/UserProvider"
import { AlbumProvider } from "./albums/AlbumProvider";
import { ArtistProvider } from "./artists/ArtistProvider";



import AlbumList from "./albums/AlbumList";
import AlbumForm from "./albums/AlbumForm";
import ArtistForm from "./artists/ArtistForm";




export default props => {
    return (
        <>
            <AlbumProvider>
                <ArtistProvider>
                    {/* Render the location list when http://localhost:3000/ */}
                    <Route
                        exact
                        path="/MyCollection"
                        render={props => <AlbumList {...props} />}
                    />
                    <Route exact path="/MyCollection/create-artist">
                        <ArtistForm />
                    </Route>
                    <Route exact path="/MyCollection/create-album">
                        <AlbumForm />
                    </Route>
                </ArtistProvider>                 
            </AlbumProvider>
        </>
    );
};