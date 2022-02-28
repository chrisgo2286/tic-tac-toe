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

    const squares = this.enterMove(id);
    const currentPlayer = this.changePlayer();
    this.setState({ currentPlayer, squares })
    this.changePlayer();
  }

  invalidMove = (id) => {
    const squares = [...this.state.squares]
    for(var i=0; i<9; i++) {
      if(squares[i].id === id) {
        if(squares[i].content !== '') {
          return true;
        }
      }
    }
  }

  enterMove = (id) => {
    const squares = [...this.state.squares]
    for(var i=0; i<9; i++) {
      if(squares[i].id === id) {
        squares[i].content = this.state.currentPlayer;
        return squares;
      }
    }
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
