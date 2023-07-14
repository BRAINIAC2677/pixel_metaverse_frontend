import React, { useContext } from "react";

import Navbar from "../../global_components/navbar";
import { GlobalContext } from "../../contexts/global_context";
import AuctionItem from "../../global_components/AuctionItem";

function Auction() {
    const { infos, setInfos } = useContext(GlobalContext);

    // iterate through auction items
    const auctionItems = infos.auctionItems.map((item) => (
        <AuctionItem key={item.auction_item_id} item={item} />
    ));

    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <h2 className="mb-4 text-2xl font-bold">Auction</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {auctionItems}
                </div>
            </div>

        </div>
    );
}

export default Auction;


