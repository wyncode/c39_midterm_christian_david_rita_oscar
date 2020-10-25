import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import FullGame from '../LandingPage/Game/FullGame/FullGame';
import './FullHomePage.css';

function FullHomePage() {
  return (
    <div>
      <LandingPage />
      <FullGame />
    </div>
  );
}

export default FullHomePage;
