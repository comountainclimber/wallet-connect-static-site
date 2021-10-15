import { ReactComponent as NeonLogo } from "./neon_logo.svg";
import { ReactComponent as WalletConnectLogo } from "./wallet_connect_logo.svg";
import { ReactComponent as WalletConnectLogoMobile } from "./wc_mobile.svg";
import { ReactComponent as NeoLogo } from "./neo_logo.svg";
import { ReactComponent as CozLogo } from "./coz_logo.svg";
import { ReactComponent as DeepLink } from "./deep_link.svg";
import { ReactComponent as Qr } from "./qr.svg";
import { ReactComponent as Demo } from "./demo.svg";
import { ReactComponent as DemoTablet } from "./demo-tablet.svg";
import { ReactComponent as Download } from "./download.svg";
import "./App.css";
import { useState } from "react";

const CONNECT_MOCK =
  "wc:ddbfbf71d313c6a0b7324c734813a462c8b2396bcf289240b5cf1f53e9f39a69@2?controller=false&publicKey=ee4726212adfae935ce458b1e8f50c892f90cb2568284c8ab75f1a1f86cb884a&relay=%7B%22protocol%22%3A%22waku%22%7D";

function App() {
  const [appName, setAppName] = useState("N3 Governance");

  return (
    <div className="App flex flex-col lg:h-screen justify-between items-start">
      <header>
        <div className="app-container m-auto flex items-center h-full justify-between">
          <NeonLogo id="neon_wallet_logo" className="" />
          <WalletConnectLogo id="wc_logo" className="sm:hidden md:flex" />
          <WalletConnectLogoMobile className="sm:flex md:hidden" />
        </div>
      </header>
      <div className="app-container m-auto w-full">
        <div className="m-auto flex-col w-full justify-center md:mt-24 sm:mt-12">
          {/* <NeoLogo className="m-auto mb-6" /> */}
          <h1 className="text-3xl flex justify-center text-center b">
            {" "}
            Please select an option
          </h1>
          {/* <p className="flex justify-center mt-8 opacity-60">
            {" "}
            Please select an option
          </p> */}
        </div>
        <div className="lg:flex md:flex-column md:justify-center m-auto w-full lg:justify-around mt-8 mb-24 sm:flex-nowrap md:flex-nowrap">
          <div className="lg:w-1/3 md:w-1/2 sm:w-3/4 bg-black lg:m-2 p-6 flex-column align-center rounded min-w-min md:mt-6 md:m-auto sm:mt-6 sm:m-auto">
            <div className="flex flex-col h-full justify-around">
              <h2 className="flex justify-center"> Deeplink connection</h2>
              <p className="flex justify-center opacity-60 text-center text-xs mt-2 max-w-xs m-auto">
                Ensure your Neon Wallet is open on the correct account then
                click the deeplink button below to connect
              </p>
              <div className="flex flex-col items-center justify-between h-full">
                <DeepLink className="m-auto sm:mt-6" />
                <button className="primary-button m-auto sm:mt-6">
                  Link Wallet
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 sm:w-3/4 bg-black lg:m-2 p-6 flex-column align-center rounded min-w-min md:mt-6 md:m-auto sm:mt-6 sm:m-auto">
            <div className="flex flex-col h-full justify-around">
              <h2 className="flex justify-center"> QR code connection </h2>
              <p className="flex justify-center opacity-60 text-xs mt-2 text-center max-w-xs m-auto">
                Please scan QR code to connect your wallet on a compatible
                device
              </p>
              <Qr className="m-auto mt-4 max-w-full min-w-100" />
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 sm:w-3/4 bg-black lg:m-2 p-6 flex-column align-center rounded min-w-min md:mt-6 md:m-auto sm:mt-6 sm:m-auto">
            <div className="flex flex-col h-full justify-around">
              <h2 className="flex justify-center"> Connection URL</h2>
              <p className="flex justify-center opacity-60 text-xs mt-2 text-center max-w-xs m-auto">
                Copy and paste the connection URL into the Add connection page
                in your wallet
              </p>
              <div className="flex flex-col items-center justify-between h-full">
                <div className="flex text-xs mt-4 text-left max-w-xs m-auto break-all bg-blue text-green p-6 pb-10 rounded font-mono sm:mt-6">
                  {CONNECT_MOCK}
                </div>
                <button className="primary-button m-auto sm:mt-6">
                  Copy URL
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row bg-blue w-full  md:p-2 sm:p-2 mb-12 justify-between sm:flex-col sm:items-center sm:text-center">
          <Demo className="md:hidden sm:hidden lg:hidden xl:flex" />
          <DemoTablet className="-mb-2 md:flex sm:flex sm:mb-2 lg:flex lg:m-auto xl:hidden" />
          <div className="flex flex-col w-2/3 lg:p-6">
            <div className="text-green text-2xl sm:mb-2 lg:text-left b">
              Get started with the most advanced wallet on the Neo ecosystem.
            </div>
            <div className="flex md:flex-row justify-between w-full lg:mt-4 sm:mt-2 md:mt-2 md:flex-wrap lg:flex-nowrap sm:flex-col">
              <div className="opacity-60 sm:mb-6 lg:text-left">
                In quo ignorare vos arbitrer, sed et argumentandum et quas
                molestias excepturi sint, obcaecati cupiditate non recusandae.
              </div>
              <button className="download-button transform md:scale-90 sm:scale-75 flex items-center justify-center lg:ml-6 md:ml-auto sm:m-auto sm:-ml-4">
                {" "}
                <Download className="mr-4" /> Download Neon Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="app-container m-auto flex h-full items-center">
          <CozLogo id="coz_logo" className="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
