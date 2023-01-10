import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {

  return (
    <div className="res-gallery flex-center">
      <div className="res-gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        </div>
    
    </div>
  )

  };

export default Gallery;
