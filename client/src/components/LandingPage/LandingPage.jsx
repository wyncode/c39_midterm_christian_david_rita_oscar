import React from 'react';
import Carousel from './Carousel/Carousel';
import GameButton from './GameButton/GameButton';
import './LandingPage.css';
import video from '../Images/video.mp4';

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="video">
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '45rem',
            height: '45rem',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Carousel />
      <a href="/game-start">
        <GameButton />
      </a>
    </div>
  );
}

export default LandingPage;
