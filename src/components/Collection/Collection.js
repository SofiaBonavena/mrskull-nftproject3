import React from 'react';
import 'bulma/css/bulma.min.css';
import Marquee from "react-easy-marquee";
import '../Collection/Collection.css';
import Image1 from '../../assets/marquee1.png'; 
import Image2 from '../../assets/marquee2.png'; 
import Image3 from '../../assets/marquee3.png'; 
import Image4 from '../../assets/marquee4.png'; 
import Image5 from '../../assets/marquee5.png'; 
import Image6 from '../../assets/marquee6.png'; 



const Collection = () => {
  const images = [ Image1, Image2, Image3,Image4, Image5, Image6];

  return (
    <section id="collection_link"> 
        <div className='marquee_container'>
          <Marquee className='marquee' duration={20000}  reverse={true}  pauseOnHover={true}  margin="60px" height="300px"  >
            <div className='img_container'>
            {images.map((image) => (
              <img src={image} alt="imagen" />
            ))}  
            </div>
          </Marquee>
        </div>
    </section>
  );
};

export default Collection;