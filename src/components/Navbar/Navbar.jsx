import React from 'react';
import {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => { 
   const [toggleMenu, setToggleMenu] = useState(false)

  return (
  <nav className='res-navbar'>
    <div className="navbar-logo">
      {/* <img src={images.gericht} alt="app logo" /> */}
      <h2>Damydavo</h2>
    </div>
    <ul className="navbar-link">
      <li className="opensans"><a href="#home">Home</a></li>
      <li className="opensans"><a href="#about">About</a></li>
      <li className="opensans"><a href="#menu">Menu</a></li>
      <li className="opensans"><a href="#award">Award</a></li>
      <li className="opensans"><a href="#contact">Contact</a></li>

    </ul>

    <div className='navbar-login'>
      <a href="#login" className='opensans'>Log In / Register</a>

      <div />
      <a href="/" className='opensans'>Book Table</a>
    </div>

    <div className="res-navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}}/>

        {toggleMenu && (
          
        <div className="res-navbar-smallscreen-overlay flex-center slide-bottom">
         <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() =>{setToggleMenu(false)}} />

        <ul className="res-navbar-smallscreen-link">
          <li className="opensans"><a href="#home">Home</a></li>
          <li className="opensans"><a href="#about">About</a></li>
          <li className="opensans"><a href="#menu">Menu</a></li>
          <li className="opensans"><a href="#award">Award</a></li>
          <li className="opensans"><a href="#contact">Contact</a></li>

        </ul>
        </div>

        )}
    </div>
  </nav>
  
);
  }

export default Navbar;
