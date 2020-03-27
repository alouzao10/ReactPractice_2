import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './Context';

import Navbar from './Components/Layout/Navbar';
import Index from './Components/Layout/Index';
import Lyrics from './Components/Tracks/Lyrics';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/lyrics/track/:id' component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
