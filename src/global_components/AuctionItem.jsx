import React from 'react';

const AuctionItem = ({ item }) => {
    const {
        auction_item_id,
        artwork_token_id,
        start_time,
        end_time,
        min_bid,
        highest_bid,
        highest_bidder,
    } = item;

    return (
        <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{`Auction Item #${auction_item_id}`}</h2>
                <p className="text-gray-500">{`Artwork Token ID: ${artwork_token_id}`}</p>
                <p className="text-gray-500">{`Start Time: ${start_time}`}</p>
                <p className="text-gray-500">{`End Time: ${end_time}`}</p>
                <p className="text-gray-500">{`Minimum Bid: ${min_bid}`}</p>
                <p className="text-gray-500">{`Highest Bid: ${highest_bid}`}</p>
                <p className="text-gray-500">{`Highest Bidder: ${highest_bidder}`}</p>
            </div>
        </div>
    );
};

export default AuctionItem;
