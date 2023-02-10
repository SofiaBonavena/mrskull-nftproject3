import React from 'react';
import 'bulma/css/bulma.min.css';
import '../Footer/Footer.css';
import Image from '../../assets/logo.png';
const Footer = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "footer_container"
  }, /*#__PURE__*/React.createElement("div", {
    class: "content has-text-centered"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("img", {
    src: Image,
    alt: "logo",
    width: 200
  }), /*#__PURE__*/React.createElement("p", {
    className: "footer_text"
  }, "A collection of 1000 NFT's ", /*#__PURE__*/React.createElement("br", null), " \xA9Sofia Bonavena"))));
};
export default Footer;