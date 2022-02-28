import React, { Component } from 'react';
import './App.css';
import Board from './components/board';

class App extends Component {
  state = {
    currentPlayer: 'o',

    squares: [
      { id: 1, content: ''}, 
      { id: 2, content: ''}, 
      { id: 3, content: ''},
      { id: 4, content: ''}, 
      { id: 5, content: ''}, 
      { id: 6, content: ''},
      { id: 7, content: ''}, 
      { id: 8, content: ''}, 
      { id: 9, content: ''},
    ]
  }

  onClick = (id) => {
    if(this.invalidMove(id)) {
      return;
    }
    const squares = [...this.state.squares]
    squares[id-1].content = this.state.currentPlayer;
    const currentPlayer = this.changePlayer();
    this.setState({ currentPlayer, squares })
    this.changePlayer();
  }

  invalidMove = (id) => {
    const squares = [...this.state.squares]
    return (squares[id-1].content !== '') ? true : false;
  }

  changePlayer = () => {
    const currentPlayer = this.state.currentPlayer;
    if(currentPlayer === 'o') {
      return 'x';
    } else {
      return 'o';
    }
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
