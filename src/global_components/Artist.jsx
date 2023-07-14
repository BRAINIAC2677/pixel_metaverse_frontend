import React from 'react';

const Artist = ({ artist }) => {
    const { artist_address, name, img_ipfs_hash } = artist;

    return (
        <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-500">{`Artist Address: ${artist_address}`}</p>
                <p className="text-gray-500">{`Image IPFS Hash: ${img_ipfs_hash}`}</p>
            </div>
        </div>
    );
};

export default Artist;

