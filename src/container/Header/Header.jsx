import React from 'react';
import { images } from '../../constants';
import SubHeading from './../../components/SubHeading/SubHeading';

import './Header.css';

const Header = () => (
  <div className="res-header res-wrapper section-padding" id="home">
   <div className="res-wrapper-info">
       <SubHeading title="Chase the new flavour"/>
       <h1 className='res-header-h1'>The Key to fine dinning</h1>
       <p className='p-opensans' style={{ margin: '4rem 0' }}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cumque magni. 
         Rerum alias voluptatum nostrum, fugiat earum id ab ex numquam,
          impedit provident nam culpa dicta delectus harum soluta ipsam?
         </p>
         <button type="button" className="custom-button">Explore More</button>
   </div>

   <div className="res-wrapper-img">
  <img src={images.welcome} alt="header image" />
</div>
</div>
  
  
);

export default Header;
