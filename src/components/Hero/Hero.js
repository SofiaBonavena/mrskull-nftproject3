import React from 'react'
import 'bulma/css/bulma.min.css';
import './Hero.css';

const Hero = () => (
    <section className="hero is-large is-info">
      <div className="hero-body">
        <p className="title">
          MrSkull
        </p>
        <p className="subtitle">
          Collection of NFT's
        </p>
        <a href="https://testnets.opensea.io/collection/maimonnftproject-v2" target="_blank" rel="noreferrer">
          <button>Opensea</button>
        </a>
      </div>
    </section>
  );

export default Hero



