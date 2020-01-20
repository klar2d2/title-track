import React, {Component} from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <a className='logo' href='/'>Logo</a>
        <a href='/'>Reviews</a>
        <a href='/'>About</a>
        <a href='/'>Staff Bands</a>
      </nav>
    )
  }
}

export default Nav
