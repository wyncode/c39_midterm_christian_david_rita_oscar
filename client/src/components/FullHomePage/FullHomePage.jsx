import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import FullGame from '../LandingPage/Game/FullGame/FullGame';
import './FullHomePage.css';

function FullHomePage() {
  return (
    <div>
      <LandingPage />
      <FullGame />
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          width: '100%',
          objectFit: 'fill',
          zIndex: '2'
        }}
      >
        <source src="../../../IntroCredits.mov" type="video/mp4" />
      </video>
    </div>
  );
}

export default FullHomePage;
