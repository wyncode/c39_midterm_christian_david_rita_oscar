import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/LandingPage/NavigationBar';
import CharacterIndex from './components/CharacterIndex/CharacterIndex';
import FullHomePage from './components/FullHomePage';
import TestComponent from './components/Game/TestComponent';

import './App.css';
import CharacterFile from './components/CharacterFile/CharacterFile';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    // console.log('hello');
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
        <Route exact path='/character-file' component={CharacterFile} />
        </Switch>{' '}
      </BrowserRouter>
      <TestComponent />
    </div>
  );
};

export default App;
