import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import { useState } from 'react';
import { useRef } from 'react';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleClick = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();

    }
    else {
      vidRef.current.play();
    }
  }

  return (
    <div className='res-video'>
      <video src={meal}
        type="video/mp4"
        ref={vidRef}
        muted
        loop
        controls={false} />
      <div className="res-video-overlay flex-center">
        <div className="res-video-overlay-circle flex-center" onClick={handleClick}>
          {playVideo ? (<BsPauseFill color='#fff' fontSize={30} />) : <BsFillPlayFill BsPauseFill color='#fff' fontSize={30} />}
        </div>

      </div>
    </div>

  );
}

export default Intro;
