import React, {Component} from 'react'
import {IReview} from '../../react-app-env'

class Review extends Component<IReview, {}>{
  
  render() {
    return (
      <div className='review'>
        <h1>Album Title</h1>
        <h2>Artist Name, Label Name</h2>
        <h3>Highlight thang</h3>
        <p>This is where the review would go.</p>
      </div>
    )
  }
}

export default Review
