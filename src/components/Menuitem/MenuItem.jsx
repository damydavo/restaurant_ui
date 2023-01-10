import React from 'react';

import './MenuItem.css';

const MenuItem = ({ price, title, tags }) => (
  <div className='res-menuitem'>
    <div className='res-menuitem-head'>
      <div className="res-menuitem-name">
        <p className='p-cormorant' style={{ color:'#DCCA87' }}>{ title }</p>
      </div>

<div className='res-menuitem-dash' />

      <div className='res-menuItem-price'>
        <p className="p-cormorant">{ price }</p>

      </div>
    </div>

    <div className="res-menuitem-sub">
    <p className="p-opensans" style={{ color: 'aaa' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
