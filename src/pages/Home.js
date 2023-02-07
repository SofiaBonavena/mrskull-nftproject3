import React from 'react';
import Mint from '../components/Mint/Mint';
import WalletClient from '../components/WalletClient/WalletClient';

const Home = () => {
  return (
    <>
      <div className='homeContainer'>
        <h1>Minimal Mint</h1>
        <div className='modulesContainer'>
          <WalletClient />
          <Mint />
        </div>
      </div>
    </>
  );
};

export default Home;
