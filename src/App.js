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
import { GlobalContext } from "./contexts/global_context";

function App() {
  const { ethereum } = window;
  const { metamask, setMetamask } = useContext(GlobalContext);

  const checkMetamaskAvailability = async () => {
    if (!ethereum) {
      setMetamask((prevMetamask) => {
        return { ...prevMetamask, haveMetamask: false }
      })
    }
    setMetamask((prevMetamask) => {
      return { ...prevMetamask, haveMetamask: true }
    });
  };

  console.log(metamask);

  useEffect(() => {
    checkMetamaskAvailability();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;