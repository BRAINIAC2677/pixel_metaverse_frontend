import React, { useContext } from "react";

import Navbar from "../../global_components/navbar";
import { GlobalContext } from "../../contexts/global_context";
import Artwork from "../../global_components/Artwork";
import OriginalArtwork from "../../global_components/OriginalArtwork";

function Marketplace() {
    const { infos, setInfos } = useContext(GlobalContext);

    const artworks = infos.artworks.map((artwork) => (
        <Artwork key={artwork.token_id} artwork={artwork} />
    ));

    const originalArtworks = infos.originalArtworks.map((artwork) => (
        <OriginalArtwork key={artwork.original_artwork_id} artwork={artwork} />
    ));

    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <section className="mt-8">
                    <h2 className="mb-4 text-2xl font-bold">Artworks</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {artworks}
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="mb-4 text-2xl font-bold">Original Artworks</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {originalArtworks}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Marketplace;