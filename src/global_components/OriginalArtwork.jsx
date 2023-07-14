import React from 'react';

const OriginalArtwork = ({ artwork }) => {
    const {
        is_verified,
        original_artwork_id,
        count,
        artist_address,
        description,
        img_ipfs_hash,
    } = artwork;

    return (
        <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{`Original Artwork #${original_artwork_id}`}</h2>
                <p className="text-gray-500">{`Count: ${count}`}</p>
                <p className="text-gray-500">{`Artist Address: ${artist_address}`}</p>
                <p className="text-gray-500">{`Description: ${description}`}</p>
                <p className="text-gray-500">
                    {is_verified ? 'Verified' : 'Not Verified'}
                </p>
            </div>
        </div>
    );
};

export default OriginalArtwork;
