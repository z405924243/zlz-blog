import React, { Component } from 'react';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import config from './config';
// import logo from './logo.svg';
import style from './App.scss';
import './styleInit.scss';

class App extends Component {
  render() {
    return (
      <div className={style.background}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
          <Header navigateBarItems={config.navigateBarItems} />
        </header>
        <main>
          <Main />
        </main>
        
      </div>
    );
  }
}

export default App;
