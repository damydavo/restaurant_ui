import React from 'react';
import './Newsletter.css';
import { SubHeading } from '../../components';

const Newsletter = () => (
  <div className="res-newsletter">
    <div className="res-newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext-cormorant">Subscribe to Our Newsletter</h1>
      <p className="p-opensans">And never miss latest Updates!</p>
    </div>

    <div className="flex-center res-newsletter-input">
      <input type="email" placeholder="Enter your email address" />
      <button className="custom-button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
