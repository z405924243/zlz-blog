import React, { Component } from 'react';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer.jsx';
import config from './config';
// import logo from './logo.svg';
import style from './App.scss';
import './styleInit.scss';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {data:{}};
  }

  componentWillMount() {
    const self = this;
    axios.get(config.requestUrl+ '/blogInfo').then(res=>{
      self.setState({data:res.data.value});
    })
  }

  render() {
    return (
      <div className={style.background}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
          <Header navigateBarItems={config.navigateBarItems} datas={this.state.data} />
        </header>
        <main>
          <Main datas={this.state.data} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
