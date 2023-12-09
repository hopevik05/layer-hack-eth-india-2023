import useAccount from "../../../common/hooks/useAccount";
import useAuth from "../../hooks/useAuth";

export default function WalletButton() {
  const { handleNetwork, connecting } = useAuth();
  const { account } = useAccount();

  return (
    <button
      disabled={connecting}
      className="primary-btn mt-1.5 px-6 flex mx-auto items-center"
      onClick={() => {
        handleNetwork();
      }}
    >
      {!account ? "Connect" : "Disconnect"}
    </button>
  );
}
