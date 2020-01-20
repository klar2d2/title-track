import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Content from './Controllers/Content'
import Nav from './Controllers/Subcomponents/Nav'
import Footer from './Controllers/Subcomponents/Footer'
import {IAppProps} from './react-app-env'

class App extends Component<IAppProps, {}> {
  state = {
    recentTitles: [],
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Nav />
          <Content />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
