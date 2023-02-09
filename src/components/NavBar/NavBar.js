/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import WalletButton from '../../components/WalletButton/WalletButton';
import 'bulma/css/bulma.min.css';
import '../NavBar/NavBar.css';
import Image from '../../assets/logo.png';


const NavBar = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <>
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a className="navbar-item" href="/">
            <img src={Image} alt="logo" width={150} height={40}/>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <a href='#collection_link' className="navbar-item">Collection</a>
            <a href='#mint_link' className="navbar-item">Mint</a>
            <a href='#about_link' className="navbar-item">About</a>
            <a href='#faq_link' className="navbar-item">FAQ</a>
            <a className="navbar-item"><WalletButton /></a>
          </div>
        </div>
</nav>
    </>
  )
}

export default NavBar

