import React, { useContext } from "react";

import Navbar from "../../global_components/navbar";
import { GlobalContext } from "../../contexts/global_context";

import Artist from "../../global_components/Artist";

function Artists({ artists }) {
    const { infos, setInfos } = useContext(GlobalContext);

    const artistsComponents = infos.artists.map((artist) => (
        <Artist key={artist.artist_address} artist={artist} />
    ));

    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <section className="mt-8">
                    <h2 className="mb-4 text-2xl font-bold">Artists</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {artistsComponents}
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Artists;