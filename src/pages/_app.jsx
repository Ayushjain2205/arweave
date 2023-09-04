import "@/styles/globals.css";
import React, { useState } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Opbnb, Binance, BinanceTestnet, Ethereum } from "@thirdweb-dev/chains";
import { metamaskWallet, localWallet, paperWallet } from "@thirdweb-dev/react";
import { EcoSystemContext } from "../contexts/EcoSystemContext";

function App({ Component, pageProps }) {
  const [ecosystem, setEcosystem] = useState("bnb");
  return (
    <ThirdwebProvider
      activeChain={BinanceTestnet}
      supportedChains={[Opbnb, Binance, Ethereum, BinanceTestnet]}
      clientId="7a96064a5047b6af0b9b1125a11562ca"
      supportedWallets={[
        metamaskWallet(),
        localWallet(),
        paperWallet({
          paperClientId: "7f3a5a69-a739-40cd-b62d-8ef3667a81b8",
        }),
      ]}
    >
      <EcoSystemContext.Provider value={{ ecosystem, setEcosystem }}>
        <Component {...pageProps} />
      </EcoSystemContext.Provider>
    </ThirdwebProvider>
  );
}

export default App;
