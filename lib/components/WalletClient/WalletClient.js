import React from "react";
import { useAddress, useOnboard, useWallet, useBalance } from "../../contexts/OnboardContext";
import { truncateWeb3Address } from "../../services/onboard/helpers";
const WalletClient = () => {
  const onboard = useOnboard();
  const wallet = useWallet();
  const address = useAddress();
  const balance = useBalance();
  return onboard ? /*#__PURE__*/React.createElement("div", {
    className: "wallet-client"
  }, !wallet.provider ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Connect to Wallet!"), /*#__PURE__*/React.createElement("p", null, "Please connect your preferred wallet to use the app.")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, wallet.icons && /*#__PURE__*/React.createElement("img", {
    src: wallet.icons.iconSrc,
    alt: wallet.name
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Connected with ", wallet.name), address ? /*#__PURE__*/React.createElement("p", null, truncateWeb3Address(address)) : /*#__PURE__*/React.createElement("p", null, "Please connect your ", wallet.name, " wallet to use the app."), /*#__PURE__*/React.createElement("p", null, balance)))) : /*#__PURE__*/React.createElement("div", null, "Loading...");
};
export default WalletClient;