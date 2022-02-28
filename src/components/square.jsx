import React, { Component } from 'react';

class Square extends Component {
  state = {
    hover: false,
  }
  handleClick = () => {
    this.props.onClick(this.props.square.id);
  }

  handleMouseEnter = () => {
    const hover = true;
    this.setState({ hover });
  } 

  handleMouseLeave = () => {
    const hover = false;
    this.setState({ hover });
  }

  checkClassName = () => {
    return (this.state.hover === true) ? 'square hover':'square';
  }

  render() {
    return (
      <div 
        className={ this.checkClassName() }
        onClick={ this.handleClick }
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>      
        { this.props.square.content }
      </div>
    )
  }
}
export default Square;