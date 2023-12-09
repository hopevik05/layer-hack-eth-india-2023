import { useConnectWallet, useSetChain, useWallets } from "@web3-onboard/react";
import { useEffect } from "react";

const METAMASK = "MetaMask";

function useAuth() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ settingChain }, setChain] = useSetChain();
  const connectedWallets = useWallets();

  const handleNetwork = async () => {
    if (!wallet) {
      connect();
    } else if (wallet) {
      disconnect(wallet).then(() => {
        localStorage.removeItem("account");
      });
    }
  };

  useEffect(() => {
    if (!connectedWallets.length) return;
    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    );
    if (connectedWalletsLabelArray.includes(METAMASK)) {
      localStorage.setItem("walletConnector", METAMASK);
    }
    window.localStorage.setItem(
      "connectedWallets",
      JSON.stringify(connectedWalletsLabelArray)
    );
  }, [connectedWallets, wallet]);

  return {
    handleNetwork,
    connecting,
    settingChain,
  };
}
export default useAuth;
