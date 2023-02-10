import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import "../Mint/Mint.css";
import Web3 from "web3";
import { useAddress, useWalletProvider, useBalance } from "../../contexts/OnboardContext";
import { factoryAddress, factoryAbi } from "../../services/onboard/contract";
const Mint = () => {
  const address = useAddress();
  const balance = useBalance();
  const provider = useWalletProvider();
  const web3 = new Web3(provider);
  const [total, setTotal] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [mintStatus, setMintStatus] = useState("Waiting");
  const [message, setMessage] = useState("Waiting...");
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  useEffect(() => {
    if (address) {
      if (balance) {
        const valueEth = web3.utils.fromWei(`${balance}`, "ether");
        const totalFixed = parseFloat(valueEth).toFixed(4);
        setUserBalance(totalFixed);
      }
    } else {
      setUserBalance(0);
    }
  }, [web3.utils, balance, address]);
  useEffect(() => {
    const getPrice = async () => {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);
      console.log(myContract);
      const price = await myContract.methods.monsterPrice().call().catch(function (error) {
        return false;
      });
      const valueEth = web3.utils.fromWei(`${price || 0}`, "ether");
      console.log(price, valueEth);
      setTokenPrice(valueEth);
    };
    getPrice();
  });
  useEffect(() => {
    setTotal(counter * tokenPrice);
    console.log(counter, tokenPrice, total);
  }, [counter, tokenPrice, total]);
  useEffect(() => {
    if (mintStatus === "waiting") {
      setMessage("Waiting");
    }
    if (mintStatus === "userConfirmed") {
      setMessage("Waiting for blockchain confirmation");
    }
    if (mintStatus === "blockchainConfirmed") {
      setMessage("Succesful! ");
    }
    if (mintStatus === "error") {
      setMessage("Transaction error ");
    }
  }, [mintStatus]);
  const handleMint = async () => {
    console.log("MINT!");
    try {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);
      const saleStarted = await myContract.methods.saleStarted().call().catch(function (error) {
        return false;
      });
      const publicSaleStarted = await myContract.methods.merkleEnabled().call().catch(function (error) {
        return false;
      });
      const price = await myContract.methods.monsterPrice().call().catch(function (error) {
        return false;
      });
      setTokenPrice(price);
      console.log("Sale Started", saleStarted);
      console.log("Sale Started", publicSaleStarted);
      console.log("Price", price);
      const mintParams = {
        proof: ["0x0000000000000000000000000000000000000000"],
        leaf: "0x0000000000000000000000000000000000000000",
        count: counter
      };
      const total = parseInt(counter) * parseFloat(price);
      // const totalFixed = parseFloat(total.toFixed(4));
      // const valueEth = web3.utils.toWei(`${totalFixed}`, 'ether');

      await myContract.methods.mint(mintParams.proof, mintParams.leaf, parseInt(mintParams.count)).send({
        from: address,
        value: total
      }).once("transactionHash", function (hash) {
        // setUserConfirmation(`success`);
        // setHash(hash);
        setMintStatus("userConfirmed");
        console.log("Transaction Hash", hash);
      }).once("receipt", function (receipt) {
        // setBlChainConfirmation(`success`);
        // setTimeout(() => {
        //   setSuccess(true);
        // }, 1000);
        setMintStatus("blockchainConfirmed");
        console.log("Transaction Confirmed", receipt);
      }).on("error", function (error, receipt) {
        // handleError(error);
        setMintStatus("error");
        console.log("Error", error);
      });
    } catch (error) {}
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "mint_link"
  }, /*#__PURE__*/React.createElement("div", {
    className: "columns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("p", {
    className: "main_text"
  }, " Im not scared to ", /*#__PURE__*/React.createElement("del", null, "die"), " mint, and you?")), /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wallet-client"
  }, /*#__PURE__*/React.createElement("p", {
    className: "secondary_text"
  }, "Dare yourself!"), /*#__PURE__*/React.createElement("div", {
    className: "button_container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleDecrement
  }, "-"), /*#__PURE__*/React.createElement("span", null, counter), /*#__PURE__*/React.createElement("button", {
    onClick: handleIncrement
  }, "+")), /*#__PURE__*/React.createElement("p", {
    className: "text_total"
  }, "Total price"), /*#__PURE__*/React.createElement("div", {
    class: "line"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text_price"
  }, total, " eth"), /*#__PURE__*/React.createElement("button", {
    className: "button_mint",
    disabled: !address ? true : false,
    onClick: handleMint
  }, "Mint"), /*#__PURE__*/React.createElement("br", null), message))));
};
export default Mint;