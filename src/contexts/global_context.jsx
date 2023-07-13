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

    return (
        <GlobalContext.Provider value={{ metamask, setMetamask }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export { GlobalContextProvider, GlobalContext };