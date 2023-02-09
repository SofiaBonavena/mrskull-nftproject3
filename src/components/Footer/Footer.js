import React from 'react';
import 'bulma/css/bulma.min.css';
import '../Footer/Footer.css';
import Image from '../../assets/logo.png';


const Footer = () => {
  return (
    <div className='footer_container'>
        <div class="content has-text-centered">
          <p>
            <img src={Image} alt="logo" width={200} />
            <p className='footer_text'>A collection of 1000 NFT's <br/> ©Sofia Bonavena</p>
          </p>
        </div>
    </div>
  )
}

export default Footer