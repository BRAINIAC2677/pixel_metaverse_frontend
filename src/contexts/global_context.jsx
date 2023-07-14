import React, { useState } from "react";
const GlobalContext = React.createContext();

function GlobalContextProvider(props) {
    const [metamask, setMetamask] = useState({
        'haveMetamask': false,
        'isConnected': false,
        'accountAddress': null,
        'provider': null,
        'contract': null,
        'contractWithSigner': null,
    });

    const [infos, setInfos] = useState({
        'artworks': [],
        'originalArtworks': [],
        'artists': [],
        'orders': [],
        'auctionItems': [],
    });

    return (
        <GlobalContext.Provider value={{ metamask, setMetamask, infos, setInfos }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export { GlobalContextProvider, GlobalContext };