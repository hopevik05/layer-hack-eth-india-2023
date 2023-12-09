import { AirstackProvider } from "@airstack/airstack-react";
import { Web3OnboardProvider } from "@web3-onboard/react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import web3Onboard from "./common/components/wallet";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ToastContainer />
      <AppRoutes />
    </Web3OnboardProvider>
  );
}

export default App;
