import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import { ethers } from "ethers";

function useAccount() {
  const [{ wallet }] = useConnectWallet();
  const [{ connectedChain }] = useSetChain();
  const chainId = +BigInt(connectedChain?.id || 0).toString();
  const account = wallet?.accounts[0]?.address || "";
  const provider =
    wallet &&
    new ethers.providers.Web3Provider(wallet.provider, "any").getSigner();
  return { chainId, account, provider };
}

export default useAccount;
