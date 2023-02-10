/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import WalletButton from '../../components/WalletButton/WalletButton';
import 'bulma/css/bulma.min.css';
import '../NavBar/NavBar.css';
import Image from '../../assets/logo.png';
const NavBar = () => {
  const [isActive, setisActive] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "navbar",
    role: "navigation",
    "aria-label": "main navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-brand"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => {
      setisActive(!isActive);
    },
    role: "button",
    className: `navbar-burger burger ${isActive ? "is-active" : ""}`,
    "aria-label": "menu",
    "aria-expanded": "false",
    "data-target": "navbarBasicExample"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("a", {
    className: "navbar-item",
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: Image,
    alt: "logo",
    width: 150,
    height: 40
  }))), /*#__PURE__*/React.createElement("div", {
    id: "navbarBasicExample",
    className: `navbar-menu ${isActive ? "is-active" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-end"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#collection_link",
    className: "navbar-item"
  }, "Collection"), /*#__PURE__*/React.createElement("a", {
    href: "#mint_link",
    className: "navbar-item"
  }, "Mint"), /*#__PURE__*/React.createElement("a", {
    href: "#about_link",
    className: "navbar-item"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#faq_link",
    className: "navbar-item"
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    className: "navbar-item"
  }, /*#__PURE__*/React.createElement(WalletButton, null))))));
};
export default NavBar;