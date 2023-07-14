import React from 'react';

const Artwork = ({ artwork }) => {
    const { is_for_sale, token_id, original_artwork_id, price } = artwork;

    return (
        <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{`Artwork #${token_id}`}</h2>
                <p className="text-gray-500">{`Original Artwork ID: ${original_artwork_id}`}</p>
                <p className="text-gray-500">
                    {is_for_sale ? `Price: ${price} WEI` : 'Not for Sale'}
                </p>
            </div>
        </div>
    );
};

export default Artwork;
