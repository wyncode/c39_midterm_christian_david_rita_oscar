import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CharacterIndex from './components/CharacterIndex/CharacterIndexPage/CharacterIndex';
import FullHomePage from './components/FullHomePage/FullHomePage';
import GameStart from './components/LandingPage/Game/GameStart/GameStart';



import './App.css';
import CharacterFile from './components/CharacterFile/CharacterFile';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <div id="demo">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={FullHomePage} />
          <Route exact path="/characters" component={CharacterIndex} />
          <Route exact path="/character-file" component={CharacterFile} />
          <Route exact path="/game-start" component={GameStart} />
        </Switch>{' '}
      </BrowserRouter>
    </div>
  );
};

export default App;
