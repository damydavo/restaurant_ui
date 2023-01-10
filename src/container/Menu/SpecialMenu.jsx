import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="res-specialMenu flex-center section-padding" id="menu">
    <div className='res-specialMenu-title'>
     <SubHeading title='What Meal Today do you want on your lists'/>
     <h1 className='headtext-cormorant'>Today's Special</h1>
    </div>
   
   <div className='res-specialMenu-menu'>
   <div className="res-specialMenu-menu-wine flex-center">
       <p className="res-specialMenu-menu-heading">Wine & Bear</p>
       <div className="app-specialMenu-menu-items">
         { data.wines.map((wine, index) => 
          <MenuItem key={wine.title + index} price={wine.price} title={wine.title} tags={wine.tags}/>
          ) } 
       </div>
   </div>

   <div className='res-specialMenu-menu-img'>
     <img src={ images.menu } alt="menu image" />
   </div>

   <div className="res-specialMenu-menu-cocktails flex-center">
       <p className="res-specialMenu-menu-heading">Cocktail</p>
       <div className="app-specialMenu-menu-items">
         { data.cocktails.map((cocktail, index) => 
          <MenuItem key={`${cocktail.title}  ${index}`} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ) } 
       </div>
   </div>
   </div>

   <div style={{ marginTop:'15px' }}>
     <button type="button" className='custom-button'>View More</button>
   </div>
  </div>
);

export default SpecialMenu;
 