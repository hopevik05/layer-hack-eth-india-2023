import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import walletConnectModule from "@web3-onboard/walletconnect";
import logo from "../../../assets/logo/layer-hack.svg";

export const supportedChains: number[] = [80001];

const injected = injectedModule();
const walletConnect = walletConnectModule();

const wallets = [injected, walletConnect];

const chains = [
  {
    id: "0x1",
    token: "ETH",
    label: "Ethereum Mainnet",
    rpcUrl: "https://eth.llamarpc.com",
    blockExplorerUrl: "https://etherscan.io",
  },
  {
    id: "0x89",
    token: "MATIC",
    label: "Polygon",
    rpcUrl: "https://polygon.llamarpc.com",
    blockExplorerUrl: "https://polygonscan.com",
  },
];

const appMetadata = {
  name: "DZap",
  icon: logo,
  description: "Example showcasing how to connect a wallet.",
  recommendedInjectedWallets: [
    { name: "MetaMask", url: "https://metamask.io" },
    { name: "Coinbase", url: "https://wallet.coinbase.com/" },
  ],
};

const web3Onboard = init({
  wallets,
  chains,
  connect: {
    autoConnectLastWallet: true,
  },
  //   theme: "dark",
  appMetadata,
  accountCenter: {
    desktop: {
      position: "topRight",
      enabled: false,
      minimal: false,
    },
    mobile: {
      position: "topRight",
      enabled: false,
      minimal: true,
    },
  },
});

export default web3Onboard;
