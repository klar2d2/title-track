import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Home from './Pages/Home'

class Content extends Component {
  
  render() {
    return(
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    )
  }
}

export default Content
