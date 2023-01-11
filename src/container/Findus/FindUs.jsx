import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="res-bg res-wrapper section-padding" id='contact'>
    <div className="app-wrapper-info">
      <SubHeading title="contact" />
      <h1 className="headtext-cormorant" style={{ marginBottom: '3rem' }}>Find us</h1>
      <div className="res-wrapper-content">
        <p className="p-opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className="p-opensans" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p-opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p-opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      <button type="button" className="custom-button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="res-wrapper-img">
      <img src={images.findus} alt="findus" />
    </div>

  </div>
);

export default FindUs;
