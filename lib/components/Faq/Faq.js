import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import '../Faq/Faq.css';
import Faq from 'react-faq-component';
const data = {
  title: "FAQ (Frequently Asked Questions)",
  rows: [{
    title: "1. What is an NFT?",
    content: "NFT Stands for Non-Fungible. It's a digital assets (art, music, in-game items, videos) that is unique and can be verified on the blockchain. They are bought and sold online"
  }, {
    title: "2. What is Mr.Skull?",
    content: "Mr.Skull is a collection of 1000 unique NFTs which were desgined by Sofia Bonavena "
  }, {
    title: "3. How do I get a Mr. Skull NFT?",
    content: "You can mint a Mr.Skull NFT by connecting your wallet to the Mr.Skull website and clicking the 'Mint' button or go shopping on the secondary market (Opensea) to buy an NFT "
  }, {
    title: "4. How do I set up my wallet?",
    content: "We recommend using Metamask. The Metamask team answers this question better than we do."
  }]
};
export default class App extends Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "faq_link"
    }, /*#__PURE__*/React.createElement("div", {
      className: "faq_container"
    }, /*#__PURE__*/React.createElement(Faq, {
      data: data
    })));
  }
}