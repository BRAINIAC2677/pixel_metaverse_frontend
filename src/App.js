import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/home/home";
import Marketplace from "./pages/marketplace/marketplace";
import Signup from "./pages/signup/signup";
import Artists from "./pages/artists/artists";
import Auction from "./pages/auction/auction";
import Order from "./global_components/Order";

import { GlobalContext } from "./contexts/global_context";
import marketplace from "./contracts/marketplace.json"
import Navbar from "./global_components/navbar";

const ethers = require("ethers")

function App() {
  const { metamask, setMetamask } = useContext(GlobalContext);
  const { infos, setInfos } = useContext(GlobalContext);
  const CONTRACT_ADDRESS = "0x9F7198B00adaa0DB035F75C94C7946b1c3be73bf";

  console.log(CONTRACT_ADDRESS);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, marketplace.abi, provider);
      const contractWithSigner = contract.connect(provider.getSigner());
      setMetamask((prevMetamask) => {
        return { ...prevMetamask, isConnected: true, accountAddress: contract.address, provider: provider, contract: contract, contractWithSigner: contractWithSigner };
      }
      );
      console.log(metamask);

      let artworks = await contract.get_artworks();
      let artists = await contract.get_artists();
      let originalArtworks = await contract.get_original_artworks();
      let orders = await contract.get_orders();
      let auctionItems = await contract.get_auction_items();

      console.log(artworks);
      console.log(artists);
      console.log(originalArtworks);
      console.log(orders);

      setInfos((prevInfos) => {
        return { ...prevInfos, artworks: artworks, artists: artists, originalArtworks: originalArtworks, orders: orders, auctionItems: auctionItems };
      }
      );

      console.log("accessed infos");
    }
  };

  console.log(metamask);

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;