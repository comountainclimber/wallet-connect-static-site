import { ReactComponent as NeonLogo } from "./neon_logo.svg";
import { ReactComponent as WalletConnectLogo } from "./wallet_connect_logo.svg";
import { ReactComponent as NeoLogo } from "./neo_logo.svg";
import { ReactComponent as CozLogo } from "./coz_logo.svg";
import { ReactComponent as DeepLink } from "./deep_link.svg";
import { ReactComponent as Qr } from "./qr.svg";
import { ReactComponent as Advertisement } from "./advertisement.svg";
import "./App.css";
import { useState } from "react";

const CONNECT_MOCK =
  "wc:ddbfbf71d313c6a0b7324c734813a462c8b2396bcf289240b5cf1f53e9f39a69@2?controller=false&publicKey=ee4726212adfae935ce458b1e8f50c892f90cb2568284c8ab75f1a1f86cb884a&relay=%7B%22protocol%22%3A%22waku%22%7D";

function App() {
  const [appName, setAppName] = useState("N3 Governance");

  return (
    <div className="App flex flex-col h-screen justify-between items-start">
      <header>
        <div className="app-container m-auto flex items-center h-full justify-between">
          <NeonLogo />
          <WalletConnectLogo />
        </div>
      </header>
      <div className="app-container m-auto h-full w-full">
        <div className="m-auto flex-col w-full justify-center mt-24">
          <NeoLogo className="m-auto mb-6" />
          <h1 className="text-2xl flex justify-center">
            {" "}
            {appName} wants to connect{" "}
          </h1>
          <p className="flex justify-center mt-12 opacity-50">
            {" "}
            Please select an option
          </p>
        </div>
        <div className="flex m-auto w-full justify-around mt-12 mb-48">
          <div className="w-1/3 bg-black m-2 p-6 flex-column align-center rounded">
            <h2 className="flex justify-center"> Deeplink connection</h2>
            <p className="flex justify-center opacity-50 text-center text-xs mt-2 max-w-xs m-auto">
              Ensure your Neon Wallet is open on the correct account then click
              the deeplink button below to connect
            </p>
            <div className="flex flex-col items-center h-full justify-between pb-12">
              <DeepLink className="m-auto" />
              <button className="m-auto">Link Wallet</button>
            </div>
          </div>
          <div className="w-1/3 bg-black m-2 p-6 flex-column align-center rounded">
            <h2 className="flex justify-center"> QR code connection </h2>
            <p className="flex justify-center opacity-50 text-xs mt-2 text-center max-w-xs m-auto">
              Please scan QR code to connect your wallet on a compatible device
            </p>
            <Qr className="m-auto mt-4" />
          </div>
          <div className="w-1/3 bg-black m-2 p-6 flex-column align-center rounded">
            <h2 className="flex justify-center"> Connection URL</h2>
            <p className="flex justify-center opacity-50 text-xs mt-2 text-center max-w-xs m-auto">
              Copy and paste the connection URL into the Add connection page in
              your wallet
            </p>
            <div className="flex flex-col items-center h-full justify-between pb-12">
              <div className="flex text-xs mt-4 text-left max-w-xs m-auto break-all bg-blue text-green p-6 pb-14 rounded font-mono">
                {CONNECT_MOCK}
              </div>
              <button className="m-auto">Copy URL</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="app-container m-auto flex h-full items-center">
          <CozLogo />
        </div>
      </footer>
    </div>
  );
}

export default App;
