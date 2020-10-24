import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NavigationBar from './components/LandingPage/NavigationBar';
import CharacterIndex from './components/CharacterIndex/CharacterIndex';
import LandingPage from './components/LandingPage/LandingPage';

import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    console.log('hello');
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
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/character-index" component={CharacterIndex} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
