import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

const AwardCard = ({award: { imgUrl, title, subtitle }}) => (
  <div className="res-laurels-awards-card">
    <img src={imgUrl} alt="Award Images" />

    <div className="res-laurels-awards-card-content">
      <p className="p-cormorant" style={{ color: '#ddca87' }}>{ title }</p>
      <p className="p-cormorant">{ subtitle }</p>
      </div>
      </div>
)

 

const Laurels = () => (
  <div className="res-bg res-wrapper section-padding">
    <div className="res-wrapper-info">
      <SubHeading title="Award & Recognition"/>
      <h1 className="headtext-cormorant">Our Laurels</h1>

      <div className="res-laurel-awards">
        { data.awards.map((award) =><AwardCard award={award} key= {award.title}/>)}
      </div>
    </div>

    <div className="res-wrapper-img">
     <img src={images.laurels} alt="laurels" />
    </div>
    </div>
);

export default Laurels;
