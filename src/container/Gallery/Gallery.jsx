import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className="res-gallery flex-center">
      <div className="res-gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p-opensans" style={{ color: '#aaa', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom-button">View more</button>
      </div>

      <div className="res-gallery-images">
        <div className="res-gallery-images-container ref={scrollRef}">
          {galleryImages.map((image, index) => {
            return (
              <div className="res-gallery-images-card flex-center" key={`gallery-image-${index + 1}`}>
                <img src={image} alt="gallery-images" />
                <BsInstagram className="gallery-images-icon" />
              </div>
            )
          })}
        </div>

        <div className="res-gallery-images-arrow">
          <BsArrowLeftShort className="gallery-arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery-arrow-icon" onClick={() => scroll('right')} />
        </div>

      </div>

    </div>
  )
}




export default Gallery;
