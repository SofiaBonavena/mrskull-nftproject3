import React from "react";
import { useOnboardContext, useAddress, useOnboard, useWallet } from "../../contexts/OnboardContext";
import { truncateWeb3Address } from "../../services/onboard/helpers";
const WalletButton = () => {
  const {
    linkWallet,
    resetWallet
  } = useOnboardContext();
  const onboard = useOnboard();
  const wallet = useWallet();
  const address = useAddress();
  return /*#__PURE__*/React.createElement("button", {
    onClick: !wallet.provider ? linkWallet : address ? resetWallet : linkWallet,
    disabled: onboard ? false : true
  }, !wallet.provider ? `Connect wallet` : address ? `Disconnect wallet ${truncateWeb3Address(address)}` : `Connect wallet`);
};
export default WalletButton;