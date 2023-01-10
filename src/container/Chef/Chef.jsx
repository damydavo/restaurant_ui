import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import SubHeading from './../../components/SubHeading/SubHeading';
const Chef = () => (
  <div className="res-bg res-wrapper section-padding">
    <div className="res-wrapper-img res-wrapper-img-reverse ">
      <img src={images.chef} alt="Chef" />
    </div>

<div className='res-wrapper-info'>
<SubHeading title="Chef's Word" />
<h1 className='headtext-cormorant'>What We Believe in</h1>

<div className='res-chef-content'>
<div className='res-chef-content-quote'>
<img src={ images.quote } alt="Chef Quotes" />
<p className="p-opensans">Lorem ipsum dolor, sit amet</p>
</div>

<p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, harum eligendi atque quod hic repudiandae repellat</p>

</div>

<div className="res-chef-sign">
<p>Damydavo</p>
<p className="p-opensans">Chef and Founder</p>
<img src={ images.sign } alt="Sign" />
</div>

</div>
</div>

);

export default Chef;
