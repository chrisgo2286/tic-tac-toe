import React, { Component } from 'react';
import './App.css';
import Board from './components/board';

class App extends Component {
  state = {
    squares: [
      { content: 'x'}, 
      { content: 'o'}, 
      { content: 'x'},
      { content: 'x'}, 
      { content: 'o'}, 
      { content: 'x'},
      { content: 'x'}, 
      { content: 'o'}, 
      { content: 'x'},
    ]
  }

  onClick = (event) => {
    console.log(event.target.value);
  }
  
  render() {
    return (
      <Board 
        squares={this.state.squares}
        onClick={this.onClick}
      />
    )
  }
}
export default App;
