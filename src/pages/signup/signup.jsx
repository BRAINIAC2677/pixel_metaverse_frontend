
import React, { useContext, useEffect } from "react";

import Navbar from "../../global_components/navbar";
import { GlobalContext } from "../../contexts/global_context";

import Marketplace from "../../contracts/Marketplace.json";

const ethers = require("ethers")

function Signup() {
    const { metamask, setMetamask } = useContext(GlobalContext);
    const CONTRACT_ADDRESS = "0x478C98EAd152c357c5d214D5B56D55fB66017D6d";

    console.log(CONTRACT_ADDRESS);

    const connectWallet = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, Marketplace.abi, provider);
            const contractWithSigner = contract.connect(provider.getSigner());
            setMetamask((prevMetamask) => {
                return { ...prevMetamask, isConnected: true, accountAddress: contract.address, provider: provider, contract: contract, contractWithSigner: contractWithSigner };
            }
            );
            console.log(metamask);
            // await contractWithSigner.register_artist("name", "file_hash");
            var artwork = await contractWithSigner.get_artist_artworks();
            console.log(artwork);
            console.log("registered artist");

        }
    };


    useEffect(() => {
        connectWallet();
    }, []);

    return (
        <div>
            <h1>Signup</h1>
            <Navbar />
        </div>
    );
}

export default Signup;