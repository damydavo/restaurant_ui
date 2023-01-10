import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="res-aboutus res-bg flex-center section-padding" id="about">
    <div className="res-aboutus-overlay flex-center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="res-aboutus-content flex-center">
      <div className='res-aboutus-content-about'>
        <h1 className='headtext-cormorant'>About Us</h1>
        <img src={ images.spoon } alt="about-spoon" className='spoon-img' />
        <p className='p-opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Voluptatem aliquam voluptatum ipsum! Sunt perferendis in saepe,
         fugiat quibusdam tenetur, et, omnis praesentium enim nemo 
         veritatis laboriosam error nam! Quis, perferendis.
         </p>
         <button type="button" className='custom-button'>Know more</button>
        </div>
        
        

         <div className='res-aboutus-content-knife flex-center'>
           <img src={images.knife} alt="image-knife" />
         </div>

         <div className='res-aboutus-content-history'>
        <h1 className='headtext-cormorant'>Our History</h1>
        <img src={ images.spoon } alt="about-spoon" className='spoon-img' />
        <p className='p-opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Voluptatem aliquam voluptatum ipsum! Sunt perferendis in saepe,
         fugiat quibusdam tenetur, et, omnis praesentium enim nemo 
         veritatis laboriosam error nam! Quis, perferendis.
         </p>
         <button type="button" className='custom-button'>Know more</button>
        </div>
        
         
      </div>
    </div>
 
);

export default AboutUs;
