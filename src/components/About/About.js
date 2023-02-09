import React from 'react';
import 'bulma/css/bulma.min.css';
import '../About/About.css';
import Image from '../../assets/person.png'; 


const About = () => {
    return (
      <>
      <div id='about_link'>
          <div class="columns">
              <div class="column">
                  <div className='card_container'>
                        <div className="card__giratorio">
                            <div className="card__giratorio-conteudo">
                                <div className="card__giratorio-conteudo--frente">
                                    <img src={Image} width={400}  alt="Person" className="logo"></img>
                                    <h3>Sofia Bonavena</h3>
                                </div>
                                <div className="card__giratorio-conteudo--traseira">
                                    <h3>Sofia Bonavena</h3>
                                    <p>🎨💻 Artist</p>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
              <div class="column">
                  <h2>Mr.Skull is a collection of 1000 unique Non-Fungible Tokens (NFT) stored on Ethereum which were desgined by Argentinian artist Sofia Bonavena</h2>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default About
  