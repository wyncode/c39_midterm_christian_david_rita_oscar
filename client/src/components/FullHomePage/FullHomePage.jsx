import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import FullGame from '../LandingPage/Game/FullGame/FullGame';
import CharacterIndex from '../CharacterIndex/CharacterIndexPage/CharacterIndex';

function FullHomePage() {
  return (
    <div>
      <LandingPage />
      {/* <FullGame /> */}
      <CharacterIndex />
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
