import React, { Component } from 'react';

class Square extends Component {
  handleClick = () => {
    this.props.onClick(this.props.square.id);
  }

  render() {
    return (
      <div 
        className='square'
        onClick={ this.handleClick }>      
        { this.props.square.content }
      </div>
    )
  }
}
export default Square;