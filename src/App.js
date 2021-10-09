import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Web3 from "web3";
import { abi } from "./contract/abi/ERC20Abi.json";

import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import "./App.css";
import Layout from "./components/Layout";

import { Web3ReactProvider } from "@web3-react/core";

import { getLibrary } from "./utils/getLibrary";
import ConnectWallet from "./components/ConnectWallet";
import Landing from "./containers/Landing";
import theme from "./materialUiTheme";
import { ThemeProvider } from "@material-ui/styles";
import SelectWallet from "./containers/SelectWallet";
import CreateNewCollection from "./containers/CreateNewCollection";
import SolanaConnection from "./components/SolanaConnection";
import MyCollections from "./containers/MyCollections";
import Profile from "./containers/Profile";
import MarketPlace from "./containers/Marketplace";
import EditNft from "./containers/EditNft";
import CreateNft from "./containers/CreateNft";
import SingleNft from "./containers/SingleNft";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <Router>
          <SolanaConnection />

          <Layout>
            <Switch>
              <Route component={Landing} path="/" exact />
              <Route component={SelectWallet} path="/select-wallet" exact />
              <Route
                component={CreateNewCollection}
                path="/create-new-collection"
                exact
              />
              <Route component={MyCollections} path="/my-collections" exact />

              <Route component={Profile} path="/profile" exact />
              <Route component={MarketPlace} path="/marketplace" exact />
              <Route component={EditNft} path="/edit-nft" exact />
              <Route component={CreateNft} path="/create-nft" exact />
              <Route component={SingleNft} path="/single-nft" exact />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default App;
