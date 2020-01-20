import React, {Component} from 'react'

class Highlight extends Component {
  render() {
    return (
      <div className='highlight'>
        <div>
          <h2>Highlighted Review</h2>
        </div>
        <div>
          <p>This is the text that will be filled from the grab. Subheader might be a better name. Short and sweet.</p>
          <h3>Review Author</h3>
          <h3>Date added</h3>
        </div>
      </div>
    )
  }
}

export default Highlight
