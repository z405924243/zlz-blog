import React, { Component } from 'react';
import Main from './components/main';
import './App.css';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Switch>
          <Route path='/blogs' Component={}></Route>
        </Switch> */}
        <main>
          <Main></Main>
        </main>
        
      </div>
    );
  }
}

export default App;
